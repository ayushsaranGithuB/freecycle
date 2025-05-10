import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId, phone, name, email, pincode } = await req.json();

        if (!phone) {
            return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
        }

        // Update the user profile
        const updatedUser = await prisma.user.update({
            where: { phone },
            data: {
                name: name || undefined,
                email: email || undefined,
                pincode: pincode || undefined,
            },
        });

        return NextResponse.json({
            message: "Profile updated successfully.",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ error: "An error occurred while updating your profile." }, { status: 500 });
    }
}
