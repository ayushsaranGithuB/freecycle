"use client";
import { useEffect, useState } from "react";
import { fetchUserListings } from "@/app/helpers/api";
import { DataTable } from "@/app/components/ui/dataTable";
import { Listing } from "@/app/components/ui/productGrid";

const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "pointsValue",
    header: "Price",
  },
];

const MyListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = "current-user-id"; // Replace with actual user ID retrieval logic
    fetchUserListings(userId, { limit: 10 })
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user listings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Listings</h1>
      <DataTable columns={columns} data={listings} />
    </div>
  );
};

export default MyListings;
