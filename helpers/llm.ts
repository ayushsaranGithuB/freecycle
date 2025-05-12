export async function getEstimatedUsedPrices(itemName: string) {
    const prompt = `You are a price lookup API for used tech gadgets, given a product name, return the original retail price and estimated used item price in POOR, FAIR, GOOD and EXCELLENT condition. Return valid JSON only, with prices in INR. The product is = '${itemName}'.`;

    try {
        const response = await fetch("/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt,
            }),
        });

        // console.log("Response from AI:", response);
        return response.json();

    } catch (error) {
        console.error("Error fetching estimated prices:", error);
        return {
            error: "Failed to fetch estimated prices",
        };
    }

}