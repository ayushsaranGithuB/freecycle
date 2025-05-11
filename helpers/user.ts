// Helper functions for user-related operations

import { User, UserJourney } from "@prisma/client";

// fetchUserProfile 
export const fetchUserProfile = async (userId: string): Promise<User> => {
    const res = await fetch(`/api/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch user profile");
    }
    return res.json();
};

// updateUserProfile
export const updateUserProfile = async (userId: string, data: Partial<User>): Promise<User> => {
    const res = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Failed to update user profile");
    }
    return res.json();
};

// fetchUserJourney
export const fetchUserJourney = async (userId: string): Promise<UserJourney> => {
    const res = await fetch(`/api/user/${userId}/journey`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch user journey");
    }
    return res.json();
};

/**
 * Update the user journey for a given userId with any stage fields.
 * @param userId - The user's ID (phone)
 * @param data - The fields to update in userJourney
 * @returns Promise resolving to the updated userJourney object or throws error
 */
export async function updateUserJourney(userId: string, data: Record<string, any>) {
    const response = await fetch(`/api/user/${userId}/journey`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.message || "Failed to update user journey");
    }
    return response.json();
}