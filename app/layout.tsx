import type { Metadata } from "next";
import { Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/ui/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freecycle - Where Old Tech Finds New Homes",
  description: "Where Old Tech Finds New Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${nunito.variable}  bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SessionProvider>
          <Navigation />
          <main className="max-w-[1160px] mx-auto w-full ">{children}</main>
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
