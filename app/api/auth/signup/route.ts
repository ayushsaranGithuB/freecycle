import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Mock OTP provider
const sendOtp = (phone: string) => {
    console.log(`Sending OTP 9999 to phone number: ${phone}`);
    return true;
};

export async function POST(req: Request) {
    try {
        const { phone, otp, name } = await req.json();

        if (!phone || !otp) {
            return NextResponse.json({ error: "Phone and OTP are required." }, { status: 400 });
        }

        // Convert OTP to string if it's an array
        const otpString = Array.isArray(otp) ? otp.join("") : otp;

        if (otpString !== "9999") {
            return NextResponse.json({ error: "Invalid OTP." }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({ where: { phone } });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists." }, { status: 400 });
        }

        // Create a new user
        const newUser = await prisma.user.create({
            data: {
                phone,
                name: name || "Anonymous",
            },
        });

        return NextResponse.json({ message: "User created successfully.", user: newUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred." }, { status: 500 });
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get("phone");

    if (!phone) {
        return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    // Mock sending OTP
    sendOtp(phone);

    return NextResponse.json({ message: "OTP sent successfully." });
}