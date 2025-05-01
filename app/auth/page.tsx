"use client";

import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {step === 1 && (
        <form
          onSubmit={handlePhoneSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold mb-4">Enter your phone number</h1>

          <div className="mb-6">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>

          {error && <div className="mb-4 text-red-500">{error}</div>}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOtpSubmit(otp.join(""));
            }}
          >
            <div className="flex justify-between mb-6">
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

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
              disabled={loading || otp.some((d) => !d)}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>

          <div className="mt-4 text-center text-gray-500 text-sm">
            {resendTimer > 0 ? (
              <>Resend OTP in {resendTimer}s</>
            ) : (
              <button
                onClick={handleResendOtp}
                className="text-blue-500 hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
