"use client";
import { useEffect, useState } from "react";
import { fetchUserListings } from "@/helpers/api";
import { DataTable } from "@/components/ui/dataTable";
import { Listing } from "@/helpers/interfaces/items";

import { ColumnDef, HeaderContext } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const columns: ColumnDef<Listing, unknown>[] = [
  {
    accessorKey: "title",
    header: ({ column }: HeaderContext<Listing, unknown>) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }: HeaderContext<Listing, unknown>) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Category
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "condition",
    header: ({ column }: HeaderContext<Listing, unknown>) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Condition
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "pointsValue",
    header: ({ column }: HeaderContext<Listing, unknown>) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
];

const MyListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const userId = session?.user?.id;
    if (userId) {
      fetchUserListings(userId, { limit: 10 })
        .then((data) => {
          setListings(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user listings:", error);
          setLoading(false);
        });
    }
  }, [session]);

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
