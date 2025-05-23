"use client";
import "@/app/styles/loginForm.css";
import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OTPLoginPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("9847632510");
  const [otp, setOtp] = useState(["9", "9", "9", "9"]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const router = useRouter();
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 2 && resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer, step]);

  useEffect(() => {
    if (step === 2) {
      otpRefs.current[0]?.focus();
    }
  }, [step]);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      console.log("Phone submitted, sending OTP to:", phone);

      // Simulate sending OTP
      setStep(2);
      setResendTimer(30);
    }
  };

  const handleOtpSubmit = async (otpCode: string) => {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      phone,
      otp: otpCode,
      redirect: false,
    });

    console.log("SignIn Response:", res);

    setLoading(false);

    if (res?.error) {
      setError("Invalid OTP. Please try again.");
    } else if (res?.ok) {
      router.push("/");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1]?.focus();
      }

      // Auto-submit if all filled
      if (index === otp.length - 1 && newOtp.every((digit) => digit)) {
        handleOtpSubmit(newOtp.join(""));
      }
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      console.log("Resending OTP to:", phone);
      setOtp(["", "", "", ""]);
      setResendTimer(30);
    }
  };

  return (
    <div className=" flex flex-col gap-[16px] items-center justify-center p-4 h-full min-h-[600px]">
      {/* <ul className="breadcrumbs w-sm">
        <li>
          <Link href="/" className="home"></Link>
        </li>
        <li>&raquo;</li>
        <li>
          <Link href="/auth/sign-in">Sign-In</Link>
        </li>
      </ul> */}
      {step === 1 && (
        <form onSubmit={handlePhoneSubmit} className="card w-sm loginForm">
          <h1 className="titleUnderlined">Sign-In</h1>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10 digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>

          <div className="actions">
            <button type="submit" className="primary">
              Send OTP
            </button>
            <p className="text-sm text-neutral-600 text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup">Signup </Link>
            </p>
          </div>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOtpSubmit(otp.join(""));
          }}
          className="card w-sm loginForm"
        >
          <h1 className="titleUnderlined">Verify your phone number</h1>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <p>
            We sent a 4 digit code your phone number.{" "}
            {resendTimer > 0 ? (
              <>Resend OTP in {resendTimer}s</>
            ) : (
              <button onClick={handleResendOtp} className="resend">
                Resend OTP
              </button>
            )}
          </p>
          <div className="flex justify-between mb-6 gap-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  otpRefs.current[idx] = el;
                }}
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
          <div className="actions">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
              disabled={loading || otp.some((d) => !d)}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
