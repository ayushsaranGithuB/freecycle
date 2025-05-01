import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = parseInt(url.pathname.split('/').pop() || '', 10);

    const listing = await prisma.item.findUnique({ where: { id } });
    if (!listing) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(listing);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const itemId = await params.id;

    try {
        const formData = await request.formData();
        const updates: any = {};

        // Update text fields
        for (const [key, value] of formData.entries()) {
            if (key !== 'images') {
                updates[key] = value;
            }
        }

        // Ensure integer fields are properly converted
        if (updates.ageYears) {
            updates.ageYears = parseInt(updates.ageYears, 10);
        }
        if (updates.originalMsrp) {
            updates.originalMsrp = parseInt(updates.originalMsrp, 10);
        }
        if (updates.estimatedMarketPrice) {
            updates.estimatedMarketPrice = parseInt(updates.estimatedMarketPrice, 10) || 0;
        }
        if (updates.pointsValue) {
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

        if (imagePaths.length > 0) {
            updates.images = imagePaths;
        }

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