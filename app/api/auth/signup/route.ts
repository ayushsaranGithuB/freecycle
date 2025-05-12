import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Mock OTP provider
const sendOtp = (phone: string) => {
    console.log(`Sending OTP 9999 to phone number: ${phone}`);
    return true;
};

// Rate limiter: 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
    points: 5, // 5 requests
    duration: 60, // per 60 seconds by IP
});

export async function POST(req: Request) {
    // Rate limit by IP
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    try {
        await rateLimiter.consume(ip as string);
    } catch (rateLimiterRes) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

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
            return NextResponse.json({
                message: "OTP verified successfully.",
                user: existingUser
            });
        }

        // Create a new user with minimal info - name will be updated in profile setup
        const newUser = await prisma.user.create({
            data: {
                phone,
                name: name || "User", // Temporary name, will be updated in profile setup
            },
        });

        return NextResponse.json({ message: "OTP verified successfully.", user: newUser });
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