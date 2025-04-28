"use client";

import Link from "next/link";
import Image from "next/image";
import { SignOut } from "../auth/signout-button";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

export default function Navigation() {
  const { data: session } = useSession();

  const memoizedSession = useMemo(() => session, [session]);

  console.log("Session data:", memoizedSession);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-2 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Freecycle Logo" width={120} height={30} />
        </Link>
        <nav className="flex space-x-4">
          <Link href="/list-item">List an Item</Link>
          <Link href="/profile">{memoizedSession?.user?.name}</Link>
          {memoizedSession ? <SignOut /> : <Link href="/auth">Login</Link>}
        </nav>
      </div>
    </header>
  );
}
