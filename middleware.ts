import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// Protect all private paths
const PRIVATE_PATHS = [
    "/account",
];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public paths
    if (!PRIVATE_PATHS.some((p) => pathname.startsWith(p))) {
        return NextResponse.next();
    }

    // Check authentication
    const session = await auth();
    if (!session || !session.user?.id) {
        // Redirect to sign-in page
        const signInUrl = new URL("/auth/", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Protect all routes except static files and public paths
        "/((?!_next|favicon.ico|public|uploads|api/auth|auth/otp|auth/signup|auth).*)"
    ]
};