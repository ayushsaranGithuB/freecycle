import styles from "@/app/styles/productGrid.module.css";
import Link from "next/link";

import { FC } from "react";

type ProductGridProps = {
  listings: Listing[];
};
export interface Listing {
  id: string;
  title: string;
  description: string;
  images: string[];
  pointsValue: number;
  category: string;
  condition: string;
}

const ProductGrid: FC<ProductGridProps> = ({ listings }) => {
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
          <div key={item.id} className={styles.card}>
            <img
              src={item.images[0]}
              alt={item.title}
              className={styles.image}
            />
            <p className={styles.category}>{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.pointsValue}>
              <div className={styles.condition}>{item.condition}</div>
              <Link href={`/item/${item.id}`}>{item.pointsValue}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
