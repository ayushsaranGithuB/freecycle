import styles from "@/app/styles/itemCategories.module.css";
import Link from "next/link";

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
        <li>
          <Link href="/category/phones">
            <span className={styles.icon}>
              <img
                src="/icons/mobile.svg"
                alt="Phones"
                width={36}
                height={36}
              />
            </span>
            <p>Phones</p>
          </Link>
        </li>
        <li>
          <Link href="/category/laptops">
            <span className={styles.icon}>
              <img
                src="/icons/laptop.svg"
                alt="Laptops"
                width={36}
                height={36}
              />
            </span>
            <p>Laptops</p>
          </Link>
        </li>
        <li>
          <Link href="/category/tablets">
            <span className={styles.icon}>
              <img
                src="/icons/tablet.svg"
                alt="Tablets"
                width={36}
                height={36}
              />
            </span>
            <p>Tablets</p>
          </Link>
        </li>
        <li>
          <Link href="/category/camera">
            <span className={styles.icon}>
              <img
                src="/icons/camera.svg"
                alt="Camera"
                width={36}
                height={36}
              />
            </span>
            <p>Cameras & Photography</p>
          </Link>
        </li>
        <li>
          <Link href="/category/accessories">
            <span className={styles.icon}>
              <img
                src="/icons/keyboard.svg"
                alt="Accessories"
                width={36}
                height={36}
              />
            </span>
            <p>Accessories</p>
          </Link>
        </li>
        <li>
          <Link href="/category/audio">
            <span className={styles.icon}>
              <img
                src="/icons/headphones.svg"
                alt="Audio"
                width={36}
                height={36}
              />
            </span>
            <p>Audio Equipment</p>
          </Link>
        </li>
        <li>
          <Link href="/category/gaming">
            <span className={styles.icon}>
              <img
                src="/icons/gaming.svg"
                alt="Gaming"
                width={36}
                height={36}
              />
            </span>
            <p>Gaming Consoles</p>
          </Link>
        </li>
        <li>
          <Link href="/category/components">
            <span className={styles.icon}>
              <img
                src="/icons/cpu-fan.svg"
                alt="Components"
                width={36}
                height={36}
              />
            </span>
            <p>Computer Components</p>
          </Link>
        </li>
        <li>
          <Link href="/category/cables">
            <span className={styles.icon}>
              <img src="/icons/hdmi.svg" alt="Cables" width={36} height={36} />
            </span>
            <p>Cables & Adapters</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ItemCategories;
