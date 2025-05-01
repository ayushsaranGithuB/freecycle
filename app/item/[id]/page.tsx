import prisma from "@/lib/prisma"; // Import Prisma client
import { Button } from "@/app/components/ui/button"; // Import ShadCN button
import Link from "next/link";
import ImageCarousel from "@/app/components/ui/image-carousel";
import DeleteItemButton from "@/app/components/ui/delete-item-button";
import { Coins, Edit, EditIcon } from "lucide-react";
import "@/app/styles/singleItemPage.css";

export default async function ItemDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  try {
    const item = await prisma.item.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!item) {
      return <p className="text-center text-gray-500">Item not found</p>;
    }

    // Ensure images is treated as an array of strings
    const images = Array.isArray(item.images)
      ? item.images.filter(
          (image): image is string => typeof image === "string"
        )
      : [];

    function nl2br(description: string): import("react").ReactNode {
      return description.split("\n").map((line, index) => (
        <p className="mb-2" key={index}>
          {line}
        </p>
      ));
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            {images && <ImageCarousel images={item.images as string[]} />}
          </div>

          {/* Details Section */}
          <div className="space-y-4 ">
            <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
            <div>{nl2br(item.description)}</div>

            <div className="buyItemActions">
              <h2 className="pointsValue">
                <Coins />
                {item.pointsValue} points
              </h2>
              <Button className="primary">Claim this item</Button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-gray-500 text-sm">
              <p className="">Brand:</p>
              <p className="">{item.brand}</p>

              <p>Category:</p>
              <p>{item.category}</p>

              <p>Condition:</p>
              <p>{item.condition}</p>

              <p>Age:</p>
              <p>{item.ageYears} years</p>

              <p>Original MSRP:</p>
              <p>₹ {item.originalMsrp}</p>

              {item.estimatedMarketPrice > 0 && (
                <>
                  <p>Estimated Market Price:</p>
                  <p>₹ {item.estimatedMarketPrice}</p>
                </>
              )}

              <p>Location:</p>
              <p>{item.locationPincode}</p>
            </div>

            <div className="flex gap-4 border-t border-gray-200 pt-4">
              {/* Edit */}
              <Link
                className=" border text-white py-1 px-4 rounded-lg hover:bg-green-700 flex items-center gap-2"
                href={`/item/${id}/edit`}
              >
                <EditIcon size={16} />
                Edit Item
              </Link>

              {/* Delete */}
              <DeleteItemButton id={id} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching item details:", error);
    return (
      <p className="text-center text-red-500">Error loading item details</p>
    );
  }
}
