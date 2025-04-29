"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";

export default function ListItemPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("PHONE");
  const [condition, setCondition] = useState("LIKE_NEW");
  const [ageYears, setAgeYears] = useState(0);
  const [originalMsrp, setOriginalMsrp] = useState(0);
  const [estimatedMarketPrice, setEstimatedMarketPrice] = useState(0);
  const [pointsValue, setPointsValue] = useState(0);
  const [locationPincode, setLocationPincode] = useState("");

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

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">List a New Item</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center justify-center max-w-2xl  mx-auto bg-white shadow-md rounded-lg p-6 gap-4"
      >
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
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={category}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCategory(e.target.value)
                }
                className="w-full border p-2"
              >
                <option value="PHONE">Phone</option>
                <option value="LAPTOP">Laptop</option>
                <option value="TABLET">Tablet</option>
                <option value="ACCESSORIES">Accessories</option>
                <option value="OTHER">Other</option>
              </select>
              <p className="text-sm text-gray-500">
                Select the category that best fits your item.
              </p>
            </div>
            <div>
              <Label htmlFor="condition">Condition</Label>
              <select
                id="condition"
                value={condition}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCondition(e.target.value)
                }
                className="w-full border p-2"
              >
                <option value="LIKE_NEW">Like New</option>
                <option value="GOOD">Good</option>
                <option value="FAIR">Fair</option>
                <option value="POOR">Poor</option>
                <option value="BROKEN">Broken</option>
              </select>
              <p className="text-sm text-gray-500">
                Indicate the current condition of the item.
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

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
