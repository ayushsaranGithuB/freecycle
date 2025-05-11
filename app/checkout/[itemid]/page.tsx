"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  fetchItemDetails,
  fetchUserPoints,
  estimateShipping,
} from "@/app/helpers/api";
import "@/app/styles/checkout.css";
import { Item, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { trimAtSpace } from "@/app/helpers/text";
import Link from "next/link";
import { CircleArrowRight, Coins, House, Info } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { handlePurchase } from "@/app/helpers/api";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import Spinner from "@/app/components/ui/spinner";
import { fetchUserProfile } from "@/app/helpers/user";
import { pincodeToCity } from "@/app/helpers/calculations";
import Image from "next/image";

// Tooltips

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const CheckoutPage = () => {
  const router = useRouter();
  const params = useParams<{ itemid: string }>();
  const { itemid } = params;
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [itemDetails, setItemDetails] = useState<Item | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [shippingTime, setShippingTime] = useState("");

  const [difference, setDifference] = useState(0);
  const images = (itemDetails?.images as string[]) || [];
  // const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [itemLocation, setItemLocation] = useState<string | null>(null);

  // Payment Methods
  const paymentMethods = [
    { id: "gpay", name: "Google Pay", icon: "/icons/gpay.svg" },
    { id: "visa", name: "Visa", icon: "/icons/visa.svg" },
    { id: "mastercard", name: "MasterCard", icon: "/icons/mastercard.svg" },
  ];

  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);

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

      fetchUserProfile(userId)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => console.error("Error fetching user profile:", error));
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
          setShippingTime(data.estimatedDeliveryTime);
        })
        .catch((error) =>
          console.error("Error estimating shipping cost:", error)
        );
    }
    if (itemDetails?.locationPincode !== undefined) {
      pincodeToCity(itemDetails?.locationPincode as string)
        .then((cityState) => {
          setItemLocation(cityState);
        })
        .catch((error) =>
          console.error("Error fetching item location:", error)
        );
    }
  }, [itemDetails, userPoints]);

  if (!itemDetails) return <Spinner />;

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    if (userId) {
      try {
        const response = await handlePurchase(itemDetails.id, userId);
        if (response) {
          router.push("/account/dashboard");
        }
      } catch (error) {
        console.error("Error handling purchase:", error);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container card mx-auto">
        {/* Breadcrumbs ---------------------------------------  */}
        <ul className="breadcrumbs">
          <li>
            <Link href="/" className="flex items-center gap-1">
              <House width={12} height={12} />
              Home
            </Link>
          </li>
          <li>&raquo;</li>
          <li>Checkout</li>
        </ul>
        <div className="content">
          {/* Left Column: Order Details ---------------------------------------  */}
          <div className="order-details">
            {/* Item Details ---------------------------------- */}
            <h3 className="title">Item Details</h3>
            <div className="listing">
              <div className="listing-image">
                <Image
                  src={images[0]}
                  alt={itemDetails.title}
                  width={90}
                  height={90}
                />
              </div>
              <div className="listing-details">
                <p className="category">{itemDetails.category}</p>
                <h4>
                  <Link href={`/item/${itemDetails.id}`}>
                    {trimAtSpace(itemDetails.title, 60)}
                  </Link>
                </h4>
                <p className="condition">{itemDetails.condition} Condition</p>
              </div>
            </div>

            {/* Shipping Details ---------------------------------- */}

            <h3 className="title">Shipping Info</h3>

            <div className="shipping-details">
              <div className="origin">
                <p className="direction">FROM:</p>
                <p className="pincode">{itemDetails.locationPincode}</p>
                <p className="cityState">{itemLocation}</p>
              </div>
              <span className="arrow">
                <CircleArrowRight width={20} />
              </span>
              <div className="destination">
                <p className="direction">TO:</p>
                <p className="pincode">{user?.pincode}</p>
                <p className="cityState">{user?.cityState}</p>
              </div>
              <div className="shipping-cost">
                <p className="amount">
                  ₹{" "}
                  {shippingCost !== null ? `${shippingCost}` : "Calculating..."}
                </p>
                <p className="time">~ {shippingTime} days</p>
              </div>
            </div>

            {/* Order Summary ---------------------------------- */}

            <h3 className="title">Order Summary</h3>

            <div className="order-summary">
              <p>Your Points Balance</p>
              <p className="number pointsValue">
                <Coins width={14} height={14} />
                {userPoints}
              </p>
              <p>Item Value</p>
              <p className="number">- {itemDetails.pointsValue}</p>
              <p>Shipping Charges</p>
              <p className="number">
                ₹ {shippingCost !== null ? `${shippingCost}` : "..."}
              </p>
              <p className="total">To Pay</p>
              <p className="number total">₹ {shippingCost}</p>
            </div>
            <div>
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
            </div>
          </div>

          {/* Right Column: Payment ---------------------- */}
          <div className="column payment">
            <h1 className="title">Payment Details</h1>
            <div>
              <p className="balance">
                You can claim this item using your points
              </p>
              <p className="hint">Just pay the shipping charges</p>
            </div>

            <div className="payment-method">
              <p className="title">Payment Method</p>
              <ul className="payment-options">
                {paymentMethods.map((method) => (
                  <li
                    key={method.id}
                    className={paymentMethod === method.id ? "active" : ""}
                  >
                    <label htmlFor={method.id}>
                      <Image
                        src={method.icon}
                        alt={method.name}
                        className="payment-icon"
                      />
                    </label>
                    <input
                      type="radio"
                      id={method.id}
                      name="payment-method"
                      value={method.name}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit}>
              {paymentMethod === "gpay" ? (
                <div className="field">
                  <Label htmlFor="card-number">UPI id</Label>
                  <Input type="text" id="upi-id" name="upi-id" required />
                </div>
              ) : (
                <>
                  <div className="field">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      type="text"
                      id="card-number"
                      name="card-number"
                      required
                    />
                  </div>
                  <div className="card-meta">
                    <div className="field">
                      <Label htmlFor="expiry-date">Expiry Date</Label>
                      <Input
                        type="text"
                        id="expiry-date"
                        name="expiry-date"
                        required
                      />
                    </div>
                    <div className="field">
                      <Label htmlFor="cvv">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center gap-1">
                              CVV <Info width={12} height={12} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>The last 3 digits on the back of your card</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input type="text" id="cvv" name="cvv" required />
                    </div>
                  </div>
                </>
              )}
            </form>

            <Button
              className="primary button"
              onClick={handleSubmit}
              disabled={loading}
            >
              Pay ₹{shippingCost}
            </Button>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
    </>
  );
};

export default CheckoutPage;
