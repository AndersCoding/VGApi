import axios from "axios";
import { IMovie } from "../interface/IMovie"; // Adjust path if necessary

const movieApiEndpoint = "http://localhost:5277/proxy/reviews";

const getAllMovies = async (): Promise<IMovie[]> => {
  try {
    const result = await axios.get<{ data: IMovie[] }>(movieApiEndpoint);
    console.log(result.data.data); // Log the array of movies directly
    return result.data.data; // Directly return the array of movies
  } catch (error) {
    console.log("Error fetching movies", error);
    throw error;
  }
};

export default {
  getAllMovies,
};
