"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function DeleteItemButton({ id }: { id: string }) {
  return (
    <Button
      className="button-small button-delete"
      onClick={async () => {
        if (confirm("Are you sure you want to delete this item?")) {
          try {
            const response = await fetch(`/api/listings/${id}`, {
              method: "DELETE",
            });

            if (!response.ok) {
              throw new Error("Failed to delete item");
            }

            toast.success("Item deleted successfully");
          } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete the item. Please try again.");
          }
        }
      }}
    >
      <Trash2 />
      Delete Item
    </Button>
  );
}
