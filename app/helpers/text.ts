export function trimAtSpace(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
        return description;
    }
    const trimmed = description.slice(0, maxLength);
    const lastSpaceIndex = trimmed.lastIndexOf(" ");
    return lastSpaceIndex > -1
        ? trimmed.slice(0, lastSpaceIndex) + "..."
        : trimmed + "...";
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
    }).format(amount);
}