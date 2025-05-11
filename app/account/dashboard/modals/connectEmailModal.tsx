"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { setUserPoints } from "@/helpers/api";
import { updateUserJourney, updateUserProfile } from "@/helpers/user";
import { Label } from "@radix-ui/react-label";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface ConnectEmailModalProps {
  open: boolean;
}

const ConnectEmailModal = ({ open }: ConnectEmailModalProps) => {
  // Get user ID from session
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email-input") as string;

    if (loading || !userId) return;
    setLoading(true);
    try {
      updateUserProfile(userId, {
        email: email,
      });
      updateUserJourney(userId, {
        emailConnected: true,
      });
      setUserPoints(userId, 100, "BONUS");
    } catch (error) {
      console.error("Error updating user journey:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your email</DialogTitle>
          <DialogDescription>
            Add your email to get 100 bonus points and get a verified badge on
            your listings
          </DialogDescription>
        </DialogHeader>
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Email
            </Label>
            <Input
              name="email-input"
              id="email-input"
              defaultValue="you@email.com"
              placeholder="you@email.com"
            />
          </div>
          <Button type="submit" size="sm" className="px-3" disabled={loading}>
            Update
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectEmailModal;
