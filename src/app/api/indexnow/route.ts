import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/indexnow
 *
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver) for instant indexing.
 * Call this after deploying new or updated pages.
 *
 * Body: { urls: string[] }
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'solokit-indexnow-2026';
const HOST = 'solokit.app';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls array required' }, { status: 400 });
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls.map((url: string) => url.startsWith('http') ? url : `https://${HOST}${url}`),
    };

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      status: response.status,
      submitted: payload.urlList.length,
      urls: payload.urlList,
    });
  } catch (err) {
    return NextResponse.json({ error: 'IndexNow submission failed' }, { status: 500 });
  }
}

/**
 * GET /api/indexnow
 *
 * Returns the IndexNow key for verification.
 */
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
