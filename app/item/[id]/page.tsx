import prisma from "@/lib/prisma"; // Import Prisma client
import { Button } from "@/app/components/ui/button"; // Import ShadCN button
import Link from "next/link";
import ImageCarousel from "@/app/components/ui/image-carousel";
import DeleteItemButton from "@/app/components/ui/delete-item-button";
import { Coins, EditIcon, MapPin } from "lucide-react";
import "@/app/styles/singleItemPage.css";
import ProductGrid from "@/app/components/ui/productGrid";
import { fetchListings } from "@/app/helpers/api";
import { formatCurrency, trimAtSpace } from "@/app/helpers/text";
import ShippingEstimator from "@/app/components/ui/shippingEstimator";
import { productCategoriesList } from "@/app/components/ui/categories";
import { ItemCondition } from "@prisma/client";
import { pincodeToCity } from "@/app/helpers/calculations";
interface ItemConditionOptions {
  condition: ItemCondition;
  label: string;
  hint: string;
  guide: string[];
}

const ConditionOptions: ItemConditionOptions[] = [
  {
    condition: "POOR",
    label: "Poor",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "FAIR",
    label: "Fair",
    hint: "Still Usable",
    guide: ["Some Cosmetic Damage", "Still Working"],
  },
  {
    condition: "GOOD",
    label: "Good",
    hint: "Works Perfectly",
    guide: ["Minor Wear or Scuffs", "Original Accessories"],
  },
  {
    condition: "EXCELLENT",
    label: "Excellent",
    hint: "Like New!",
    guide: ["No Cosmetic Damage", "Original Box and Accessories"],
  },
];

export default async function ItemDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const listings = await fetchListings({ limit: 4 });

  try {
    const item = await prisma.item.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!item) {
      return <p className="text-center text-gray-500">Item not found</p>;
    }

    const locationCity = await pincodeToCity(item.locationPincode);

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
      <div className="listing-container mx-auto  max-w-[1150px] ">
        <section className="flex items-center justify-between mb-4 flex-col  md:flex-row">
          <ul className="breadcrumbs flex-wrap w-full md:w-auto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>&raquo;</li>
            <li>
              <Link href={"/listings?category=" + item.category}>
                {productCategoriesList.find(
                  (cat) => cat.category === item.category
                )?.name || "Unknown Category"}
              </Link>
            </li>
            <li>&raquo;</li>
            <li>{trimAtSpace(item.title, 48)}</li>
          </ul>
          <div className="actions mt-2 md:mt-0 ">
            {/* Edit */}
            <Link className=" button-small" href={`/item/${id}/edit`}>
              <EditIcon size={16} />
              Edit Item
            </Link>

            {/* Delete */}
            <DeleteItemButton id={id} />
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Image Section */}
          <div className="flex justify-center ">
            {images && <ImageCarousel images={item.images as string[]} />}
          </div>

          {/* Details Section */}
          <div className="space-y-4 ">
            <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
            <div>{nl2br(item.description)}</div>

            <div className="buyItemActions">
              <div>
                <h2 className="pointsValue">
                  <Coins />
                  {item.pointsValue} points
                </h2>
                {/* Shipping Charges ------------------------------------- */}
                <ShippingEstimator sellerPincode={item.locationPincode} />
              </div>
              <Link href={`/checkout/${item.id}`} className="button primary">
                Claim this item
              </Link>
            </div>

            {locationCity && (
              <div className="pincode-info">
                <p className="title">
                  <MapPin width={12} height={12} />
                  Ships from:
                </p>
                <p className="city">{locationCity}</p>
              </div>
            )}
          </div>
        </div>

        <section className="about-item">
          <div>
            <h2 className="title">About this item:</h2>
            <div className="stats">
              {item.ageYears && (
                <div className="stat">
                  <div className="stat-title">Year</div>
                  <div className="stat-value">
                    {new Date().getFullYear() - item.ageYears}
                  </div>
                </div>
              )}
              {item.brand && (
                <div className="stat">
                  <div className="stat-title">Brand</div>
                  <div className="stat-value">{item.brand}</div>
                </div>
              )}
              {item.model && (
                <div className="stat">
                  <div className="stat-title">Model</div>
                  <div className="stat-value">{item.model}</div>
                </div>
              )}
              {item.originalMsrp && (
                <div className="stat">
                  <div className="stat-title">Original MSRP:</div>
                  <div className="stat-value">
                    {formatCurrency(item.originalMsrp)}
                  </div>
                </div>
              )}

              {item.estimatedMarketPrice > 0 && (
                <div className="stat">
                  <div className="stat-title">Current Value:</div>
                  <div className="stat-value">
                    {formatCurrency(item.estimatedMarketPrice)}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="condition">
            <h3 className="title">Condition:</h3>

            <div className="condition-slider">
              {ConditionOptions.map((detail, index) => (
                <div
                  className={
                    "slider-value" +
                    (item.condition === detail.condition ? " active" : "")
                  }
                  key={index}
                >
                  <p>{detail.label}</p>
                </div>
              ))}
            </div>

            {(() => {
              const conditionDetails = ConditionOptions.find(
                (option) => option.condition === item.condition
              );
              return (
                <p className="condition-details">
                  <strong>{conditionDetails?.hint || "Unknown"}:</strong>{" "}
                  <span>
                    {conditionDetails?.guide[0]}, {conditionDetails?.guide[1]}
                  </span>
                </p>
              );
            })()}
          </div>
        </section>

        {/* Other Listings */}
        <div className="related">
          <ProductGrid listings={listings || []} />
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
