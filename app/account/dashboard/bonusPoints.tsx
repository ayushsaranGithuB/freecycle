"use client";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { useSession } from "next-auth/react";
import { UserJourney } from "@prisma/client";
import { fetchUserJourney } from "@/helpers/user";
import ConnectEmailModal from "./modals/connectEmailModal";

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
    title: string;
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
      title: "Connect your email",
      prompt: "Verify your email address and get 100 bonus points",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        setIsModalOpen(true);
      },
    },
    {
      stage: "socialConnected",
      value: userJourney?.socialConnected || false,
      title: "Connect a social account for verification",
      prompt: "Get 200 bonus points for verifying your social account",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for social account verification");
      },
    },
    {
      stage: "firstListing",
      value: userJourney?.firstListing || false,
      title: "Create your first listing",
      prompt: "Get 100 bonus points for creating your first listing",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first listing");
      },
    },
    {
      stage: "firstTransaction",
      value: userJourney?.firstTransaction || false,
      title: "Complete your first transaction",
      prompt: "Get 100 bonus points for completing your first transaction",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first transaction");
      },
    },
    {
      stage: "firstReferral",
      value: userJourney?.firstReferral || false,
      title: "Refer a friend",
      prompt: "Get 100 bonus points for referring a friend",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first referral");
      },
    },
    {
      stage: "firstPointsEarned",
      value: userJourney?.firstPointsEarned || false,
      title: "Earn your first points",
      prompt: "Get 100 bonus points for earning your first points",
      action: "button",
      actionText: "Claim",
      buttonAction: () => {
        // Handle button action
        alert("Claimed points for first points earned");
      },
    },
    {
      stage: "firstTopUp",
      value: userJourney?.firstTopUp || false,
      title: "Top up your account",
      prompt: "Get 10% extra bonus points for topping up your account",
      action: "button",
      actionText: "Claim",
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
      <section className="bonus-points callout">
        <div>
          <h3>{firstIncompleteStep?.title}</h3>
          <p>{firstIncompleteStep?.prompt}</p>
        </div>
        <div className="action">
          {firstIncompleteStep?.action === "link" ? (
            <a className="primary" href={firstIncompleteStep?.actionUrl}>
              {firstIncompleteStep?.actionText}
            </a>
          ) : (
            <Button
              className="primary"
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
