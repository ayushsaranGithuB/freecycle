import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from '@/auth';
import jwt from 'jsonwebtoken';

// Helper to extract user ID from session or Bearer token
async function getUserIdFromRequest(req: Request): Promise<string | null> {
    const session = await auth();
    if (session && session.user?.id) return session.user.id;
    const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.slice(7);
        try {
            const secret = process.env.AUTH_SECRET;
            if (!secret) throw new Error('Missing AUTH_SECRET');
            const decoded = jwt.verify(token, secret) as { id?: string };
            return decoded.id || null;
        } catch (err) {
            return null;
        }
    }
    return null;
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const authUserId = await getUserIdFromRequest(req);
    if (!authUserId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (authUserId !== userId) {
        return NextResponse.json({ error: 'Forbidden: not your profile' }, { status: 403 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { phone: userId },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const authUserId = await getUserIdFromRequest(req);
    if (!authUserId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (authUserId !== userId) {
        return NextResponse.json({ error: 'Forbidden: not your profile' }, { status: 403 });
    }

    try {
        const data = await req.json();
        const updatedUser = await prisma.user.update({
            where: { phone: userId },
            data,
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
