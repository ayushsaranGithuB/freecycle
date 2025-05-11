"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Spinner from "@/app/components/ui/spinner";
import ListingsList from "@/app/components/ui/listingsList";
import PurchasesList from "@/app/components/ui/purchasesList";
import { useEffect, useState } from "react";
import { fetchUserPoints } from "@/helpers/api";
import { Button } from "@/app/components/ui/button";
import BonusPoints from "./bonusPoints";

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
        <Link href="/account/profile">My Profile</Link>
      </section>

      {/* Impact --------------- */}

      <section className="impact">
        <h3>Your Impact</h3>
        <p>
          You&apos;ve saved <strong>2.5 Kgs</strong> of e-waste from ending up
          in landfills and polluting the planet
        </p>
        <ul className="stats">
          <li>
            <p className="stat-number">7g</p>
            <p className="stat-category">Lead</p>
          </li>
          <li>
            <p className="stat-number">7g</p>
            <p className="stat-category">Mercury</p>
          </li>
          <li>
            <p className="stat-number">7g</p>
            <p className="stat-category">Cadmium</p>
          </li>
          <li>
            <p className="stat-number">7g</p>
            <p className="stat-category">Lithium</p>
          </li>
          <li>
            <p className="stat-number">7g</p>
            <p className="stat-category">Plastic</p>
          </li>
        </ul>
      </section>

      {/* Points ---------------- */}
      <section className="points">
        <h2 className="page_title">Your Points</h2>
        <div className="row">
          <p className="summary">
            You have <strong>{points !== null ? points : "..."} points</strong>{" "}
            to spend towards new purchases
          </p>
          <p className="actions">
            <Link href="/account/points">View Transactions</Link>
            <Link href="/account/points/topup">Top-Up Balance</Link>
          </p>
        </div>
      </section>

      {/* Bonus Points --------------- */}

      <BonusPoints />

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
