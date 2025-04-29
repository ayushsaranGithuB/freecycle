import styles from "@/app/styles/itemCategories.module.css";
import Link from "next/link";

export const categories = [
  { name: "Phones", icon: "mobile.svg" },
  { name: "Laptops", icon: "laptop.svg" },
  { name: "Tablets", icon: "tablet.svg" },
  { name: "Cameras & Photography", icon: "camera.svg" },
  { name: "Accessories", icon: "keyboard.svg" },
  { name: "Audio Equipment", icon: "headphones.svg" },
  { name: "Gaming Consoles", icon: "gaming.svg" },
  { name: "Computer Components", icon: "cpu-fan.svg" },
  { name: "Cables & Adapters", icon: "hdmi.svg" },
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
