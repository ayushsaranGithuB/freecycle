import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    const items = await prisma.item.findMany();
    return NextResponse.json(items);
}

export async function POST(request: Request) {
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
                    connect: { phone: data.owner }
                },
                images: [], // Placeholder for images
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