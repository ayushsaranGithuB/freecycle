"use client";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { useSession } from "next-auth/react";
import { UserJourney } from "@prisma/client";
import { fetchUserJourney } from "@/app/helpers/user";

const BonusPoints = () => {
  // Get user ID from session
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [userJourney, setUserJourney] = useState<UserJourney | null>(null);

  // Fetch user Journey from the server
  useEffect(() => {
    const fetchJourney = async () => {
      if (!userId) {
        return;
      }
      try {
        const data = await fetchUserJourney(userId);
        if (!data) {
          throw new Error("Failed to fetch user journey");
        }
        setUserJourney(data);
        console.log("User Journey:", data);
      } catch (error) {
        console.error("Error fetching user journey:", error);
      }
    };

    fetchJourney();
  }, [userId]);

  return (
    <>
      <section className="bonus-points callout">
        <div>
          <h3>Bonus Points</h3>
          <p>
            You have received <strong>1000 points</strong> for signing up
          </p>
          <p>You can use these points to get discounts on your next purchase</p>
        </div>
        <div className="action">
          <Button className="primary">Claim</Button>
        </div>
      </section>
    </>
  );
};

export default BonusPoints;
