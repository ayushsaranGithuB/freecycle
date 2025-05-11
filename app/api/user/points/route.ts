import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import jwt from 'jsonwebtoken';

// Helper to extract user ID from session or Bearer token
async function getUserIdFromRequest(req: Request): Promise<string | null> {
    // Try next-auth session first
    const session = await auth();
    if (session && session.user?.id) return session.user.id;

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
    return null;
}

export async function POST(req: Request) {
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await req.json();
    const { action, points } = body;

    if (!action || !points || !['EARN', 'SPEND', 'BONUS', 'PURCHASE'].includes(action)) {
        return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const user = await prisma.user.update({
        where: { phone: userId },
        data: {
            pointsBalance: {
                increment: ['EARN', 'BONUS', 'PURCHASE'].includes(action) ? points : -points,
            },
        },
    });

    await prisma.pointsTransaction.create({
        data: {
            userId,
            type: action,
            pointsChange: ['EARN', 'BONUS', 'PURCHASE'].includes(action) ? points : -points,
            source: 'Top-Up', // Example source, adjust as needed
        },
    });

    return NextResponse.json({ message: `User points updated`, user });
}

export async function GET(req: Request) {
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { phone: userId },
        select: { pointsBalance: true },
    });

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ pointsBalance: user.pointsBalance });
}