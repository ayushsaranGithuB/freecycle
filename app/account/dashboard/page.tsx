"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Spinner from "@/components/ui/spinner";
import ListingsList from "@/components/ui/listingsList";
import PurchasesList from "@/components/ui/purchasesList";
import { useEffect, useState } from "react";
import { fetchUserPoints } from "@/helpers/api";
import { Button } from "@/components/ui/button";
import BonusPoints from "./bonusPoints";
import { Coins } from "lucide-react";
import ImpactStats from "./charts/impact";

const Dashboard = () => {
  const { data: session } = useSession();
  const [points, setPoints] = useState<number | null>(null);
  const [isNewSignup, setIsNewSignup] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const newSignupCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("newSignup="));
      const isNew = newSignupCookie
        ? newSignupCookie.split("=")[1] === "true"
        : false;
      setIsNewSignup(isNew);

      // remove cookie after reading
      if (isNew) {
        document.cookie =
          "newSignup=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    }
  }, []);

  useEffect(() => {
    if (session?.user?.id) {
      fetchUserPoints(session.user.id)
        .then((data) => setPoints(data.pointsBalance))
        .catch((error) => console.error("Error fetching user points:", error));
    }
  }, [session]);

  if (session == undefined) {
    return <Spinner />;
  }

  if (!session) {
    return (
      <div className="unauthenticated">
        <h1>Please log in to view your dashboard</h1>
        <Link href="/api/auth/signin">Log In</Link>
      </div>
    );
  }

  return (
    <>
      <ul className="breadcrumbs">
        <li>
          <Link href="/">My Account</Link>
        </li>
        <li>&raquo;</li>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
      </ul>

      {/* Title --------------- */}

      <section className="title page_title">
        <h2>
          Welcome{isNewSignup ? " " : " back"}, {session.user?.name}{" "}
        </h2>
        <Link href="/account/profile">Your Profile</Link>
      </section>

      <div className="banners">
        {/* Points ---------------- */}
        <section className="points">
          <div className="summary">
            <p>You have</p>
            <p>
              <strong>
                {" "}
                <Coins /> {points !== null ? points : "..."} points
              </strong>{" "}
            </p>
            <p>to spend towards new purchases</p>
          </div>
          <p className="actions">
            <Link href="/account/points">View Transactions</Link>
            <Link href="/account/points/topup">Top-Up Balance</Link>
          </p>
        </section>

        {/* Bonus Points --------------- */}
        <BonusPoints />
      </div>
      <ImpactStats />

      {/* Recent Activity --------------- */}

      <section className="dashboard-recent-activity row">
        <div className="purchases">
          <h2 className="page_title">Your Purchases</h2>
          <PurchasesList limit={8} />
        </div>
        <div className="listings">
          <h2 className="page_title">Active Listings</h2>
          <ListingsList status={"AVAILABLE"} limit={4} />

          <ListingsList status={"COMPLETED"} limit={4} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
