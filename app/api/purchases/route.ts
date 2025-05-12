import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import jwt from 'jsonwebtoken';

// Helper to extract JWT from Authorization header and verify it
async function getUserIdFromRequest(req: Request): Promise<string | null> {
    // Try next-auth session first
    const session = await auth();
    console.log('Session:', session);
    if (session && session.user?.id) {
        console.log('User ID from session:', session.user.id);
        return session.user.id;
    }

    // Fallback: check for Bearer token
    const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
    console.log('Authorization header:', authHeader);
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.slice(7);
        try {
            const secret = process.env.AUTH_SECRET;
            if (!secret) throw new Error('Missing AUTH_SECRET');
            const decoded = jwt.verify(token, secret) as { id?: string };
            console.log('Decoded JWT:', decoded);
            return decoded.id || null;
        } catch (err) {
            console.error('JWT verification error:', err);
            return null;
        }
    }
    console.log('No valid session or Bearer token found');
    return null;
}

export async function POST(req: Request) {
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await req.json();
    const { itemId } = body;

    // Only allow the authenticated user to purchase as themselves
    if (!itemId) {
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
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    try {
        const purchases = await prisma.transaction.findMany({
            where: { buyerPhone: userId },
            include: { item: true },
            take: limit,
            skip: offset,
        });

        return NextResponse.json(purchases);
    } catch (error) {
        console.error('Error fetching purchases:', error);
        return NextResponse.json({ error: 'Failed to fetch purchases' }, { status: 500 });
    }
}