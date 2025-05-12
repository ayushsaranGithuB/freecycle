import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';
import jwt from 'jsonwebtoken';

// Helper to extract user ID from session or Bearer token
async function getUserIdFromRequest(req: Request): Promise<string | null> {
    // Try next-auth session first
    const session = await auth();
    if (session && session.user?.id) return session.user.id;

    // Fallback: check for Bearer token
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

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = parseInt(url.pathname.split('/').pop() || '', 10);

    const listing = await prisma.item.findUnique({ where: { id } });
    if (!listing) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(listing);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const itemId = (await params).id;
    const userId = await getUserIdFromRequest(request);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check ownership
    const item = await prisma.item.findUnique({ where: { id: parseInt(itemId, 10) } });
    if (!item) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    if (item.ownerPhone !== userId) {
        return NextResponse.json({ error: 'Forbidden: not the owner' }, { status: 403 });
    }

    try {
        const formData = await request.formData();
        // Use Record<string, unknown> for updates
        const updates: Record<string, unknown> = {};

        // Update text fields
        for (const [key, value] of formData.entries()) {
            if (key !== 'images') {
                updates[key] = value;
            }
        }

        // Ensure integer fields are properly converted
        if (typeof updates.ageYears === 'string') {
            updates.ageYears = parseInt(updates.ageYears, 10);
        }
        if (typeof updates.originalMsrp === 'string') {
            updates.originalMsrp = parseInt(updates.originalMsrp, 10);
        }
        if (typeof updates.estimatedMarketPrice === 'string') {
            updates.estimatedMarketPrice = parseInt(updates.estimatedMarketPrice, 10) || 0;
        }
        if (typeof updates.pointsValue === 'string') {
            updates.pointsValue = parseInt(updates.pointsValue, 10);
        }

        // Ensure the correct field name for images
        if (updates.image) {
            updates.images = updates.image;
            delete updates.image;
        }

        // Handle image uploads
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', itemId);
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const imageFiles = formData.getAll('images') as File[];
        const imagePaths: string[] = [];

        for (const file of imageFiles) {
            // Ensure file has a valid name
            if (!file.name) {
                console.error('File is missing a name:', file);
                continue;
            }

            const filePath = path.join(uploadDir, file.name);
            const fileBuffer = Buffer.from(await file.arrayBuffer());
            fs.writeFileSync(filePath, fileBuffer);
            imagePaths.push(`/uploads/${itemId}/${file.name}`);
        }

        // Fetch existing images from the database
        const existingItem = await prisma.item.findUnique({ where: { id: parseInt(itemId, 10) } });
        const existingImages = Array.isArray(existingItem?.images) ? existingItem.images : [existingItem?.images];

        // Append new images to existing ones
        const updatedImages = [...existingImages, ...imagePaths];
        updates.images = updatedImages;

        // Update the item in the database
        const updatedItem = await prisma.item.update({
            where: { id: parseInt(itemId, 10) },
            data: updates,
        });

        return NextResponse.json(updatedItem);
    } catch (error) {
        console.error('Error updating item:', error);
        return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const param = await params;
    const itemId = param.id;
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check ownership
    const item = await prisma.item.findUnique({ where: { id: parseInt(itemId, 10) } });
    if (!item) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    if (item.ownerPhone !== userId) {
        return NextResponse.json({ error: 'Forbidden: not the owner' }, { status: 403 });
    }

    // Fetch and Delete associated images with this item
    const images = item?.images;
    if (images && Array.isArray(images)) {
        for (const image of images) {
            if (image !== null) {
                const filePath = path.join(process.cwd(), 'public', image as string);
                fs.unlinkSync(filePath);
            }
        }
    }

    try {
        await prisma.item.delete({ where: { id: parseInt(itemId, 10) } });
        return NextResponse.json({ message: `Item ${itemId} deleted successfully` });
    } catch (error) {
        console.error('Error deleting item:', error);
        return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
    }
}