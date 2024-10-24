import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.toString();

    return NextResponse.redirect(`https://fed.brid.gy/.well-known/host-meta?${query}`, 302);
}
