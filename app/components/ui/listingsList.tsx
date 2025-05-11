"use client";
import { useEffect, useState } from "react";
import { fetchUserListings } from "@/app/helpers/api";
import { Listing } from "@/app/components/ui/productGrid";
import Spinner from "@/app/components/ui/spinner";
import Link from "next/link";
import { ItemStatus } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Coins } from "lucide-react";
import { trimAtSpace } from "@/app/helpers/text";

type ListingsListProps = {
  status: ItemStatus;
  limit: number;
};

const ListingsList = ({ status, limit }: ListingsListProps) => {
  const { data: session } = useSession();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) {
      setLoading(false);
      return;
    }
    fetchUserListings(userId, { limit, status: status })
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user listings:", error);
        setLoading(false);
      });
  }, [status, limit, session?.user?.id]);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return;
  }

  return (
    <ul className="listings-list">
      {listings.map((listing) => (
        <li key={listing.id} className="listing-item">
          <Link href={`/item/${listing.id}`} className="listing-image">
            <Image
              src={listing.images[0]}
              width={90}
              height={90}
              alt={listing.title}
            />
          </Link>
          <div className="listing-details">
            <p className="category">{listing.category}</p>
            <h4>
              <Link href={`/item/${listing.id}`}>
                {trimAtSpace(listing.title, 30)}
              </Link>
            </h4>
            <p className="condition">{listing.condition}</p>
          </div>

          <div className="listing-meta">
            <p className="date">
              {new Date(listing.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="pointsValue">
              <Coins width={14} height={14} />
              {listing.pointsValue}
            </p>
            <Link href={`/item/${listing.id}`} className="button-small">
              View Details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListingsList;
