import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = await params;

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

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = await params;

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
