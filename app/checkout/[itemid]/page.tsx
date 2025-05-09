"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  fetchItemDetails,
  fetchUserPoints,
  estimateShipping,
} from "@/app/helpers/api";
import "@/app/styles/checkout.css";
import { Item } from "@prisma/client";
import { useSession } from "next-auth/react";
import { trimAtSpace } from "@/app/helpers/text";
import Link from "next/link";
import { Coins } from "lucide-react";

const CheckoutPage = () => {
  const router = useRouter();
  const params = useParams<{ itemid: string }>();
  const { itemid } = params;
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [itemDetails, setItemDetails] = useState<Item | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [difference, setDifference] = useState(0);
  const images = (itemDetails?.images as string[]) || [];

  useEffect(() => {
    if (itemid && userId) {
      // Fetch item details
      fetchItemDetails(itemid as string)
        .then((data) => {
          setItemDetails(data);
        })
        .catch((error) => console.error("Error fetching item details:", error));

      // Fetch user points
      fetchUserPoints(userId)
        .then((data) => {
          setUserPoints(data.pointsBalance);
        })
        .catch((error) => console.error("Error fetching user points:", error));
    }
  }, [itemid, userId]);

  useEffect(() => {
    if (itemDetails) {
      const diff = itemDetails.pointsValue - userPoints;
      setDifference(diff > 0 ? diff : 0);

      // Fetch shipping cost using estimateShipping
      estimateShipping(
        123456,
        parseInt(itemDetails.locationPincode),
        1,
        "small"
      ) // Replace '123456' with actual buyer pincode
        .then((data) => {
          setShippingCost(data.estimatedShippingCharges);
        })
        .catch((error) =>
          console.error("Error estimating shipping cost:", error)
        );
    }
  }, [itemDetails, userPoints]);

  if (!itemDetails) return <div>Loading...</div>;

  return (
    <>
      <div className="container card mx-auto">
        <h1 className="titleUnderlined">Claim this Item</h1>
        <div className="row">
          <div className="listing">
            <div className="listing-image">
              <img src={images[0]} alt={itemDetails.title} />
            </div>
            <div className="listing-details">
              <p className="category">{itemDetails.category}</p>
              <h4>
                <Link href={`/item/${itemDetails.id}`}>
                  {trimAtSpace(itemDetails.title, 60)}
                </Link>
              </h4>
              <p className="condition">{itemDetails.condition}</p>
            </div>
            <p className="pointsValue">
              <Coins width={14} height={14} />
              {itemDetails.pointsValue}
            </p>
          </div>
          {/* Checkout ---------------------- */}
          <div className="checkout">
            <h2 className="title">Checkout</h2>
            <p className="line-item">
              <span className="item-title">Points required:</span>
              <span className="item-value">{itemDetails.pointsValue}</span>
            </p>
            <p className="line-item">
              <span className="item-title">Your points balance:</span>
              <span className="item-value">{userPoints}</span>
            </p>
            {difference > 0 && (
              <div className="balance-warning">
                <p>You need {difference} points to complete this purchase</p>
                <button
                  className="primary button"
                  onClick={() => router.push("/calculate-points")}
                >
                  Purchase Points
                </button>
              </div>
            )}
            <p>
              Shipping cost:{" "}
              {shippingCost !== null ? `$${shippingCost}` : "Calculating..."}
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
    </>
  );
};

export default CheckoutPage;
