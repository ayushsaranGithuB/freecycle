"use client";
import { useEffect, useState } from "react";
import { fetchUserListings } from "@/helpers/api";
import { Listing, ListingsWithTotal } from "@/helpers/interfaces/items";
import Spinner from "@/components/ui/spinner";
import Link from "next/link";
import { ItemStatus } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Coins } from "lucide-react";
import { trimAtSpace } from "@/helpers/text";
import { off } from "process";

type ListingsListProps = {
  status: ItemStatus;
  limit: number;
  offset?: number;
  onTotalCount?: (total: number) => void;
  size?: "small" | "large";
};

const NoListings = () => (
  <div className="no-listings">
    <p>You don&apos;t have any active listings </p>
    <Link href="/list-item" className="button">
      + Create a Listing
    </Link>
  </div>
);

const ListingsList = ({
  status,
  limit,
  offset,
  size = "small",
  onTotalCount,
}: ListingsListProps) => {
  const { data: session } = useSession();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const userId = session?.user?.id;

  useEffect(() => {
    setLoading(true);
    if (!userId) {
      setLoading(false);
      return;
    }
    fetchUserListings(userId, { limit, status: status, offset })
      .then((data: ListingsWithTotal) => {
        setListings(data.listings);
        setTotal(data.total);
        if (onTotalCount) onTotalCount(data.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user listings:", error);
        setLoading(false);
      });
  }, [status, limit, session?.user?.id, offset]);

  if (loading) {
    return <Spinner />;
  }

  if (userId && session && listings.length === 0) {
    if (status == "COMPLETED") return null;
    return <NoListings />;
  }

  return (
    <>
      {status == "COMPLETED" && (
        <h2 className="page_title">Previous Listings</h2>
      )}
      <ul className="listings-list">
        {listings.map((listing) => (
          <li
            key={listing.id}
            className={"listing-item" + (size == "large" ? " large" : "")}
          >
            <Link href={`/item/${listing.id}`} className="listing-image">
              <Image
                src={listing.images[0]}
                width={90}
                height={90}
                alt={listing.title}
              />
            </Link>
            <div className="listing-details">
              <h4>
                <Link href={`/item/${listing.id}`}>
                  {size == "large"
                    ? listing.title
                    : trimAtSpace(listing.title, 30)}
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
    </>
  );
};

export default ListingsList;
