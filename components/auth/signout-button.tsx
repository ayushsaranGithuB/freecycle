"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <Button variant={"secondary"} onClick={() => signOut()} className="w-full">
      Sign Out
    </Button>
  );
}
