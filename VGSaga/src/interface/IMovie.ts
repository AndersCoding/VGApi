// src/interface/IMovie.ts
export interface IMovie {
    program: {
        slug: string;
        title: string;
        poster: string;
        imdbRating: string;
    };
    reviews: IReview[];
}

export interface IReview {
    media: {
        name: string;
        logo: string;
        url: string;
    };
    rating: {
        score: number;
        max: number;
    };
    normalized_rating: number;
    comment: string;
    date: string;
}
