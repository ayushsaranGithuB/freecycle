import styles from "@/app/styles/itemCategories.module.css";
import Link from "next/link";
import { ItemCategory } from "@prisma/client";

interface DisplayCategory {
  icon: string;
  name: string;
  category: ItemCategory;
}

export const categories: DisplayCategory[] = [
  { name: "Phones", icon: "mobile.svg", category: "PHONE" },
  { name: "Laptops", icon: "laptop.svg", category: "LAPTOP" },
  { name: "Tablets", icon: "tablet.svg", category: "TABLET" },
  { name: "Cameras & Photography", icon: "camera.svg", category: "CAMERA" },
  { name: "Accessories", icon: "keyboard.svg", category: "ACCESSORIES" },
  { name: "Audio Equipment", icon: "headphones.svg", category: "AUDIO" },
  { name: "Gaming Consoles", icon: "gaming.svg", category: "GAMING" },
  { name: "Computer Components", icon: "cpu-fan.svg", category: "COMPONENTS" },
  { name: "Cables & Adapters", icon: "hdmi.svg", category: "CABLES" },
];

const ItemCategories = () => {
  return (
    <div className={styles.item_categories}>
      <div className={styles.title}>
        <h2>Browse by Category</h2>
        <Link href={"/categories"} className={styles.seeAll}>
          See all
        </Link>
      </div>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/category/${category.name.toLowerCase()}`}>
              <span className={styles.icon}>
                <img
                  src={`/icons/${category.icon}`}
                  alt={category.name}
                  width={36}
                  height={36}
                />
              </span>
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCategories;
