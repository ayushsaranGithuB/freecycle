import prisma from "@/lib/prisma"; // Import Prisma client
import { Button } from "@/components/ui/button"; // Import ShadCN button
import Link from "next/link";

export default async function ItemDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const item = await prisma.item.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!item) {
      return <p className="text-center text-gray-500">Item not found</p>;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/public/logo.png" // Replace with actual image URL
              alt={item.title}
              className="w-full max-w-md object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
            <p className="text-gray-600">{item.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-700 font-medium">Brand:</p>
              <p className="text-gray-600">{item.brand}</p>

              <p className="text-gray-700 font-medium">Category:</p>
              <p className="text-gray-600">{item.category}</p>

              <p className="text-gray-700 font-medium">Condition:</p>
              <p className="text-gray-600">{item.condition}</p>

              <p className="text-gray-700 font-medium">Age:</p>
              <p className="text-gray-600">{item.ageYears} years</p>

              <p className="text-gray-700 font-medium">Original MSRP:</p>
              <p className="text-gray-600">${item.originalMsrp}</p>

              <p className="text-gray-700 font-medium">
                Estimated Market Price:
              </p>
              <p className="text-gray-600">${item.estimatedMarketPrice}</p>

              <p className="text-gray-700 font-medium">Points Value:</p>
              <p className="text-gray-600">{item.pointsValue}</p>

              <p className="text-gray-700 font-medium">Location:</p>
              <p className="text-gray-600">{item.locationPincode}</p>
            </div>

            <Button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Buy Now
            </Button>

            {/* Edit  */}
            <Link
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              href={`/item/${id}/edit`}
            >
              Edit Item
            </Link>
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
