// fetchUserJourney
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;

    try {
        let userJourney = await prisma.userJourney.findUnique({
            where: { phone: userId },
        });

        if (!userJourney) {
            userJourney = await prisma.userJourney.create({
                data: { phone: userId },
            });
        }

        return NextResponse.json(userJourney);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    try {
        const body = await req.json();

        let userJourney = await prisma.userJourney.findUnique({
            where: { phone: userId },
        });

        if (!userJourney) {
            userJourney = await prisma.userJourney.create({
                data: { phone: userId, ...body },
            });
        } else {
            userJourney = await prisma.userJourney.update({
                where: { phone: userId },
                data: { ...body },
            });
        }

        return NextResponse.json(userJourney);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}