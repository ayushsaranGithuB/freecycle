"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { toast } from "sonner";
import { productCategoriesList } from "@/app/components/ui/categories";
import { Item } from "@prisma/client";
import Image from "next/image";

export default function EditItemPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id as string; // Ensure id is a string
  const [formData, setFormData] = useState<Partial<Item> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`/api/listings/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item details");
        }
        const data = await response.json();
        setFormData({
          title: data.title || "",
          description: data.description || "",
          brand: data.brand || "",
          category: data.category || "",
          condition: data.condition || "",
          ageYears: data.ageYears || 0, // Assuming ageYears is a number
          originalMsrp: data.originalMsrp || 0, // Assuming originalMsrp is a number
          estimatedMarketPrice: data.estimatedMarketPrice || 0,
          pointsValue: data.pointsValue || 0, // Assuming pointsValue is a number
          locationPincode: data.locationPincode || "",
          images: data.images || [], // Assuming images is an array of strings
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("images", file);
      });

      try {
        const response = await fetch(`/api/listings/${id}`, {
          method: "PATCH",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload images");
        }

        // Refresh the form data after successful upload
        const updatedResponse = await fetch(`/api/listings/${id}`);
        if (!updatedResponse.ok) {
          throw new Error("Failed to refresh item details after image upload");
        }
        const updatedData = await updatedResponse.json();
        setFormData({
          title: updatedData.title || "",
          description: updatedData.description || "",
          brand: updatedData.brand || "",
          category: updatedData.category || "",
          condition: updatedData.condition || "",
          ageYears: updatedData.ageYears || 0,
          originalMsrp: updatedData.originalMsrp || 0,
          estimatedMarketPrice: updatedData.estimatedMarketPrice || 0,
          pointsValue: updatedData.pointsValue || 0,
          locationPincode: updatedData.locationPincode || "",
          images: updatedData.images || [],
        });

        // Show success toast
        toast.success("Images uploaded successfully!");
      } catch (error) {
        console.error("Error uploading images:", error);
        alert("Failed to upload images. Please try again.");
      }
    }
  };

  const handleDeleteImage = async (
    e: React.MouseEvent<HTMLButtonElement>,
    imageToDelete: string
  ) => {
    e.preventDefault();
    if (!formData || !Array.isArray(formData.images)) return;

    try {
      const response = await fetch(`/api/listings/${id}/delete-image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageToDelete }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      setFormData((prev) => {
        if (!prev || !Array.isArray(prev.images)) return prev;
        return {
          ...prev,
          images: prev.images.filter(
            (img) => typeof img === "string" && img !== imageToDelete
          ),
        };
      });

      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) {
      setError("Form data is not available.");
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value === null || value === undefined) return; // Skip null or undefined values

        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (typeof item === "string") {
              formDataToSend.append(key, item);
            }
          });
        } else if (typeof value === "string" || typeof value === "number") {
          formDataToSend.append(key, value.toString());
        }
      });

      const response = await fetch(`/api/listings/${id}`, {
        method: "PATCH",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to update item");
      }

      router.push(`/item/${id}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  if (!formData) return;

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center justify-center max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 gap-4"
      >
        <section>
          <h2 className="text-lg font-semibold mb-2">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the item title"
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
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter a detailed description of the item"
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
                name="brand"
                value={formData.brand ?? ""}
                onChange={handleChange}
                placeholder="Enter the brand name"
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Specify the brand or manufacturer of the item.
              </p>
            </div>
            <div>
              <Label htmlFor="brand">Model</Label>
              <Input
                id="model"
                name="model"
                value={formData.model ?? ""}
                onChange={handleChange}
                placeholder="Model Name or Number"
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
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2"
              >
                {productCategoriesList.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.name}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Select the category that best fits your item.
              </p>
            </div>
            <div>
              <Label htmlFor="condition">Condition</Label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
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
                name="ageYears"
                value={formData.ageYears}
                onChange={handleChange}
                placeholder="Enter the age of the item in years"
                className="w-full"
                type="number"
              />
              <p className="text-sm text-gray-500">
                Provide the approximate age of the item.
              </p>
            </div>
            <div>
              <Label htmlFor="originalMsrp">Original MSRP</Label>
              <Input
                id="originalMsrp"
                name="originalMsrp"
                value={formData.originalMsrp}
                onChange={handleChange}
                placeholder="Enter the original MSRP"
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Enter the Manufacturer&apos;s Suggested Retail Price.
              </p>
            </div>
            <div>
              <Label htmlFor="estimatedMarketPrice">
                Estimated Market Price
              </Label>
              <Input
                id="estimatedMarketPrice"
                name="estimatedMarketPrice"
                value={formData.estimatedMarketPrice}
                onChange={handleChange}
                placeholder="Enter the estimated market price"
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
                name="pointsValue"
                value={formData.pointsValue}
                onChange={handleChange}
                placeholder="Enter the points value"
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
                name="locationPincode"
                value={formData.locationPincode}
                onChange={handleChange}
                placeholder="Enter your location pincode"
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Provide the pincode for pickup/drop-off location.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Existing Images</h2>
          <div className="space-y-4">
            {Array.isArray(formData.images) && formData.images.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {(() => {
                  const imagesArray = formData.images;
                  return imagesArray.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image as string}
                        alt={`Existing Image ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                        width={280}
                        height={210}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Image {index + 1}
                      </p>
                      <button
                        onClick={(e) => handleDeleteImage(e, image as string)}
                        className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ));
                })()}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No existing images available.
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Upload New Images</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="images">Upload Images</Label>
              <input
                id="images"
                name="images"
                type="file"
                multiple
                onChange={handleImageUpload}
                className="w-full border p-2"
              />
              <p className="text-sm text-gray-500">
                Upload multiple images for the item. Supported formats: JPG,
                PNG.
              </p>
            </div>
          </div>
        </section>

        <Button type="submit" className="w-full primary">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
