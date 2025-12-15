import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const hasGenerated = cookieStore.get('image_generated');

    return NextResponse.json(
      { hasGenerated: !!hasGenerated },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error checking generation status:', error);
    return NextResponse.json(
      { error: 'Failed to check status', hasGenerated: false },
      { status: 500 }
    );
  }
}
