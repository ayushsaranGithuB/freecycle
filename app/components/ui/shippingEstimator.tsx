"use client";
import { estimateShipping } from "@/app/helpers/api";
import { useState } from "react";
import { ShippingEstimate } from "@/app/helpers/api";
import { Button } from "./button";
import Link from "next/link";

interface ShippingEstimatorProps {
  sellerPincode: string;
}
const ShippingEstimator = ({ sellerPincode }: ShippingEstimatorProps) => {
  const [buyerPincode, setBuyerPincode] = useState<string>("");
  const [shippingDetails, setShippingDetails] =
    useState<ShippingEstimate | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await estimateShipping(
        parseInt(buyerPincode),
        parseInt(sellerPincode),
        2, // Dummy weight in kg
        "medium" // Dummy size
      );
      setShippingDetails(data);
    } catch (error) {
      console.error("Error fetching shipping details:", error);
    }
  }

  return (
    <div className="bg-white  p-4">
      <div className="flex items-center gap-2">
        <form onSubmit={handleSubmit} className="shipping-estimator">
          <input
            type="text"
            placeholder="Enter your pincode"
            className="border rounded px-2 py-1"
            value={buyerPincode}
            onChange={(e) => setBuyerPincode(e.target.value)}
          />
          <button type="submit">&raquo;</button>
        </form>
      </div>
      {shippingDetails && buyerPincode.length === 6 && (
        <p>
          Estimated Shipping Charges: ₹{" "}
          {shippingDetails.estimatedShippingCharges} <br />
          Delivery Time: {shippingDetails.estimatedDeliveryTime} days
        </p>
      )}
      <p>
        <Link href="#" onClick={() => setBuyerPincode("")}>
          Change Pincode
        </Link>
      </p>
    </div>
  );
};

export default ShippingEstimator;
