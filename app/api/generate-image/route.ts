import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
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

/**
 * Get client IP address from request
 */
function getClientIP(request: NextRequest): string {
  // Try various headers that might contain the IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

/**
 * Log image generation request to Google Sheet
 */
async function logToGoogleSheet(
  ipAddress: string,
  timestamp: string,
  prompt: string,
  status: string = 'success',
  error?: string
): Promise<void> {
  try {
    // Get environment variables for Google Sheets logging
    const logSpreadsheetId = process.env.GOOGLE_SHEETS_LOG_SPREADSHEET_ID;
    const logSheetName = process.env.GOOGLE_SHEETS_LOG_SHEET_NAME || 'Sheet1';
    const serviceAccountEmail = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL;
    const rawPrivateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

    // Debug logging
    console.log('🔍 Google Sheets Logging Debug:');
    console.log('  GOOGLE_SHEETS_LOG_SPREADSHEET_ID:', logSpreadsheetId ? '✅ Set' : '❌ Missing');
    console.log('  GOOGLE_SHEETS_LOG_SHEET_NAME:', logSheetName);
    console.log('  GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL:', serviceAccountEmail ? '✅ Set' : '❌ Missing');
    console.log('  GOOGLE_SHEETS_PRIVATE_KEY:', rawPrivateKey ? '✅ Set' : '❌ Missing');

    // If logging is not configured, skip silently
    if (!logSpreadsheetId || !serviceAccountEmail || !rawPrivateKey) {
      console.log('⚠️ Google Sheets logging not configured, skipping log entry');
      console.log('  Missing:', {
        logSpreadsheetId: !logSpreadsheetId,
        serviceAccountEmail: !serviceAccountEmail,
        rawPrivateKey: !rawPrivateKey,
      });
      return;
    }

    // Format the private key properly
    const privateKey = formatPrivateKey(rawPrivateKey);

    // Authenticate with Google Sheets API
    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get actual sheet name
    let actualSheetName = logSheetName;
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: logSpreadsheetId,
      });
      const firstSheet = spreadsheet.data.sheets?.[0];
      if (firstSheet?.properties?.title) {
        actualSheetName = firstSheet.properties.title;
      }
    } catch (sheetError) {
      console.warn('Could not get sheet name, using default:', sheetError);
    }

    // Prepare the row data: IP Address, Timestamp, Prompt, Status, Error (if any)
    const rowData = [ipAddress, timestamp, prompt, status];
    if (error) {
      rowData.push(error);
    }

    // Append to the sheet
    let appendRange = `${actualSheetName}!A:E`;
    console.log(`📝 Attempting to append to sheet: ${logSpreadsheetId}, range: ${appendRange}`);
    console.log(`📊 Row data:`, rowData);

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: logSpreadsheetId,
        range: appendRange,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData],
        },
      });
      console.log('✅ Successfully logged to Google Sheet');
    } catch (appendError: any) {
      console.error('❌ Error appending to sheet:', appendError.message || appendError);
      console.error('   Error details:', JSON.stringify(appendError, null, 2));

      // If range error, try without sheet name
      if (appendError.message?.includes('Unable to parse range')) {
        console.log('🔄 Retrying without sheet name...');
        appendRange = 'A:E';
        try {
          await sheets.spreadsheets.values.append({
            spreadsheetId: logSpreadsheetId,
            range: appendRange,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [rowData],
            },
          });
          console.log('✅ Successfully logged to Google Sheet (retry)');
        } catch (retryError: any) {
          console.error('❌ Retry also failed:', retryError.message || retryError);
          throw retryError;
        }
      } else {
        throw appendError;
      }
    }
  } catch (error: any) {
    // Log error but don't throw - we don't want logging failures to affect the main flow
    console.error('❌ Error logging to Google Sheet:', error);
    console.error('   Error message:', error.message);
    console.error('   Error code:', error.code);
    console.error('   Error response:', error.response?.data);

    // Check for common errors
    if (error.code === 403) {
      console.error('⚠️ Permission denied. Make sure the service account email has edit access to the Google Sheet.');
      console.error('   Service account email:', process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL);
    } else if (error.code === 404) {
      console.error('⚠️ Spreadsheet not found. Check if the spreadsheet ID is correct.');
      console.error('   Spreadsheet ID:', process.env.GOOGLE_SHEETS_LOG_SPREADSHEET_ID);
    }
  }
}

export async function POST(request: NextRequest) {
  let socialEnergyText = 'N/A';
  try {
    const requestBody = await request.json();
    socialEnergyText = requestBody.socialEnergyText || 'N/A';

    // Validate socialEnergyText
    if (!socialEnergyText || typeof socialEnergyText !== 'string' || socialEnergyText.trim().length === 0) {
      return NextResponse.json(
        { error: 'Social energy text is required' },
        { status: 400 }
      );
    }

    // Check if user has already generated an image
    const cookieStore = await cookies();
    const hasGenerated = cookieStore.get('image_generated');

    if (hasGenerated) {
      return NextResponse.json(
        { error: 'You have already generated an image. Only one generation is allowed.' },
        { status: 403 }
      );
    }

    // Get OpenAI API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('Missing OPENAI_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Build the image generation prompt from socialEnergyText
    // const imagePrompt = `Create a whatsapp sticker representing this social energy state: "${socialEnergyText.trim()}". A pixel character with Soft pastel colors, whatsapp sticker-like design, suitable for messaging apps, with a white border. No text.`;
    const imagePrompt = `Create a WhatsApp sticker that expresses a social energy state: "${socialEnergyText.trim()}" rather than a literal scene. The sticker should include the social energy state as a battery icon on the bottom of the sticker.

    Use a pixel-style character with soft pastel colors. The character's posture, body language, and facial expression should subtly communicate:
    - drained social energy
    - lack of motivation to interact
    - quiet detachment from surroundings

    The scene should feel minimal, still, and slightly empty, as if time has slowed down. Avoid explicit actions or storytelling — focus on mood and internal state.

    WhatsApp sticker-style design, simple composition, soft lighting, white border, **NO TEXT** is allowed.
  `;

    // Call OpenAI DALL-E API
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: imagePrompt,
        n: 1,
        size: '1024x1024',
        quality: 'medium',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API error:', errorData);

      // Log error to Google Sheet
      const ipAddress = getClientIP(request);
      const timestamp = new Date().toISOString();
      const errorMessage = JSON.stringify(errorData);
      await logToGoogleSheet(ipAddress, timestamp, socialEnergyText.trim(), 'error', errorMessage);

      return NextResponse.json(
        { error: 'Failed to generate image', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    const base64Image = data.data?.[0]?.b64_json;

    if (!base64Image) {
      // Log error to Google Sheet
      const ipAddress = getClientIP(request);
      const timestamp = new Date().toISOString();
      await logToGoogleSheet(ipAddress, timestamp, socialEnergyText.trim(), 'error', 'No base64 image data returned from API');

      return NextResponse.json(
        { error: 'No base64 image data returned from API' },
        { status: 500 }
      );
    }

    // Set cookie to prevent future generations
    cookieStore.set('image_generated', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });

    // Log successful generation to Google Sheet (don't await to avoid blocking response)
    const ipAddress = getClientIP(request);
    const timestamp = new Date().toISOString();
    logToGoogleSheet(ipAddress, timestamp, socialEnergyText.trim(), 'success').catch((err) => {
      console.error('Failed to log to Google Sheet:', err);
    });

    return NextResponse.json(
      { success: true, imageBase64: base64Image },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error calling DALL-E API:', error);

    // Log error to Google Sheet
    const ipAddress = getClientIP(request);
    const timestamp = new Date().toISOString();
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    await logToGoogleSheet(ipAddress, timestamp, socialEnergyText, 'error', errorMessage);

    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
