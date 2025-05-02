// Dummy API call to estimate Shipping Charges
// inputs: 
// - 6 digit pincodes for Buyer and Seller
// - item weight and size
// output:
// - estimated shipping charges
// - estimated delivery time

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { buyerPincode, sellerPincode, weight, size } = await req.json();

        if (!buyerPincode || !sellerPincode || !weight || !size) {
            return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
        }

        const estimatedShippingCharges = Math.floor(Math.random() * 100) + 1;
        const estimatedDeliveryTime = Math.floor(Math.random() * 7) + 1;

        return NextResponse.json({ estimatedShippingCharges, estimatedDeliveryTime });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred." }, { status: 500 });
    }
}
