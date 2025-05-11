"use client";
import { House } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import "@/app/styles/auth.css";
import { Button } from "@/components/ui/button";
import { updateUserJourney } from "@/helpers/user";

const ProfileSetup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const userId = searchParams.get("userId") || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // If phone number is missing, redirect back to signup
    if (!phone || !userId) {
      router.push("/auth/signup");
    }
  }, [phone, userId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    // Basic pincode validation
    if (pincode && pincode.length !== 6) {
      setError("Pincode must be 6 digits");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/user/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          phone,
          name,
          email: email || undefined, // Only send email if provided
          pincode: pincode || undefined, // Only send pincode if provided
        }),
      });

      if (response.ok) {
        if (email !== undefined) {
          try {
            // If email is provided, update the userJourney table
            await updateUserJourney(userId, { emailConnected: true });
          } catch (error) {
            console.error("Error updating user journey:", error);
          }
        }

        // Redirect to success page
        router.push(
          `/auth/signup/success?phone=${phone}&name=${encodeURIComponent(name)}`
        );
      } else {
        const data = await response.json();
        setError(data.message || "Failed to update profile.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error updating profile:", err);
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
        <h1 className="titleUnderlined">Complete Your Profile</h1>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="field">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Displayed in Shipping Label"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="field">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="To send you order confirmations"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>{" "}
        <div className="field">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700"
          >
            Location Pincode
          </label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter your 6-digit pincode"
            value={pincode}
            onChange={(e) => {
              // Only allow digits and limit to 6 characters
              const value = e.target.value.replace(/\D/g, "").slice(0, 6);
              setPincode(value);
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            maxLength={6}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            This helps us show you nearby items and is used to calculate
            shipping charges
          </p>
        </div>
        <div className="action">
          <Button
            type="submit"
            disabled={loading || !name.trim()}
            className="primary"
          >
            {loading ? "Saving..." : "Complete Setup"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup;
