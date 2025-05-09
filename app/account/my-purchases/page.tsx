"use client";
import { useEffect, useState } from "react";
import { fetchUserPurchases } from "@/app/helpers/api";
import { DataTable } from "@/app/components/ui/dataTable";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useSession } from "next-auth/react";
import { Transaction } from "@prisma/client";

const columns = [
  {
    accessorKey: "item.title", // Access nested item title
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
    accessorKey: "item.category", // Access nested item category
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
    accessorKey: "item.condition", // Access nested item condition
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
    accessorKey: "item.pointsValue", // Access nested item pointsValue
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

const MyPurchases = () => {
  const [purchases, setPurchases] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const userId = session?.user?.id;
    if (userId) {
      fetchUserPurchases(10, userId)
        .then((data) => {
          setPurchases(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching purchases:", error);
          setLoading(false);
        });
    }
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Purchases</h1>
      <DataTable columns={columns} data={purchases} />
    </div>
  );
};

export default MyPurchases;
