import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { userId, action, points } = body;

    if (!userId || !action || !points || (action !== 'add' && action !== 'deduct')) {
        return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const user = await prisma.user.update({
        where: { phone: userId },
        data: {
            pointsBalance: {
                increment: action === 'add' ? points : -points,
            },
        },
    });

    return NextResponse.json({ message: `User points updated`, user });
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
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