"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

type Listing = {
  id: string;
  title: string;
  description: string;
  images: string[];
  pointsValue: number;
};

export default function HomePage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    async function fetchListings() {
      const response = await fetch("/api/listings");
      const data: Listing[] = await response.json();
      setListings(data);
    }
    fetchListings();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <h1>Freecycle</h1>
        <p>Where Old Tech Finds New Homes</p>
        <p>Earn Points. Claim Tech. Pay Only Shipping.</p>
        <button className={styles.ctaButton}>
          <Link href="/list-item">Get Started — List Your First Device</Link>
        </button>
      </header>

      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <ul>
          <li>
            <strong>Donate Your Tech</strong> — List your unused gadgets and
            earn Points.
          </li>
          <li>
            <strong>Claim New Finds</strong> — Spend Points on tech you actually
            need.
          </li>
          <li>
            <strong>Ship and Save</strong> — Buyers only pay for shipping.
            That’s it.
          </li>
        </ul>
      </section>

      <section className={styles.listingsGrid}>
        <h2>Available Listings</h2>
        <div className={styles.grid}>
          {listings.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.images[0]}
                alt={item.title}
                className={styles.image}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>
                <strong>Points:</strong> {item.pointsValue}
              </p>
              <Link href={`/item/${item.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whyJoin}>
        <h2>Why Join Freecycle</h2>
        <ul>
          <li>
            <strong>Zero Waste</strong>: Every device saved = less landfill.
          </li>
          <li>
            <strong>Zero Hassle</strong>: No selling drama. No haggling.
          </li>
          <li>
            <strong>All Trust</strong>: Verified users. Transparent listings.
          </li>
        </ul>
      </section>

      <footer className={styles.tagline}>
        <p>
          "Freecycle isn't about buying. It's about giving, earning, and reusing
          — together."
        </p>
      </footer>
    </div>
  );
}
