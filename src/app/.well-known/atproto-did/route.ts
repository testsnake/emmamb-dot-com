import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

export async function GET(request: Request) {

    const bskyKey: string = process.env.BLUESKY_ATPROTO || "NOT_FOUND";

    return new NextResponse(bskyKey, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
}