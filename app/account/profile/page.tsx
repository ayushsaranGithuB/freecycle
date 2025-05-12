"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useEffect, useState } from "react";

import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { fetchUserProfile, updateUserProfile } from "@/helpers/user";

import "@/app/styles/create_listing.css";
import Spinner from "@/components/ui/spinner";
import { Edit, HelpCircle } from "lucide-react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [user, setUser] = useState<User | null>(null);
  const [profileInputsDisabled, setProfileInputsDisabled] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProfile() {
      if (!userId) return;
      const result = await fetchUserProfile(userId);
      if (result) {
        console.log("user", result);
        setUser(result);
      }
    }
    getProfile();
  }, [userId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId || loading) return;

    const formData = new FormData(event.currentTarget);
    const updatedData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      cityState: formData.get("cityState") as string,
      pincode: formData.get("pincode") as string,
    };

    setLoading(true);

    try {
      const updatedUser = await updateUserProfile(userId, updatedData);
      setUser(updatedUser);
      setProfileInputsDisabled(true);
    } catch (error) {
      console.error("Failed to update profile", error);
    }

    setLoading(false);
  };

  if (session == undefined) return <Spinner />;

  return (
    <>
      <ul className="breadcrumbs">
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>&raquo;</li>

        <li>
          <Link href="/account/profile">Profile</Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-8 mb-8 p-2">
        <section className="personal-info w-full max-w-xl">
          <form onSubmit={handleSubmit}>
            <div className="page_title flex justify-between ">
              <h1>Your Profile</h1>
              {profileInputsDisabled ? (
                <Button
                  className="editButton"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setProfileInputsDisabled(false);
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  <Edit width={12} height={12} />
                  Edit
                </Button>
              ) : (
                <Button className="primary button-small" type="submit">
                  Update
                </Button>
              )}
            </div>
            <div className="field">
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Full Name - Used in Shipping Labels"
                className="w-full"
                name="name"
                id="name"
                required
                disabled={profileInputsDisabled}
                defaultValue={user?.name}
              />
            </div>
            <div className="field">
              <Label>Email</Label>
              <Input
                type="text"
                className="w-full"
                name="email"
                id="email"
                required
                disabled={profileInputsDisabled}
                defaultValue={user?.email || ""}
              />
            </div>
            <div className="field">
              <Label>Phone</Label>
              <Input
                type="text"
                className="w-full"
                name="phone"
                id="phone"
                required
                disabled={profileInputsDisabled}
                defaultValue={user?.phone}
              />
            </div>
            <div className="field">
              <Label>Address</Label>
              <Input
                type="text"
                className="w-full"
                name="address"
                id="address"
                required
                disabled={profileInputsDisabled}
                defaultValue={user?.address ?? ""}
              />
            </div>
            <div className="row">
              <div className="field">
                <Label>City, State</Label>
                <Input
                  type="text"
                  className="w-full"
                  name="cityState"
                  id="cityState"
                  required
                  disabled={profileInputsDisabled}
                  defaultValue={user?.cityState ?? ""}
                />
              </div>
              <div className="field w-1/3">
                <Label>Pincode</Label>
                <Input
                  type="string"
                  maxLength={6}
                  name="pincode"
                  id="pincode"
                  required
                  disabled={profileInputsDisabled}
                  defaultValue={user?.pincode ?? ""}
                />
              </div>
            </div>
          </form>
        </section>
        <section className="faq min-w-xs">
          <h2>
            <HelpCircle width={16} height={16} />
            Help & Support
          </h2>
          <ul>
            <li>
              <Link href={"/help"}>How do I change my billing details ?</Link>
            </li>
            <li>
              <Link href={"/help"}>When will I be credited for my sales ?</Link>
            </li>
            <li>
              <Link href={"/help"}>
                How can I get an invoice for my purchases ?
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
