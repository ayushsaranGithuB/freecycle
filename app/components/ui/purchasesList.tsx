"use client";
import { useEffect, useState } from "react";
import { fetchUserPurchases } from "@/app/helpers/api";
import { Transaction, Item } from "@prisma/client";
import Spinner from "@/app/components/ui/spinner";
import Link from "next/link";
import Image from "next/image";
import { Coins } from "lucide-react";
import { useSession } from "next-auth/react";

type PurchaseWithItem = Transaction & {
  item: Item & {
    images: string[]; // Assuming images is an array of strings
  };
};

const PurchasesList = ({ limit }: { limit: number }) => {
  const [purchases, setPurchases] = useState<PurchaseWithItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const userId = session?.user?.id;

  if (!userId) {
    return;
  }

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data: PurchaseWithItem[] = await fetchUserPurchases(
          limit,
          userId
        );
        setPurchases(data);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, [limit]);

  if (loading) {
    return <Spinner />;
  }

  if (purchases.length === 0) {
    return <p>No purchases found.</p>;
  }

  return (
    <ul className="purchases-list">
      {purchases.map((purchase) => (
        <li key={purchase.id} className="purchase-item">
          <Link href={`/item/${purchase.itemId}`} className="purchase-image">
            {purchase.item.images && purchase.item.images.length > 0 ? (
              <Image
                src={purchase.item.images[0]}
                width={90}
                height={90}
                alt={purchase.item.title}
              />
            ) : (
              <p>No image available</p>
            )}
          </Link>
          <div className="purchase-details">
            <h4>
              <Link href={`/item/${purchase.itemId}`}>
                {purchase.item.title}
              </Link>
            </h4>
            <p className="condition">{purchase.item.condition}</p>
          </div>

          <div className="purchase-meta">
            <p className="date">
              {new Date(purchase.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="pointsValue">
              <Coins width={14} height={14} />
              {purchase.item.pointsValue}
            </p>
            <Link href={`/item/${purchase.itemId}`} className="button-small">
              View Details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PurchasesList;
