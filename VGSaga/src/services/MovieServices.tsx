import axios from "axios";
import { IMovie } from "../interface/IMovie";
import { IReview } from "../interface/IReview";

const movieApiEndpoint = "http://localhost:5277/proxy/reviews";

const getAllMoviesAndReviews = async (): Promise<{
  movies: IMovie[];
  reviews: IReview[];
}> => {
  try {
    const result = await axios.get<{
      data: { movies: IMovie[]; reviews: IReview[] };
    }>(movieApiEndpoint);
    return result.data.data; // Return data as { movies, reviews }
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
};

export default {
  getAllMoviesAndReviews,
};
