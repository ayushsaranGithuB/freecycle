import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { NextRequest } from "next/server";
import { auth } from "@/auth"

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { transactionId: string } }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { transactionId } = await params;

    try {
        const transaction = await prisma.transaction.findUnique({
            where: { id: parseInt(transactionId, 10) },
            include: {
                item: true,
                seller: true,
            },
        });

        if (!transaction) {
            return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
        }

        const seller = await prisma.user.findUnique({
            where: { phone: transaction.sellerPhone },
        });

        if (!seller) {
            return NextResponse.json({ error: "Seller not found" }, { status: 404 });
        }

        const item = await prisma.item.findUnique({
            where: { id: transaction.itemId },
        });

        if (!item) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        return NextResponse.json({
            transaction,
            items: [item],
            seller,
        });
    } catch (error) {
        console.error("Error fetching invoice details:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
