"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import ProductGrid from "@/app/components/ui/productGrid";
import { ItemCategory, ItemCondition } from "@prisma/client";
import { fetchListings } from "../helpers/api";
import { Listing } from "@/app/components/ui/productGrid";
import "@/app/styles/listings.css";
import { DisplayCategory } from "@/app/components/ui/categories";
import { productCategoriesList } from "../components/ui/categories";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-[1150px] mt-8">
      {/* Left Column: Filters */}
      <div className="filters">
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
          {selectedCategory ? (
            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
              <span>
                {
                  productCategoriesList.find(
                    (cat) => cat.category === selectedCategory
                  )?.name
                }
              </span>
              <button
                className="text-red-500 font-bold"
                onClick={() => setSelectedCategory(null)}
              >
                ×
              </button>
            </div>
          ) : (
            <select
              className="w-full border rounded p-2"
              value={selectedCategory || ""}
              onChange={(e) => {
                const selectedValue = e.target.value;
                const selectedCategory = productCategoriesList.find(
                  (category) => category.category === selectedValue
                );
                setSelectedCategory(selectedCategory?.category || null);
              }}
            >
              <option value="">All Categories</option>
              {productCategoriesList.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Condition Filter */}
        <div>
          <h3 className="font-semibold">Condition</h3>
          {selectedCondition ? (
            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
              <span>{selectedCondition}</span>
              <button
                className="text-red-500 font-bold"
                onClick={() => setSelectedCondition(null)}
              >
                ×
              </button>
            </div>
          ) : (
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
          )}
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-semibold">Price Range</h3>
          {priceRange[0] !== 0 || priceRange[1] !== 10000 ? (
            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
              <span>
                {priceRange[0]} - {priceRange[1]}
              </span>
              <button
                className="text-red-500 font-bold"
                onClick={() => setPriceRange([0, 10000])}
              >
                ×
              </button>
            </div>
          ) : (
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
          )}
        </div>
      </div>

      {/* Right Column: Listings */}
      <div className="col-span-3">
        <ProductGrid listings={listings} />
      </div>
    </div>
  );
}
