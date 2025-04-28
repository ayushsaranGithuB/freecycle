import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { userId, action, points } = body;

    if (!userId || !action || !points || (action !== 'add' && action !== 'deduct')) {
        return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            points: {
                increment: action === 'add' ? points : -points,
            },
        },
    });

    return NextResponse.json({ message: `User points updated`, user });
}