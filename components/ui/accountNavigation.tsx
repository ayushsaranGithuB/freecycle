"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Spinner from "./spinner";

const AccountNavigation = () => {
  // User Details
  const { data: session } = useSession();
  const path = usePathname();

  if (session == undefined) {
    return <Spinner />;
  }

  return (
    <div className="account-navigation card">
      <div className="user">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="name">{session?.user?.name}</p>
        <p className="email">{session?.user?.email ?? session?.user?.id}</p>
      </div>
      <ul className="nav-list">
        <li className={path === "/account/dashboard" ? "active" : ""}>
          <Link href="/account/dashboard">Dashboard</Link>
        </li>
        <li className={path === "/account/my-listings" ? "active" : ""}>
          <Link href="/account/my-listings">Listings</Link>
        </li>
        <li className={path === "/account/my-purchases" ? "active" : ""}>
          <Link href="/account/my-purchases">Purchases</Link>
        </li>
        <li className={path === "/account/my-sold" ? "active" : ""}>
          <Link href="/account/my-points">Points</Link>
        </li>
        <li className={path === "/account/profile" ? "active" : ""}>
          <Link href="/account/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountNavigation;
