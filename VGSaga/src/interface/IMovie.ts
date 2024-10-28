import { IReview } from "./IReview";

export interface IMovie {
    program: {
        slug: string;
        title: string;
        poster: string;
        reviews: IReview[];
    };
}
