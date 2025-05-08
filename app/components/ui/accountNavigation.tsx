"use client";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { usePathname } from "next/navigation";

const AccountNavigation = () => {
  const path = usePathname();
  return (
    <div className="account-navigation card">
      <div className="user">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="name">Rahul Khurana</p>
        <p className="email">satyajit.mishra2035@rediffmail.com</p>
      </div>
      <ul className="nav-list">
        <li className={path === "/account/dashboard" ? "active" : ""}>
          <Link href="/account/my-listings">Dashboard</Link>
        </li>
        <li>
          <Link href="/account/my-listings">Listings</Link>
        </li>
        <li>
          <Link href="/account/my-purchases">Purchases</Link>
        </li>
        <li>
          <Link href="/account/my-points">Points</Link>
        </li>
        <li>
          <Link href="/account/my-points">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountNavigation;
