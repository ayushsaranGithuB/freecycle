import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Example: validateOtp function, replace with your real logic
async function validateOtp(phone: string, otp: string): Promise<boolean> {
    return otp === "9999";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth/otp",
    },
    providers: [
        CredentialsProvider({
            name: "Phone OTP",
            credentials: {
                phone: { label: "Phone Number", type: "number" },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials, request) {
                const phone = credentials?.phone as string;
                const otp = credentials?.otp as string;

                if (!phone || !otp) {
                    console.error("Phone number and OTP are required.");
                    return null;
                }

                try {
                    const isValidOtp = await validateOtp(phone, otp);

                    if (isValidOtp) {
                        const user = {
                            id: phone,                      // id MUST be a string
                            name: "User " + phone,           // name is optional
                            email: `${phone}@example.com`,   // email is optional
                            image: null,
                            phone: phone                    // optional
                        };
                        console.log("User authenticated:", user);
                        return user;
                    }
                } catch (error) {
                    console.error("Error during OTP validation:", error);
                }

                return null;
            },
        }),
    ],
    secret: process.env.AUTH_SECRET,
    debug: true,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Store user ID in the JWT
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string; // Make ID available in the session
            }
            return session;
        },
    },
});

export default auth;
