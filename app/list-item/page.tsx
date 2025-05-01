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
import { ImageUpload } from "../components/ui/imageDropzone";
import { ItemCondition } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Coins } from "lucide-react";

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
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "GOOD",
    label: "Good",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
  {
    condition: "EXCELLENT",
    label: "Excellent",
    hint: "Parts Only",
    guide: ["Physical or Cosmetic Damage", "May not be functional"],
  },
];

export default function ListItemPage() {
  // Get User Session
  const { data: session } = useSession();

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("PHONE");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [condition, setCondition] = useState("GOOD");
  const [originalMsrp, setOriginalMsrp] = useState("");
  const [estimatedMarketPrice, setEstimatedMarketPrice] = useState("");
  const [pointsValue, setPointsValue] = useState(0);
  const [locationPincode, setLocationPincode] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const owner = session?.user?.id || 0;

  console.log("Session:", session);

  //  Points
  const [pointsBreakdown, setPointsBreakdown] = useState<string | null>(null);

  useEffect(() => {
    const { points, breakdown } = calculatePoints({
      condition,
      originalMsrp,
      estimatedMarketPrice,
      year,
    });

    setPointsBreakdown(breakdown);
    setPointsValue(points); // optionally sync to the input too
  }, [condition, originalMsrp, estimatedMarketPrice, year]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const intMSRP = parseInt(originalMsrp, 10);
    const intEstimatedMarketPrice =
      estimatedMarketPrice !== "" ? parseInt(estimatedMarketPrice, 10) : 0;
    const ageYears =
      year === "" ? 0 : new Date().getFullYear() - parseInt(year);

    // Convert files to base64 format
    const base64Files = await Promise.all(
      files.map(async (file) => {
        const reader = new FileReader();
        return new Promise<{ name: string; content: string }>(
          (resolve, reject) => {
            reader.onload = () => {
              resolve({
                name: file.name,
                content: reader.result?.toString().split(",")[1] || "",
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }
        );
      })
    );

    console.log("Base64 Files:", base64Files);

    const itemData = {
      title,
      description,
      brand,
      category,
      condition,
      ageYears: ageYears,
      originalMsrp: intMSRP,
      estimatedMarketPrice: intEstimatedMarketPrice ?? 0,
      pointsValue,
      locationPincode,
      owner: owner,
      images: base64Files, // Send base64 files to the API
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

    setLoading(false);
  };

  function calculatePoints({
    condition,
    originalMsrp,
    estimatedMarketPrice,
    year,
  }: {
    condition: string;
    originalMsrp: string;
    estimatedMarketPrice: string;
    year: string;
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

    // age Penalty
    // Lose 30% in the first year and then 10% every subsequent year

    const age = new Date().getFullYear() - parseInt(year);
    const agePenalty = Math.max(0.1, 1 - age * 0.1);
    console.log("Age :", age);

    const baseValue =
      parseFloat(estimatedMarketPrice) || parseFloat(originalMsrp);

    const points = Math.round(baseValue * conditionMultiplier * agePenalty);

    const breakdown = `Base: ₹${baseValue}, Condition x ${conditionMultiplier}, Age x ${agePenalty.toFixed(
      2
    )}`;

    return { points, breakdown };
  }

  //  Suggest Title Automatically -------------------------------

  useEffect(() => {
    // If title is empty, build a title from brand, model, and year
    if (title === "" && brand !== "" && model !== "" && year.length == 4) {
      setTitle(`${brand} ${model} (${year}) - ${condition} condition`);
    }
  }, [brand, model, year]);

  //  Session Check -------------------------------

  if (session === null) return <h2>Please Login </h2>; // TODO />;

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
                <label className={category == cat.category ? "selected" : ""}>
                  <input
                    type="radio"
                    name="category"
                    value={cat.category}
                    hidden
                    checked={category === cat.category}
                    onChange={() => setCategory(cat.category)}
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

                  <p className="condition">{state.label}</p>
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

        {/* Images ---------------------------- */}
        <section>
          <h2 className="title">Images</h2>
          <ImageUpload files={files} setFiles={setFiles} />
          <p className="hint">
            Upload images to showcase your item. You can select multiple images.
          </p>
          <p>{files.map((file) => file.name).join(", ")}</p>
        </section>

        {/* Additional Details ---------------------------- */}
        <section>
          <h2 className="title">Item Details</h2>
          <div className="flex  gap-6 items-center justify-between w-full">
            <div className="w-1/3">
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                type="text"
                placeholder="Enter the brand name"
                value={brand}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setBrand(e.target.value)
                }
              />
            </div>
            <div className="w-2/3">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                type="text"
                placeholder="Enter the model name"
                value={model}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setModel(e.target.value)
                }
                className="w-full"
              />
            </div>
            <div className="w-1/4">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                type="number"
                max={new Date().getFullYear()}
                min={1900}
                placeholder="Year of manufacture or release"
                value={year}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setYear(e.target.value)
                }
                className="w-full"
                required
              />
            </div>
          </div>
        </section>

        {/* Item Details ---------------------------- */}
        <section>
          <h2 className="title">Basic Information</h2>

          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Provide a short and descriptive title for your item."
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="w-full"
          />
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Include details like features, defects and included accessories."
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
            className="w-full"
            rows={6}
          />
          <p className="hint">2000 characters max.</p>
        </section>

        {/* Pricing  ---------------------------- */}
        <section>
          <h2 className="title">Pricing and Location</h2>
          <div className="flex  gap-6 items-center justify-between w-full">
            <div className="w-1/2">
              <Label htmlFor="originalMsrp">Original MSRP</Label>
              <Input
                id="originalMsrp"
                type="text"
                placeholder="Or Purchase Price"
                value={originalMsrp}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setOriginalMsrp(e.target.value)
                }
                className="w-full"
                required
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="estimatedMarketPrice">Current Price</Label>
              <Input
                id="estimatedMarketPrice"
                type="text"
                placeholder="(Optional) Approiximate Market Value"
                value={estimatedMarketPrice}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEstimatedMarketPrice(e.target.value)
                }
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Listing Price ---------------------------- */}
        <section>
          <h2 className="title">Listing Price:</h2>
          <div className="flex  gap-6 items-center justify-between w-full">
            <div>
              <Label htmlFor="pointsValue">Your Item will be listed at:</Label>
              <p className="hint">
                This is based on the Original Price, Item Condition and Age
              </p>
              <h3>Points Breakdown</h3>
              <p>{pointsBreakdown}</p>
            </div>
            <div>
              {pointsValue > 0 ? (
                <h2 className="pointsValue">
                  <Coins />
                  {pointsValue} points
                </h2>
              ) : (
                <p className="hint">Enter details to calculate</p>
              )}
            </div>
          </div>
        </section>

        {/* Form Actions --------------------------- */}
        <section className="formAction">
          <Button
            type="button"
            size={"lg"}
            className="saveDraft border text-neutral-400 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-500"
          >
            Save as Draft
          </Button>
          <Button
            type="submit"
            size={"lg"}
            className="publish"
            disabled={loading}
          >
            Publish Listing
          </Button>
        </section>
      </form>
    </div>
  );
}
