import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = parseInt(url.pathname.split('/').pop() || '', 10);

    const listing = await prisma.listing.findUnique({ where: { id } });
    if (!listing) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(listing);
}