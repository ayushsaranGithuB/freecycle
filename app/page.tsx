// Homepage

import Link from "next/link";
import styles from "./page.module.css";
import SearchBar from "@/components/ui/searchBar";
import ProductGrid from "@/components/ui/productGrid";
import ItemCategories from "@/components/ui/categories";
import { fetchListings } from "@/helpers/api";
import Image from "next/image";

export default async function HomePage() {
  const data = await fetchListings({ limit: 12 });
  const listings = data?.listings || [];

  return (
    <div className={styles.container}>
      {/* <header className="callout callout-green">
        <h1>Where Old Tech Finds New Homes</h1>
        <p>Earn Points. Claim Tech. Pay Only Shipping.</p>
        <button>
        <Link href="/list-item">List Your First Device</Link>
        </button>
        </header> */}

      <Image
        src={"/home_banner_2.png"}
        alt="Freecycle"
        width={1200}
        height={400}
        className={"my-10 hidden md:block"}
      />
      <Image
        src={"/home_banner_2_mobile.png"}
        alt="Freecycle"
        width={1200}
        height={400}
        className={"my-10 md:hidden"}
      />
      <SearchBar />

      <ItemCategories />

      <ProductGrid listings={listings} />

      <Image
        src={"/home_banner_1.png"}
        alt="Freecycle"
        width={1200}
        height={400}
        className={"my-10 hidden md:block"}
      />
      <Image
        src={"/home_banner_1_mobile.png"}
        alt="Freecycle"
        width={1200}
        height={400}
        className={"my-10 md:hidden"}
      />

      <ProductGrid listings={listings} />
    </div>
  );
}
