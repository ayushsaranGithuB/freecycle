import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = parseInt(url.pathname.split('/').pop() || '', 10);

    const listing = await prisma.item.findUnique({ where: { id } });
    if (!listing) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(listing);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const data = await request.json();

        const updatedListing = await prisma.item.update({
            where: { id: parseInt(id, 10) },
            data,
        });

        return NextResponse.json(updatedListing, { status: 200 });
    } catch (error) {
        console.error("Error updating listing:", error);
        return NextResponse.json({ error: "Failed to update listing" }, { status: 500 });
    }
}