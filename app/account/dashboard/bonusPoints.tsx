"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { UserJourney } from "@prisma/client";
import { fetchUserJourney } from "@/helpers/user";
import ConnectEmailModal from "./modals/connectEmailModal";
import "@/app/styles/banners.css";

const BonusPoints = () => {
  // Get user ID from session
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  interface UserJourneyPrompts {
    stage: keyof UserJourney;
    value: boolean;
    prompt: string;
    action: "button" | "link";
    actionText: string;
    actionUrl?: string;
    buttonAction?: () => void;
  }

  const userJourneyPrompts: UserJourneyPrompts[] = [
    {
      stage: "emailConnected",
      value: userJourney?.emailConnected || false,

      prompt: "Verify your email address and get 100 bonus points",
      action: "button",
      actionText: "Connect your email",
      buttonAction: () => {
        setIsModalOpen(true);
      },
    },
    {
      stage: "socialConnected",
      value: userJourney?.socialConnected || false,
      prompt: "Get 200 bonus points for verifying your social account",
      action: "button",
      actionText: "Connect a social account",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for social account verification");
      },
    },
    {
      stage: "firstListing",
      value: userJourney?.firstListing || false,
      prompt: "Get 100 bonus points for creating your first listing",
      action: "button",
      actionText: "Create your first listing",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first listing");
      },
    },
    {
      stage: "firstTransaction",
      value: userJourney?.firstTransaction || false,
      prompt: "Get 100 bonus points for completing your first transaction",
      action: "button",
      actionText: "Complete your first transaction",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first transaction");
      },
    },
    {
      stage: "firstReferral",
      value: userJourney?.firstReferral || false,
      prompt: "Get 100 bonus points for referring a friend",
      action: "button",
      actionText: "Refer a friend",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first referral");
      },
    },
    {
      stage: "firstPointsEarned",
      value: userJourney?.firstPointsEarned || false,
      prompt: "Get 100 bonus points for earning your first points",
      action: "button",
      actionText: "Earn your first points",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first points earned");
      },
    },
    {
      stage: "firstTopUp",
      value: userJourney?.firstTopUp || false,
      prompt: "Get 10% extra bonus points for topping up your account",
      action: "button",
      actionText: "Top up your account",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first points redeemed");
      },
    },
  ];

  //   get the first userJourney step that is not completed
  const firstIncompleteStep = userJourneyPrompts.find((step) => !step.value);

  console.log("First Incomplete Step:", firstIncompleteStep);

  return (
    <>
      <section
        className={`bonus-points callout banner-${firstIncompleteStep?.stage}`}
      >
        <h3>{firstIncompleteStep?.prompt}</h3>

        <div className="action">
          {firstIncompleteStep?.action === "link" ? (
            <a className="primary" href={firstIncompleteStep?.actionUrl}>
              {firstIncompleteStep?.actionText}
            </a>
          ) : (
            <Button
              className="action-button"
              onClick={firstIncompleteStep?.buttonAction}
            >
              {firstIncompleteStep?.actionText}
            </Button>
          )}
        </div>
        {firstIncompleteStep?.stage === "emailConnected" && (
          <ConnectEmailModal open={isModalOpen} />
        )}
      </section>
    </>
  );
};

export default BonusPoints;
