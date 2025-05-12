import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";
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

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check ownership
    const item = await prisma.item.findUnique({ where: { id: parseInt(id, 10) } });
    if (!item) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    if (item.ownerPhone !== userId) {
        return NextResponse.json({ error: 'Forbidden: not the owner' }, { status: 403 });
    }

    const { image } = await req.json();

    if (!image) {
        return NextResponse.json({ error: "Image not specified" }, { status: 400 });
    }

    try {
        // Remove the image from the database
        const updatedImages = Array.isArray(item.images) ? item.images.filter((img) => img !== image) : [];

        await prisma.item.update({
            where: { id: parseInt(id, 10) },
            data: { images: updatedImages },
        });

        // Remove the image file from the server
        const imagePath = path.join(process.cwd(), "public", image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        return NextResponse.json({ message: "Image deleted successfully" });
    } catch (error) {
        console.error("Error deleting image:", error);
        return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }
}