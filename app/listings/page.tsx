"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import ProductGrid from "@/app/components/ui/productGrid";
import { ItemCategory, ItemCondition } from "@prisma/client";
import { fetchListings } from "../helpers/api";
import { Listing } from "@/app/components/ui/productGrid";
import "@/app/styles/listings.css";
import { productCategoriesList } from "../components/ui/categories";
import { Button } from "../components/ui/button";

export default function ListingsPage() {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchQuery") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | null>(
    (searchParams.get("category") as ItemCategory) || null
  );
  const [selectedCondition, setSelectedCondition] =
    useState<ItemCondition | null>(
      (searchParams.get("condition") as ItemCondition) || null
    );
  const [priceRange, setPriceRange] = useState([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 10000,
  ]);

  const [listings, setListings] = useState<Listing[]>([]);

  const categories = Object.values(ItemCategory);
  const conditions = Object.values(ItemCondition);

  // Fetch listings
  useEffect(() => {
    async function onLoad() {
      const response = await fetchListings({
        searchQuery,
        category: selectedCategory,
        condition: selectedCondition,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      });
      setListings(response);
    }
    onLoad();
  }, [searchQuery, selectedCategory, selectedCondition, priceRange]);

  // Update URL search parameters
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("searchQuery", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedCondition) params.set("condition", selectedCondition);
    if (priceRange[0] !== 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] !== 10000)
      params.set("maxPrice", priceRange[1].toString());

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [searchQuery, selectedCategory, selectedCondition, priceRange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setSearchQuery(formData.get("searchQuery") as string);
    setSelectedCategory(formData.get("category") as ItemCategory | null);
    setSelectedCondition(formData.get("condition") as ItemCondition | null);
    setPriceRange([
      Number(formData.get("minPrice")) || 0,
      Number(formData.get("maxPrice")) || 10000,
    ]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-[1150px] mt-8">
      {/* Left Column: Filters */}
      <form className="filters" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold">Filters</h2>

        {/* Search Bar */}
        <Input
          name="searchQuery"
          placeholder="Search..."
          defaultValue={searchQuery}
        />

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold">Category</h3>
          <select
            name="category"
            className="w-full border rounded p-2"
            defaultValue={selectedCategory || ""}
          >
            <option value="">All Categories</option>
            {productCategoriesList.map((category) => (
              <option key={category.category} value={category.category}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <h3 className="font-semibold">Condition</h3>
          <select
            name="condition"
            className="w-full border rounded p-2"
            defaultValue={selectedCondition || ""}
          >
            <option value="">All Conditions</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-semibold">Price Range</h3>
          <div className="flex items-center space-x-2">
            <Input
              name="minPrice"
              type="number"
              placeholder="Min"
              defaultValue={priceRange[0]}
            />
            <span>-</span>
            <Input
              name="maxPrice"
              type="number"
              placeholder="Max"
              defaultValue={priceRange[1]}
            />
          </div>
        </div>
        <Button type="submit" className="primary mx-auto mt-4">
          Apply Filters
        </Button>
      </form>

      {/* Right Column: Listings */}
      <div className="col-span-3">
        <ProductGrid listings={listings} />
      </div>
    </div>
  );
}
