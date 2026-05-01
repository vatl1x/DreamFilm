export type RatingVariant = "gold" | "green" | "orange" | "red";

export const getRatingVariant = (rating: number): RatingVariant => {
    if (rating >= 8) return "gold";
    if (rating >= 7) return "green";
    if (rating >= 5) return "orange";
    return "red";
};
