import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * Formats the private key from environment variable
 * Handles various formats: escaped newlines, literal newlines, etc.
 */
function formatPrivateKey(key: string): string {
  if (!key) return key;

  // Replace escaped newlines with actual newlines
  let formatted = key.replace(/\\n/g, '\n');

  // If the key doesn't have newlines but has BEGIN/END, it might need them
  if (formatted.includes('BEGIN') && !formatted.includes('\n')) {
    // Try to add newlines around BEGIN/END markers
    formatted = formatted
      .replace(/-----BEGIN/g, '-----BEGIN')
      .replace(/-----END/g, '-----END');
  }

  return formatted;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: '請輸入電子郵件地址' },
        { status: 400 }
      );
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: '請輸入有效的電子郵件地址' },
        { status: 400 }
      );
    }

    // Get environment variables
    const serviceAccountEmail = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL;
    const rawPrivateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1'; // Default to Sheet1

    if (!serviceAccountEmail || !rawPrivateKey || !spreadsheetId) {
      console.error('Missing Google Sheets configuration');
      return NextResponse.json(
        { error: '伺服器設定錯誤，請稍後再試' },
        { status: 500 }
      );
    }

    // Format the private key properly
    const privateKey = formatPrivateKey(rawPrivateKey);

    // Ensure the key has proper BEGIN/END markers
    if (!privateKey.includes('BEGIN') || !privateKey.includes('END')) {
      console.error('Private key format appears incorrect - missing BEGIN/END markers');
      return NextResponse.json(
        { error: '伺服器設定錯誤，請檢查私鑰格式' },
        { status: 500 }
      );
    }

    // Authenticate with Google Sheets API
    let auth;
    try {
      auth = new google.auth.JWT({
        email: serviceAccountEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    } catch (authError: any) {
      console.error('Authentication error:', authError);
      if (authError.message?.includes('DECODER') || authError.code === 'ERR_OSSL_UNSUPPORTED') {
        return NextResponse.json(
          { error: '私鑰格式錯誤，請確認環境變數中的私鑰格式正確（需包含 \\n 換行符）' },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: '認證失敗，請檢查服務帳號設定' },
        { status: 500 }
      );
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Try to get the actual sheet name if Sheet1 doesn't work
    let actualSheetName = sheetName;
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId,
      });
      const firstSheet = spreadsheet.data.sheets?.[0];
      if (firstSheet?.properties?.title) {
        actualSheetName = firstSheet.properties.title;
      }
    } catch (sheetError) {
      console.warn('Could not get sheet name, using default:', sheetError);
    }

    // Check for duplicate email
    try {
      // Use A1 notation: SheetName!A:A or just A:A if using default sheet
      const range = `${actualSheetName}!A:A`;
      const existingData = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const existingEmails = existingData.data.values
        ? existingData.data.values.flat().map((e: string) => e?.toLowerCase().trim())
        : [];

      if (existingEmails.includes(normalizedEmail)) {
        return NextResponse.json(
          { error: '此電子郵件已經訂閱過了' },
          { status: 409 } // Conflict status
        );
      }
    } catch (checkError: any) {
      // If we can't check for duplicates, continue anyway (sheet might be empty or range issue)
      console.warn('Could not check for duplicate emails:', checkError.message || checkError);
      // If it's a range error, try without sheet name
      if (checkError.message?.includes('Unable to parse range')) {
        try {
          const existingData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'A:A', // Try without sheet name
          });
          const existingEmails = existingData.data.values
            ? existingData.data.values.flat().map((e: string) => e?.toLowerCase().trim())
            : [];
          if (existingEmails.includes(normalizedEmail)) {
            return NextResponse.json(
              { error: '此電子郵件已經訂閱過了' },
              { status: 409 }
            );
          }
        } catch (retryError) {
          console.warn('Retry check also failed:', retryError);
        }
      }
    }

    // Append email and timestamp to the sheet
    const timestamp = new Date().toISOString();
    let appendRange = `${actualSheetName}!A:B`;

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: appendRange,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[normalizedEmail, timestamp]],
        },
      });
    } catch (appendError: any) {
      // If range error, try without sheet name
      if (appendError.message?.includes('Unable to parse range')) {
        appendRange = 'A:B';
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: appendRange,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[normalizedEmail, timestamp]],
          },
        });
      } else {
        throw appendError;
      }
    }

    return NextResponse.json(
      { success: true, message: '訂閱成功！我們會在第一時間通知你。' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error subscribing email:', error);

    // Handle OpenSSL/decoder errors (usually private key format issues)
    if (error.code === 'ERR_OSSL_UNSUPPORTED' || error.message?.includes('DECODER routines')) {
      console.error('Private key format error. Ensure the key is properly formatted with \\n for newlines.');
      return NextResponse.json(
        { error: '伺服器設定錯誤：私鑰格式不正確，請檢查環境變數設定' },
        { status: 500 }
      );
    }

    // Handle specific Google API errors
    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { error: '無法連接到伺服器，請稍後再試' },
        { status: 503 }
      );
    }

    if (error.response?.status === 403) {
      return NextResponse.json(
        { error: '權限錯誤，請檢查服務帳號設定' },
        { status: 500 }
      );
    }

    if (error.response?.status === 404) {
      return NextResponse.json(
        { error: '找不到指定的試算表，請檢查設定' },
        { status: 500 }
      );
    }

    // Handle range parsing errors
    if (error.message?.includes('Unable to parse range') || error.code === 400) {
      return NextResponse.json(
        { error: '試算表範圍設定錯誤，請檢查工作表名稱設定' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: '訂閱失敗，請稍後再試' },
      { status: 500 }
    );
  }
}
