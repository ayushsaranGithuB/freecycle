"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <Button variant={"secondary"} onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}
