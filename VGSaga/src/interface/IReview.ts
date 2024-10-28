import { ReactNode } from "react";

// IReviews.ts
export interface IReview {
    id: string;
    media: {
        name: string;
        logo: string;
    };
    rating: {
        max: ReactNode;
        score: number;
        maxScore: number;
        normalizedRating: number;
    };
    comment: string;
}
