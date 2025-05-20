import { ItemCategory } from "@prisma/client";

type EWasteStats = {
    category: ItemCategory;
    avgWeightGrams: number;
    materials: {
        leadMilligrams: number;
        mercuryMilligrams: number;
        cadmiumMilligrams: number;
        lithiumGrams: number;
        plasticGrams: number;
        glassGrams: number;
        rareEarthGrams: number;
    };
};

const EWASTE_DATA: Record<string, EWasteStats> = {
    phone: {
        category: "PHONE",
        avgWeightGrams: 250,
        materials: {
            leadMilligrams: 100,
            mercuryMilligrams: 1,
            cadmiumMilligrams: 5,
            lithiumGrams: 1,
            plasticGrams: 70,
            glassGrams: 100,
            rareEarthGrams: 0.5,
        },
    },
    laptop: {
        category: "LAPTOP",
        avgWeightGrams: 2500,
        materials: {
            leadMilligrams: 1500,
            mercuryMilligrams: 5,
            cadmiumMilligrams: 10,
            lithiumGrams: 5,
            plasticGrams: 500,
            glassGrams: 1000,
            rareEarthGrams: 2,
        },
    },
    tablet: {
        category: "TABLET",
        avgWeightGrams: 800,
        materials: {
            leadMilligrams: 200,
            mercuryMilligrams: 1,
            cadmiumMilligrams: 5,
            lithiumGrams: 2,
            plasticGrams: 150,
            glassGrams: 400,
            rareEarthGrams: 1,
        },
    },
    watch: {
        category: "WEARABLES",
        avgWeightGrams: 100,
        materials: {
            leadMilligrams: 50,
            mercuryMilligrams: 0.2,
            cadmiumMilligrams: 1,
            lithiumGrams: 0.5,
            plasticGrams: 30,
            glassGrams: 40,
            rareEarthGrams: 0.2,
        },
    },
    accessory: {
        category: "ACCESSORIES",
        avgWeightGrams: 150,
        materials: {
            leadMilligrams: 50,
            mercuryMilligrams: 0,
            cadmiumMilligrams: 2,
            lithiumGrams: 0,
            plasticGrams: 100,
            glassGrams: 0,
            rareEarthGrams: 0,
        },
    },
    gaming: {
        category: "GAMING",
        avgWeightGrams: 1500,
        materials: {
            leadMilligrams: 500,
            mercuryMilligrams: 2,
            cadmiumMilligrams: 5,
            lithiumGrams: 3,
            plasticGrams: 300,
            glassGrams: 200,
            rareEarthGrams: 1.5,
        },
    }
};

export type Totals = {
    totalWeightGrams: number;
    totalLeadMilligrams: number;
    totalMercuryMilligrams: number;
    totalCadmiumMilligrams: number;
    totalLithiumGrams: number;
    totalPlasticGrams: number;
    totalGlassGrams: number;
    totalRareEarthGrams: number;
};

export function calculateEwastePrevention(userItems: { category: string; count: number }[]): Totals {
    const total: Totals = {
        totalWeightGrams: 0,
        totalLeadMilligrams: 0,
        totalMercuryMilligrams: 0,
        totalCadmiumMilligrams: 0,
        totalLithiumGrams: 0,
        totalPlasticGrams: 0,
        totalGlassGrams: 0,
        totalRareEarthGrams: 0,
    };

    for (const { category, count } of userItems) {
        const data = EWASTE_DATA[category];
        if (!data) continue;

        total.totalWeightGrams += data.avgWeightGrams * count;
        total.totalLeadMilligrams += data.materials.leadMilligrams * count;
        total.totalMercuryMilligrams += data.materials.mercuryMilligrams * count;
        total.totalCadmiumMilligrams += data.materials.cadmiumMilligrams * count;
        total.totalLithiumGrams += data.materials.lithiumGrams * count;
        total.totalPlasticGrams += data.materials.plasticGrams * count;
        total.totalGlassGrams += data.materials.glassGrams * count;
        total.totalRareEarthGrams += data.materials.rareEarthGrams * count;
    }

    return total;
}


export async function pincodeToCity(pincode: string) {
    if (pincode.length != 6) {
        return "Invalid Pincode";
    }
    const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
    );
    const data = await response.json();
    if (data[0].Status == "Success") {
        return `${data[0].PostOffice[0].Name},  ${data[0].PostOffice[0].District}, ${data[0].PostOffice[0].State}`;
    } else {
        console.log("Invalid Pincode", data);
        return "Invalid Pincode";
    }
}