import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export async function POST(req: Request) {
    const session = await auth();
    if (!session || !session.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await req.json();
    const { itemId, userId } = body;

    // Only allow the authenticated user to purchase as themselves
    if (!itemId || !userId || userId !== session.user.id) {
        return NextResponse.json({ error: 'Invalid or unauthorized request' }, { status: 400 });
    }

    // Fetch the seller's phone based on the itemId
    const item = await prisma.item.findUnique({
        where: { id: itemId },
        select: { ownerPhone: true },
    });

    if (!item || !item.ownerPhone) {
        return NextResponse.json({ error: 'Seller not found for the given item' }, { status: 404 });
    }

    const purchase = await prisma.transaction.create({
        data: {
            item: { connect: { id: itemId } },
            buyer: { connect: { phone: userId } },
            seller: { connect: { phone: item.ownerPhone } },
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
    const session = await auth();
    if (!session || !session.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    // Only allow the authenticated user to fetch their own purchases
    if (!userId || userId !== session.user.id) {
        return NextResponse.json({ error: 'Invalid or unauthorized request' }, { status: 400 });
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