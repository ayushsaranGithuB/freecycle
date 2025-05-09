// Helper functions for user-related operations

import { User } from "@prisma/client";

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
