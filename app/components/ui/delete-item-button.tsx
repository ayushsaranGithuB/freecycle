"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export default function DeleteItemButton({ id }: { id: string }) {
  const router = useRouter();

  return (
    <Button
      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
      onClick={async () => {
        if (confirm("Are you sure you want to delete this item?")) {
          try {
            const response = await fetch(`/api/listings/${id}`, {
              method: "DELETE",
            });

            if (!response.ok) {
              throw new Error("Failed to delete item");
            }

            router.push("/list-item"); // Redirect to the list page after deletion
          } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete the item. Please try again.");
          }
        }
      }}
    >
      Delete Item
    </Button>
  );
}
