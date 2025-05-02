// Helpers for API Rules
import { Listing } from "@/app/components/ui/productGrid";

export interface ShippingEstimate {
    estimatedShippingCharges: number;
    estimatedDeliveryTime: number;
}

export async function fetchListings(limit: number = 12): Promise<Listing[]> {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/listings?limit=" + limit
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