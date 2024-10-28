// src/services/MovieServices.ts
import axios from "axios";
import { IMovie } from "../interface/IMovie";

const movieApiEndpoint = "http://localhost:5277/proxy/reviews";

const getAllMovies = async (): Promise<IMovie[]> => {
  try {
    const result = await axios.get<{ data: IMovie[] }>(movieApiEndpoint);
    console.log("Fetched movies:", result.data.data); // Confirm data structure
    return result.data.data; // Access the movies array directly from the response
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
};

export default {
  getAllMovies,
};
