"use client";

// Homepage

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import SearchBar from "@/app/components/ui/searchBar";
import ProductGrid from "@/app/components/ui/productGrid";
import { Listing } from "@/app/components/ui/productGrid";
import ItemCategories from "./components/ui/categories.";

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
      <SearchBar />

      <header className="callout callout-green">
        <h1>Where Old Tech Finds New Homes</h1>
        <p>Earn Points. Claim Tech. Pay Only Shipping.</p>
        <button>
          <Link href="/list-item">List Your First Device</Link>
        </button>
      </header>

      <ItemCategories />

      <ProductGrid listings={listings} />

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
