"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Spinner from "@/app/components/ui/spinner";
import ListingsList from "@/app/components/ui/listingsList";

const Dashboard = () => {
  const { data: session } = useSession();

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
        <h2>Welcome back, {session.user?.name} </h2>
        <Link href="/account/profile">My Profile</Link>
      </section>

      {/* Impact --------------- */}

      <section className="impact">
        <h3>Your Impact</h3>
        <p>
          You've saved <strong>2.5 Kgs</strong> of e-waste from ending up in
          landfills and polluting the planet
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
            You have <strong>24,505 points</strong> to spend towards new
            purchases
          </p>
          <p className="actions">
            <Link href="/account/points">View Transactions</Link>
            <Link href="/account/points/topup">Top-Up Balance</Link>
          </p>
        </div>
      </section>

      <section className="dashboard-recent-activity row">
        <div className="purchases">
          <h2 className="page_title">Your Purchases</h2>
        </div>
        <div className="listings">
          <h2 className="page_title">Your Listings</h2>
          <ListingsList status={"AVAILABLE"} limit={8} />
          <ListingsList status={"COMPLETED"} limit={8} />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
