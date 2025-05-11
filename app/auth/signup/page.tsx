"use client";
import { House } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/styles/auth.css";
import { Button } from "@/app/components/ui/button";

const SignUp = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;
    if (phone.length < 10) return;

    setLoading(true);
    setError("");

    try {
      console.log("Sending OTP to:", phone);
      const response = await fetch(`/api/auth/signup?phone=${phone}`);

      if (response.ok) {
        // Redirect to OTP verification page if request was successful
        router.push(`/auth/signup/verify-otp?phone=${phone}`);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error sending OTP:", err);
    } finally {
      setLoading(false);
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
      </ul>

      <form onSubmit={handleSubmit} className="w-full max-w-sm card">
        <h1 className="titleUnderlined">Create an account</h1>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <div className="field">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="10 digit mobile phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="action">
          <Button
            type="submit"
            disabled={loading || phone.length < 10}
            className="primary"
          >
            {loading ? "Sending..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
