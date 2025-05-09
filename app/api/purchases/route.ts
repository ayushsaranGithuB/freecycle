import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { itemId, userId } = body;

    if (!itemId || !userId) {
        return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const purchase = await prisma.transaction.create({
        data: {
            item: { connect: { id: itemId } },
            buyer: { connect: { phone: userId } },
            seller: { connect: { phone: "SELLER_PHONE_PLACEHOLDER" } }, // Replace with actual seller phone
            status: 'PENDING',
            shippingCostPaid: 0, // Default value
            ewasteKg: 0,
            leadGrams: 0,
            mercuryMilligrams: 0,
            cadmiumMilligrams: 0,
            lithiumGrams: 0,
            plasticGrams: 0,
            glassGrams: 0,
            rareEarthGrams: 0,
        },
    });

    return NextResponse.json({ message: `User ${userId} purchased item ${itemId}`, purchase });
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    if (!userId) {
        return NextResponse.json({ error: 'Missing userId parameter' }, { status: 400 });
    }

    try {
        const purchases = await prisma.transaction.findMany({
            where: { buyerPhone: userId },
            include: { item: true },
            take: limit,
        });

        return NextResponse.json(purchases);
    } catch (error) {
        console.error('Error fetching purchases:', error);
        return NextResponse.json({ error: 'Failed to fetch purchases' }, { status: 500 });
    }
}