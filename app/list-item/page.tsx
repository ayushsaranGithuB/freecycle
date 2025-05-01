"use client";
import "@/app/styles/create_listing.css";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import Link from "next/link";
import { categories } from "../components/ui/categories.";

interface ItemCondition {
  condition: string;
  hint: string;
  guide: string[];
}

const ConditionOptions: ItemCondition[] = [
  {
    condition: "Poor",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "Fair",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "Good",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "Excellent",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
];

export default function ListItemPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("Phones");
  const [condition, setCondition] = useState("LIKE_NEW");
  const [ageYears, setAgeYears] = useState(0);
  const [originalMsrp, setOriginalMsrp] = useState(0);
  const [estimatedMarketPrice, setEstimatedMarketPrice] = useState(0);
  const [pointsValue, setPointsValue] = useState(0);
  const [locationPincode, setLocationPincode] = useState("");

  //  Points
  const [calculatedPoints, setCalculatedPoints] = useState<number | null>(null);
  const [pointsBreakdown, setPointsBreakdown] = useState<string | null>(null);

  useEffect(() => {
    const { points, breakdown } = calculatePoints({
      condition,
      originalMsrp,
      estimatedMarketPrice,
      ageYears,
    });

    setCalculatedPoints(points);
    setPointsBreakdown(breakdown);
    setPointsValue(points); // optionally sync to the input too
  }, [condition, originalMsrp, estimatedMarketPrice, ageYears]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const itemData = {
      title,
      description,
      brand,
      category,
      condition,
      ageYears,
      originalMsrp,
      estimatedMarketPrice,
      pointsValue,
      locationPincode,
      ownerId: "1", // Set ownerId to 1 for now
    };

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      if (response.ok) {
        const result = await response.json();
        router.push(`/item/${result.id}?success=true`); // Redirect to the listing page with success message
      } else {
        console.error("Failed to create item:", await response.json());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function calculatePoints({
    condition,
    originalMsrp,
    estimatedMarketPrice,
    ageYears,
  }: {
    condition: string;
    originalMsrp: number;
    estimatedMarketPrice: number;
    ageYears: number;
  }) {
    let conditionMultiplier = 1;

    switch (condition) {
      case "Excellent":
        conditionMultiplier = 1;
        break;
      case "Good":
        conditionMultiplier = 0.85;
        break;
      case "Fair":
        conditionMultiplier = 0.6;
        break;
      case "Poor":
        conditionMultiplier = 0.3;
        break;
      default:
        conditionMultiplier = 0.5;
    }

    const agePenalty = Math.max(0.1, 1 - ageYears * 0.1); // Lose 10% per year, floor at 10%
    const baseValue = estimatedMarketPrice || originalMsrp * 0.5; // fallback if estimatedMarketPrice is 0

    const points = Math.round(baseValue * conditionMultiplier * agePenalty);

    const breakdown = `Base: ₹${baseValue}, Condition ×${conditionMultiplier}, Age ×${agePenalty.toFixed(
      2
    )}`;

    return { points, breakdown };
  }

  return (
    <div className="create-listing-page">
      <ul className="breadcrumbs">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Create a listing
          </Link>
        </li>
      </ul>
      <div className="page_title">
        <h1 className="text-2xl font-bold mb-4">Create a listing</h1>
        <p>Trade your tech. Save the planet!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col mx-auto  rounded-lg p-6 gap-4"
      >
        {/* Item Category ---------------------------- */}
        <section>
          <h2>What are you looking to trade?</h2>
          <ul className="categories">
            {categories.map((cat) => (
              <li key={cat.name}>
                <label className={category == cat.name ? "selected" : ""}>
                  <input
                    type="radio"
                    name="category"
                    value={cat.name}
                    hidden
                    checked={category === cat.name}
                    onChange={() => setCategory(cat.name)}
                  />
                  <span className="icon">
                    <img
                      src={`/icons/${cat.icon}`}
                      alt={cat.name}
                      width={36}
                      height={36}
                    />
                  </span>
                  <p>{cat.name}</p>
                </label>
              </li>
            ))}
          </ul>
        </section>
        {/* Item Condition ---------------------------- */}
        <section>
          <h2>What condition is the item in?</h2>
          <ul className="item-condition">
            {ConditionOptions.map((state, index) => (
              <li key={index}>
                <label
                  className={condition == state.condition ? "selected" : ""}
                >
                  <input
                    type="radio"
                    name="category"
                    value={state.condition}
                    hidden
                    checked={condition === state.condition}
                    onChange={() => setCondition(state.condition)}
                  />

                  <p className="condition">{state.condition}</p>
                  <p className="hint">{state.hint}</p>
                  <p className="guide">
                    {state.guide[0]}
                    <br />
                    {state.guide[1]}
                  </p>
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter the item title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Provide a short and descriptive title for your item.
              </p>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a detailed description of the item"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Include details like features, defects, or special notes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Item Details</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                type="text"
                placeholder="Enter the brand name"
                value={brand}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setBrand(e.target.value)
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Specify the brand or manufacturer of the item.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Pricing and Location</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="ageYears">Age in Years</Label>
              <Input
                id="ageYears"
                type="number"
                placeholder="Enter the age of the item in years"
                value={ageYears}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAgeYears(Number(e.target.value))
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Provide the approximate age of the item.
              </p>
            </div>
            <div>
              <Label htmlFor="originalMsrp">Original MSRP</Label>
              <Input
                id="originalMsrp"
                type="number"
                placeholder="Enter the original MSRP"
                value={originalMsrp}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setOriginalMsrp(Number(e.target.value))
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Enter the Manufacturer's Suggested Retail Price.
              </p>
            </div>
            <div>
              <Label htmlFor="estimatedMarketPrice">
                Estimated Market Price
              </Label>
              <Input
                id="estimatedMarketPrice"
                type="number"
                placeholder="Enter the estimated market price"
                value={estimatedMarketPrice}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEstimatedMarketPrice(Number(e.target.value))
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Provide the current market value of the item.
              </p>
            </div>
            <div>
              <Label htmlFor="pointsValue">Points Value</Label>
              <Input
                id="pointsValue"
                type="number"
                placeholder="Enter the points value"
                value={pointsValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPointsValue(Number(e.target.value))
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Specify the points value for this item.
              </p>
            </div>
            <div>
              <Label htmlFor="locationPincode">Location Pincode</Label>
              <Input
                id="locationPincode"
                type="text"
                placeholder="Enter your location pincode"
                value={locationPincode}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLocationPincode(e.target.value)
                }
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Provide the pincode for pickup/drop-off location.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Images</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="images">Upload Images</Label>
              <Input
                id="images"
                type="file"
                multiple
                accept="image/*"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  if (files) {
                    // Handle file uploads here
                    console.log("Selected files:", files);
                  }
                }}
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Upload images to showcase your item. You can select multiple
                images.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Calculated Points Value:</h2>
          <p>
            {calculatedPoints !== null
              ? calculatedPoints
              : "Enter details to calculate"}
          </p>
          <h3>Points Breakdown</h3>
          <p>{pointsBreakdown}</p>
        </section>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
