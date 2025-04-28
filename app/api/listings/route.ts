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
                ownerId: 1, // Use ownerId directly
                images: data.images || [], // Provide default or passed images
            },
        });

        return NextResponse.json({
            success: true,
            id: newItem.id,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating item:', error);
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}