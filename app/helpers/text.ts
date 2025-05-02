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