"use client";
import { Check, House } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "@/app/styles/auth.css";
import { Button } from "@/app/components/ui/button";

const SignupSuccess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "User";
  const phone = searchParams.get("phone") || "";

  useEffect(() => {
    // If no phone number, redirect to signup
    if (!phone) {
      router.push("/auth/signup");
    }
  }, [phone, router]);

  return (
    <div className="login-screen">
      <ul className="breadcrumbs">
        <li>
          <Link href="/" className="flex items-center gap-1">
            <House width={12} height={12} /> Home
          </Link>
        </li>
        <li>&raquo;</li>
        <li>
          <Link href="/auth/signup">Create an account</Link>
        </li>
        <li>&raquo;</li>
        <li>
          <Link href="/auth/signup/success">Success</Link>
        </li>
      </ul>

      <div className="w-full max-w-sm card text-center">
        <div className="bg-green-100 p-3 mb-6 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
          <Check className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="titleUnderlined">Account Created!</h1>

        <p className="mb-6 text-gray-700">
          Welcome, <span className="font-semibold">{name}</span>! Your account
          has been created successfully.
        </p>

        <p className="mb-8 text-gray-600">
          You can now sell your electronic items, earn points, and buy
          refurbished devices at affordable prices.
        </p>

        <div className="flex flex-col gap-3">
          <Button asChild className="primary">
            <Link href="/account/dashboard">Go to Dashboard</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/list-item">List Your First Item</Link>
          </Button>

          <Button asChild variant="link" className="text-gray-600">
            <Link href="/">Explore Marketplace</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
