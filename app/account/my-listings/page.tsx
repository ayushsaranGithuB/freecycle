"use client";
import { useEffect, useState } from "react";
import { fetchUserListings } from "@/app/helpers/api";
import { DataTable } from "@/app/components/ui/dataTable";
import { Listing } from "@/app/components/ui/productGrid";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useSession } from "next-auth/react";

const columns = [
  {
    accessorKey: "title",
    header: ({ column }: { column: Column<any, unknown> }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }: { column: Column<any, unknown> }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "condition",
    header: ({ column }: { column: Column<any, unknown> }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Condition
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "pointsValue",
    header: ({ column }: { column: Column<any, unknown> }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
