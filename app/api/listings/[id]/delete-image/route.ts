import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { image } = await request.json();

    if (!image) {
        return NextResponse.json({ error: "Image not specified" }, { status: 400 });
    }

    try {
        // Remove the image from the database
        const item = await prisma.item.findUnique({ where: { id: parseInt(id, 10) } });

        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }



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