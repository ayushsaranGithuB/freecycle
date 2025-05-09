// Helpers for API Rules
import { Listing } from "@/app/components/ui/productGrid";
import { ItemStatus } from "@prisma/client";

export interface ShippingEstimate {
    estimatedShippingCharges: number;
    estimatedDeliveryTime: number;
}

export async function fetchListings({
    limit = 12,
    searchQuery = "",
    category = null,
    condition = null,
    minPrice = 0,
    maxPrice = 10000,
}: {
    limit?: number;
    searchQuery?: string;
    category?: string | null;
    condition?: string | null;
    minPrice?: number;
    maxPrice?: number;
}): Promise<Listing[]> {
    const queryParams = new URLSearchParams({
        limit: limit.toString(),
        searchQuery,
        category: category || "",
        condition: condition || "",
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
    });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/listings?${queryParams.toString()}`
    );
    const data: Listing[] = await response.json();
    return data;
}

export async function fetchUserListings(userId: string, {
    limit = 10,
    searchQuery = "",
    category = null,
    condition = null,
    minPrice = 0,
    maxPrice = 10000,
    status = "AVAILABLE"
}: {
    limit?: number;
    searchQuery?: string;
    category?: string | null;
    condition?: string | null;
    minPrice?: number;
    maxPrice?: number;
    status?: ItemStatus;
}): Promise<Listing[]> {
    const queryParams = new URLSearchParams({
        limit: limit.toString(),
        searchQuery,
        category: category || "",
        condition: condition || "",
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        status: status || "",
    });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/listings?userId=${userId}&${queryParams.toString()}`
    );
    const data: Listing[] = await response.json();
    return data;
}

export async function estimateShipping(buyerPincode: number, sellerPincode: number, weight: number, size: string) {
    try {
        const response = await fetch("/api/estimate-shipping", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                buyerPincode,
                sellerPincode,
                weight,
                size,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch shipping estimate");
        }

        return await response.json();
    } catch (error) {
        console.error("Error estimating shipping:", error);
        throw error;
    }
}

// fetchUserPurchases
export async function fetchUserPurchases(limit: number, userId: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchases?limit=${limit}&userId=${userId}`
    );
    const data = await response.json();
    return data;
}