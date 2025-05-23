"use client";

import Link from "next/link";
import Image from "next/image";
import { SignOut } from "../auth/signout-button";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, CircleUserRound, SquareMenu } from "lucide-react";

export default function Navigation() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const memoizedSession = useMemo(() => session, [session]);

  return (
    <header className="navigation">
      <div className="container">
        <Link href="/">
          <Image
            src="/logo_1.svg"
            alt="Freecycle Logo"
            width={120}
            height={30}
          />
        </Link>
        <nav>{navLinks()}</nav>
        <button
          className="menuToggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {!menuOpen ? (
            <SquareMenu color="#fff" />
          ) : (
            <Image src="/icons/menu.svg" width={24} height={24} alt="" />
          )}
        </button>
        <div className="mobileMenu" data-open={menuOpen}>
          {navLinks()}
        </div>
      </div>
    </header>
  );

  function UserLinks() {
    return (
      <>
        <Link href="/account/dashboard">Dashboard</Link>
        <Link href="/account/profile">Profile</Link>
        <Link href="/help">Help</Link>
      </>
    );
  }

  function navLinks() {
    return (
      <>
        <Link href="/listings">Browse Listings</Link>
        <Link href="/list-item">List an Item</Link>

        {session === undefined && (
          <p className="flex items-center gap-2">
            <CircleUserRound color="#fff" />
          </p>
        )}
        {!memoizedSession && memoizedSession !== undefined && (
          <p className="flex items-center gap-2">
            <CircleUserRound color="#fff" />
            <Link href="/auth">Login | Signup</Link>
          </p>
        )}
        {!menuOpen ? (
          <>
            {memoizedSession && (
              <Popover>
                <PopoverTrigger>
                  <p className="flex items-center gap-2">
                    <CircleUserRound color="#fff" />
                    <span className="username flex items-center gap-1">
                      {memoizedSession?.user?.name}
                      <ChevronDown width={14} height={14} />
                    </span>
                  </p>
                </PopoverTrigger>
                <PopoverContent className="w-40 popover-content">
                  <div className="flex flex-col gap-2 p-2">
                    <UserLinks />
                  </div>
                  <div className="flex justify-end p-2 border-t mt-2 pt-4 border-t-gray-400">
                    <SignOut />
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </>
        ) : (
          <div className="mobileProfile">
            {memoizedSession && <UserLinks />}
          </div>
        )}
      </>
    );
  }
}
