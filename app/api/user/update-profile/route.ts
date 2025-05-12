import { NextResponse } from "next/server";
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

export async function POST(req: Request) {
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const { name, email, pincode } = await req.json();

        // Only allow updating the authenticated user
        const updatedUser = await prisma.user.update({
            where: { phone: userId },
            data: {
                name: name || undefined,
                email: email || undefined,
                pincode: pincode || undefined,
            },
        });

        return NextResponse.json({
            message: "Profile updated successfully.",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ error: "An error occurred while updating your profile." }, { status: 500 });
    }
}
