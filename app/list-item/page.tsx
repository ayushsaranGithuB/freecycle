"use client";
import "@/app/styles/create_listing.css";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { productCategoriesList } from "@/components/ui/categories";
import { useSession } from "next-auth/react";
import { Coins, MapPinCheckInside } from "lucide-react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { calculateEwastePrevention, Totals } from "@/helpers/calculations";
import { ItemConditionOptions } from "@/helpers/interfaces/items";

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
  const [city, setCity] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const owner = session?.user?.id || 0;

  console.log("Session:", session);

  // Dropzone setup
  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // Points
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
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
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

  // Suggest Title Automatically -------------------------------

  useEffect(() => {
    // If title is empty, build a title from brand, model, and year
    if (title === "" && brand !== "" && model !== "" && year.length == 4) {
      setTitle(`${brand} ${model} (${year}) - ${condition} condition`);
    }
  }, [brand, model, year, title, condition]);

  useEffect(() => {
    // If locationPincode is set, look up the city
    if (locationPincode.length == 6) {
      async function fetchCity(pincode: string) {
        // GET https://api.postalpincode.in/pincode/{PINCODE}
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        const data = await response.json();
        if (data[0].Status == "Success") {
          setCity(
            `${data[0].PostOffice[0].Name},  ${data[0].PostOffice[0].District}, ${data[0].PostOffice[0].State}`
          );
        } else {
          // alert(data.status);
          setCity("Cannot find location. Are you sure the pin-code is valid?");
        }
      }
      fetchCity(locationPincode);
    }
  }, [locationPincode]);

  // Session Check -------------------------------

  if (session === null) return <h2>Please Login </h2>; // TODO />;

  // E-Waste Calculator -------------------------------
  const ewasteCalculation: Totals = calculateEwastePrevention([
    { category: category.toLowerCase(), count: 1 },
  ]);

  // Map for correct units
  const ewasteUnits: Record<keyof Totals, string> = {
    totalWeightKg: "kg",
    totalLeadGrams: "g",
    totalMercuryMilligrams: "mg",
    totalCadmiumMilligrams: "mg",
    totalLithiumGrams: "g",
    totalPlasticGrams: "g",
    totalGlassGrams: "g",
    totalRareEarthGrams: "g",
  };

  // Map for human-friendly labels
  const ewasteLabels: Record<keyof Totals, string> = {
    totalWeightKg: "Total Weight",
    totalLeadGrams: "Lead",
    totalMercuryMilligrams: "Mercury",
    totalCadmiumMilligrams: "Cadmium",
    totalLithiumGrams: "Lithium",
    totalPlasticGrams: "Plastic",
    totalGlassGrams: "Glass",
    totalRareEarthGrams: "Rare Earth Elements",
  };

  return (
    <div className="create-listing-page">
      <ul className="breadcrumbs">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>&raquo;</li>
        <li>
          <Link href="/">Create a listing</Link>
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
            {productCategoriesList.map((cat) => (
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
                    <Image
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
          <div
            {...getRootProps()}
            className={`dropzone${isDragActive ? " active" : ""}`}
            style={{
              border: "2px dashed #ccc",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "12px",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>
                Drag & drop images here, or click to select files
                <br />
                <span className="hint">
                  Upload images to showcase your item. You can select multiple
                  images.
                </span>
              </p>
            )}
          </div>
          <ul>
            {files.map((file, idx) => (
              <li
                key={file.name + idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={48}
                  height={48}
                  style={{
                    objectFit: "cover",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                  }}
                  onLoad={(e) =>
                    URL.revokeObjectURL((e.target as HTMLImageElement).src)
                  }
                />
                <span>{file.name}</span>
                <button
                  type="button"
                  aria-label="Remove file"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#d00",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setFiles((prev) => prev.filter((_, i) => i !== idx));
                  }}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
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

        {/* Location ---------------------------- */}
        <section>
          <h2 className="title">Location</h2>
          <Label htmlFor="location">Location</Label>
          <div className="flex gap-6">
            <Input
              id="location"
              type="text"
              placeholder="Where are you located?"
              value={locationPincode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocationPincode(e.target.value)
              }
              className="w-1/4"
              required
              max={6}
              min={6}
            />
            <p>
              <MapPinCheckInside />
              {city}
            </p>
          </div>
          <p className="hint">Used to calculate shipping cost for the item</p>
        </section>

        {/* Listing Price ---------------------------- */}
        <section>
          <h2 className="title">Listing Price:</h2>
          <div className="flex  gap-6 items-center justify-between w-full">
            <div>
              <Label htmlFor="pointsValue">Your Item will be listed for:</Label>
              <p className="hint">
                This is based on the Original Price, Item Condition and Age
              </p>
              {pointsValue > 1 && (
                <>
                  <h3>Points Breakdown</h3>
                  <p>{pointsBreakdown}</p>
                </>
              )}
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

        {/* Impact ------------------------------------------- */}

        <section className="impact">
          <h3>You are saving the planet by trading your tech!</h3>
          <p>
            Each{" "}
            {productCategoriesList.find((cat) => cat.category === category)
              ?.name ?? category}{" "}
            saved from a landfill is equivalent to:
          </p>
          <ul className="stats">
            {Object.keys(ewasteCalculation).map((key) => (
              <li key={key}>
                <p className="stat-number">
                  {Number(
                    ewasteCalculation[key as keyof Totals]
                  ).toLocaleString()}{" "}
                  <span className="unit">
                    {ewasteUnits[key as keyof Totals]}
                  </span>{" "}
                </p>
                <span className="stat-category">
                  {ewasteLabels[key as keyof Totals]}
                </span>
              </li>
            ))}
          </ul>
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
