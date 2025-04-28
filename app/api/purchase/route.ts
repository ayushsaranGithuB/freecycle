import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { itemId, userId } = body;

    if (!itemId || !userId) {
        return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const purchase = await prisma.purchase.create({
        data: {
            itemId,
            userId,
        },
    });

    return NextResponse.json({ message: `User ${userId} purchased item ${itemId}`, purchase });
}