"use client";
import { estimateShipping } from "@/helpers/api";
import { useState } from "react";
import { ShippingEstimate } from "@/helpers/api";
import Link from "next/link";
import { Truck } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
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
    setLoading(true);
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
    setLoading(false);
  }

  if (shippingDetails && buyerPincode.length === 6) {
    return (
      <p>
        Estimated Shipping Charges: ₹ {shippingDetails.estimatedShippingCharges}{" "}
        <br />
        Delivery Time: {shippingDetails.estimatedDeliveryTime} days
      </p>
    );
  }

  return (
    <Popover>
      <PopoverTrigger>
        <p>+ Shipping Charges</p>
      </PopoverTrigger>
      <PopoverContent className="popover-content" sideOffset={10}>
        <div className=" p-4">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center w-full gap-2 text-gray-500 text-sm">
              <Truck /> Enter your pincode
            </p>
            <form onSubmit={handleSubmit} className="shipping-estimator">
              <input
                type="text"
                placeholder="ex: 400001"
                className="border rounded px-2 py-1"
                value={buyerPincode}
                onChange={(e) => setBuyerPincode(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                &raquo;
              </button>
            </form>
          </div>

          <p>
            <Link href="#" onClick={() => setBuyerPincode("")}>
              Change Pincode
            </Link>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShippingEstimator;
