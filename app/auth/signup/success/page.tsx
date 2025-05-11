"use client";
import { House } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import "@/app/styles/auth.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignupSuccess = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";

  useEffect(() => {
    // If no phone number, redirect to signup
    if (!phone) {
      router.push("/auth/signup");
      return;
    }

    // Automatically log the user in using next-auth credentials provider
    const autoLogin = async () => {
      try {
        // Use a default OTP (e.g. 9999) for auto-login after signup
        const res = await signIn("credentials", {
          phone,
          otp: "9999",
          redirect: false,
        });
        if (res?.error) {
          router.push("/auth/signup");
        }
        // Create a cookie to mark the user as new signup
        document.cookie = `newSignup=true; path=/; max-age=360000`; // expiration set to 10 days
      } catch (error) {
        router.push("/auth/signup");
      }
    };
    autoLogin();
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
      </ul>

      <div className="w-full max-w-sm card text-center success-screen">
        <Image
          src={"/happyPlanet.svg"}
          width={310}
          height={310}
          alt="Hooray!"
        />

        <h1 className="text-2xl">Hooray!</h1>

        <p className="text">
          You&apos;re ready to start trading tech and saving the planet from
          harmful landfill waste
        </p>

        <div className="actions">
          <Button asChild className="primary">
            <Link href="/account/dashboard">Go to Dashboard</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/list-item">List Your First Item</Link>
          </Button>

          <Button asChild variant="link" className="text-gray-600">
            <Link href="/listings">Explore Marketplace</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
