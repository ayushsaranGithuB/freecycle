"use client";
// Top-Up Points Balance

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { fetchUserPoints, setUserPoints } from "@/helpers/api";
import { useSession } from "next-auth/react";

export default function TopUpPage() {
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  //   Get userId from session
  const { data: session } = useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    async function loadUserPoints() {
      if (!userId) return;
      try {
        const response = await fetchUserPoints(userId);
        const points = response.pointsBalance || 0;
        setBalance(points);
      } catch (error) {
        console.error("Error fetching user points:", error);
      }
    }

    loadUserPoints();
  }, [userId]);

  const handleTopUp = async () => {
    if (topUpAmount > 0 && userId) {
      try {
        await setUserPoints(userId, topUpAmount, "PURCHASE");
        const newBalance = balance + topUpAmount;
        setBalance(newBalance);
        setSuccessMessage(`Your new balance is ${newBalance} points.`);
        setTopUpAmount(0);
      } catch (error) {
        console.error("Error updating user points:", error);
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Top-Up Points Balance</h1>
      <p className="mb-4">
        Current Balance: <span className="font-semibold">{balance} points</span>
      </p>

      <div className="mb-4">
        <Label htmlFor="topUpAmount">Enter Top-Up Amount</Label>
        <Input
          id="topUpAmount"
          type="number"
          value={topUpAmount}
          onChange={(e) => setTopUpAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
      </div>

      <Button
        onClick={handleTopUp}
        variant="default"
        size="default"
        className="primary"
      >
        Submit
      </Button>

      {successMessage && (
        <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
      )}
    </div>
  );
}
