"use client";
import { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import ProductGrid from "@/app/components/ui/productGrid";
import { ItemCategory, ItemCondition } from "@prisma/client";
import { fetchListings } from "../helpers/api";
import { Listing } from "@/app/components/ui/productGrid";

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | null>(
    null
  );
  const [selectedCondition, setSelectedCondition] =
    useState<ItemCondition | null>(null);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const [listings, setListings] = useState<Listing[]>([]);

  const categories = Object.values(ItemCategory);
  const conditions = Object.values(ItemCondition);

  // Fetch listings
  useEffect(() => {
    async function onLoad() {
      const response = await fetchListings();
      //   console.log(listings);
      setListings(response);
    }
    onLoad();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-[1150px] mt-8">
      {/* Left Column: Filters */}
      <div className="col-span-1 space-y-4">
        <h2 className="text-lg font-bold">Filters</h2>

        {/* Search Bar */}
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold">Category</h3>
          <select
            className="w-full border rounded p-2"
            value={selectedCategory || ""}
            onChange={(e) => {
              const selectedValue = e.target.value;
              const selectedCategory = categories.find(
                (category) => category === selectedValue
              );
              setSelectedCategory(selectedCategory || null);
            }}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <h3 className="font-semibold">Condition</h3>
          <select
            className="w-full border rounded p-2"
            value={selectedCondition || ""}
            onChange={(e) => {
              const selectedValue = e.target.value;
              const selectedCondition = conditions.find(
                (condition) => condition === selectedValue
              );
              setSelectedCondition(selectedCondition || null);
            }}
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
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
            />
            <span>-</span>
            <Input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
            />
          </div>
        </div>

        <Button onClick={() => console.log("Apply Filters")}>
          Apply Filters
        </Button>
      </div>

      {/* Right Column: Listings */}
      <div className="col-span-3">
        <ProductGrid listings={listings} />
      </div>
    </div>
  );
}
