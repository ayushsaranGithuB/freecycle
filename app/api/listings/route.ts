import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ItemCategory } from '@prisma/client';
import { ItemCondition } from '@prisma/client';
import { ItemStatus } from '@prisma/client'; // Import ItemStatus type
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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '12', 10); // Default limit to 12
    const searchQuery = searchParams.get('searchQuery') || '';
    const category = searchParams.get('category') || null;
    const condition = searchParams.get('condition') || null;
    const minPrice = parseFloat(searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(searchParams.get('maxPrice') || '10000');
    const status = searchParams.get('status') || null; // Extract status from query params
    const userId = searchParams.get('userId') || null;

    const items = await prisma.item.findMany({
        take: limit,
        where: {
            title: searchQuery ? { contains: searchQuery } : undefined,
            category: category ? (category as ItemCategory) : undefined,
            condition: condition ? (condition as ItemCondition) : undefined,
            estimatedMarketPrice: {
                gte: minPrice,
                lte: maxPrice,
            },
            status: status ? (status as ItemStatus) : undefined, // Cast status to ItemStatus
            owner: userId ? { phone: userId } : undefined,
        },
    });

    return NextResponse.json(items);
}

export async function POST(request: Request) {
    const userId = await getUserIdFromRequest(request);
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const data = await request.json();

        const newItem = await prisma.item.create({
            data: {
                title: data.title,
                description: data.description,
                brand: data.brand,
                category: data.category,
                condition: data.condition,
                ageYears: data.ageYears,
                originalMsrp: data.originalMsrp,
                estimatedMarketPrice: data.estimatedMarketPrice,
                pointsValue: data.pointsValue,
                locationPincode: data.locationPincode,
                owner: {
                    connect: { phone: userId }
                },
                images: data.images,
            },
        });

        const itemId = newItem.id;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', itemId.toString());
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // check if images exist       
        if (data.images) {

            const imagePromises = data.images.map(async (image: { name: string, content: string }) => {
                const imagePath = path.join(uploadDir, image.name);
                fs.writeFileSync(imagePath, Buffer.from(image.content, 'base64'));
                return `/uploads/${itemId}/${image.name}`;
            });

            const imagePaths = await Promise.all(imagePromises);

            await prisma.item.update({
                where: { id: itemId },
                data: { images: imagePaths },
            });
        }

        return NextResponse.json({
            success: true,
            id: newItem.id,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating item:', error);
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}