import styles from "@/app/styles/productGrid.module.css";
import Link from "next/link";
import { trimAtSpace } from "@/app/helpers/text";
import { FC } from "react";
import Image from "next/image";

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
  createdAt: string;
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
          <Link href={`/item/${item.id}`} key={item.id} className={styles.card}>
            <Image
              src={item.images[0]}
              alt={item.title}
              className={styles.image}
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
