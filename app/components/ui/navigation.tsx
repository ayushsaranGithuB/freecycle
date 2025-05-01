"use client";

import Link from "next/link";
import Image from "next/image";
import { SignOut } from "../auth/signout-button";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

export default function Navigation() {
  const { data: session } = useSession();

  const memoizedSession = useMemo(() => session, [session]);

  return (
    <header className="navigation">
      <div className="container">
        <Link href="/">
          <Image
            src="/logo_v3.svg"
            alt="Freecycle Logo"
            width={120}
            height={30}
          />
        </Link>
        <nav>
          <Link href="/list-item">List an Item</Link>

          {!memoizedSession && (
            <p className="flex items-center gap-2">
              <Image
                src="/icons/circle-user-round.svg"
                alt="Profile"
                width={24}
                height={24}
              />
              <Link href="/auth">Login</Link>
            </p>
          )}
          {memoizedSession && (
            <Popover>
              <PopoverTrigger>
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/circle-user-round.svg"
                    alt="Profile"
                    width={24}
                    height={24}
                  />
                  {memoizedSession?.user?.name}
                </p>
              </PopoverTrigger>
              <PopoverContent className="w-40 popover-content">
                <div className="flex flex-col gap-2 p-2">
                  <Link href="/profile">Profile</Link>
                  <Link href="/settings">Settings</Link>
                  <Link href="/help">Help</Link>
                </div>
                <div className="flex justify-end p-2 border-t mt-2 pt-4 border-t-gray-400">
                  <SignOut />
                </div>
              </PopoverContent>
            </Popover>
          )}
        </nav>
      </div>
    </header>
  );
}
