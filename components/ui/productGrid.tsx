import styles from "@/app/styles/productGrid.module.css";
import Link from "next/link";
import { trimAtSpace } from "@/helpers/text";
import { FC } from "react";
import Image from "next/image";
import { Listing } from "@/helpers/interfaces/items";

type ProductGridProps = {
  listings: Listing[];
};

const ProductGrid: FC<ProductGridProps> = ({ listings }) => {
  // if listings is empty, return null
  if (!listings || listings.length === 0) {
    return (
      <section className={styles.listingsGrid}>
        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, idx) => (
            <div className={styles.card} key={idx}>
              <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
              <p className=" bg-gray-200 rounded-lg animate-pulse" />
              <p className=" bg-gray-200 rounded-lg animate-pulse" />
              <p className=" bg-gray-200 rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // console.log("listings", listings);

  return (
    <section className={styles.listingsGrid}>
      <div className={styles.title}>
        <h2>Recently added</h2>
        <Link href={"/listings"} className={styles.seeAll}>
          See all
        </Link>
      </div>
      <div className={styles.grid}>
        {listings.map((item) => (
          <Link href={`/item/${item.id}`} key={item.id} className={styles.card}>
            <Image
              src={item.images[0]}
              alt={item.title}
              className={styles.image}
              width={280}
              height={200}
            />
            <p className={styles.category}>{item.category}</p>
            <h3>{trimAtSpace(item.title, 48)}</h3>
            <p>{trimAtSpace(item.description, 60)}</p>
            <div className={styles.pointsValue}>
              <div className={styles.condition}>{item.condition}</div>
              <span className={styles.value}>{item.pointsValue}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
