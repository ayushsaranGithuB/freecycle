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

export async function fetchItemDetails(itemId: string) {
    const response = await fetch(`/api/listings/${itemId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch item details');
    }
    return response.json();
}

export async function fetchUserPoints(userId: string) {
    const response = await fetch(`/api/user/points?userId=${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user points');
    }
    return response.json();
}

export async function setUserPoints(userId: string, points: number, action: 'EARN' | 'SPEND' | 'BONUS' | 'PURCHASE') {
    const response = await fetch(`/api/user/points`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, points, action }),
    });

    if (!response.ok) {
        throw new Error("Failed to set user points");
    }

    return response.json();
}

//  Handle Purchases -------------------------------------------------

export async function handlePurchase(itemId: number, userId: string) {
    const response = await fetch(`/api/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId, userId }),
    });

    if (!response.ok) {
        throw new Error("Failed to handle purchase");
    }

    const purchaseData = await response.json();

    // Update the item's status to 'RESERVED'
    const updateResponse = await fetch(`/api/listings/${itemId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "RESERVED" }),
    });

    if (!updateResponse.ok) {
        throw new Error("Failed to update item status to RESERVED");
    }

    return purchaseData;
}

export async function fetchInvoice(transactionId: string) {
    try {
        const response = await fetch(`/api/invoice/${transactionId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch invoice details");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching invoice details:", error);
        throw error;
    }
}