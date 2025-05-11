"use client";
import { House } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import "@/app/styles/auth.css";
import { Button } from "@/app/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyOtp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendTimer, setResendTimer] = useState(30);

  // Create individual refs for each OTP input
  const otpRef1 = useRef<HTMLInputElement>(null);
  const otpRef2 = useRef<HTMLInputElement>(null);
  const otpRef3 = useRef<HTMLInputElement>(null);
  const otpRef4 = useRef<HTMLInputElement>(null);

  // Group them in an array for easy access
  const otpInputRefs = [otpRef1, otpRef2, otpRef3, otpRef4];

  useEffect(() => {
    // If phone number is missing, redirect back to signup
    if (!phone) {
      router.push("/auth/signup");
      return;
    }

    // Countdown timer for resend OTP
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [phone, resendTimer, router]);
  const handleOtpSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    console.log("OTP submitted:", otp.join(""));
    if (loading) return;
    if (phone.length < 10) return;

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, otp: otp.join("") }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("OTP verified successfully!");

        // Redirect to profile setup page after successful verification
        setTimeout(() => {
          router.push(
            `/auth/signup/profile-setup?phone=${phone}&userId=${data.user.phone}`
          );
        }, 1000);
      } else {
        const data = await response.json();
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error verifying OTP:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer === 0) {
      console.log("Resending OTP to:", phone);
      setOtp(["", "", "", ""]);
      setResendTimer(30);

      try {
        await fetch(`/api/auth/signup?phone=${phone}`);
        // Focus on first input after resending
        otpInputRefs[0].current?.focus();
      } catch (err) {
        setError("Failed to resend OTP.");
        console.error("Error resending OTP:", err);
      }
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    console.log("handleOtpChange");

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        otpInputRefs[index + 1].current?.focus();
      }
      // Removed auto-submit on last digit to prevent partial OTP submission
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    console.log("handleOtpKeyDown");
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

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
          <Link href={`/auth/signup/verify-otp?phone=${phone}`}>
            Verify OTP
          </Link>
        </li>
      </ul>

      <form onSubmit={handleOtpSubmit} className="w-full max-w-sm card">
        <h1 className="titleUnderlined">Verify your phone number</h1>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="otp-hint">
          <p>We sent a 4 digit code to {phone}.</p>
          {resendTimer > 0 ? (
            <p className="resend">Resend OTP in {resendTimer}s</p>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="resend hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        <div className="otp-input">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={otpInputRefs[idx]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(idx, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(idx, e)}
              className="w-12 h-12 text-center text-xl border rounded-md"
              required
            />
          ))}
        </div>

        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <Button type="submit" className="primary" disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </div>
  );
};

export default VerifyOtp;
