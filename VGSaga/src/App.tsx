import { useEffect, useState } from "react";
import { IMovie } from "./interface/IMovie";
import { IReview } from "./interface/IReview";
import MovieServices from "./services/MovieServices";
import "./index.css";
import Carousel from "./Components/Carousel";

function App() {
  // Initialize both states as empty arrays to avoid undefined errors
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    const fetchMoviesAndReviews = async () => {
      try {
        const data = await MovieServices.getAllMoviesAndReviews();

        // Ensure `data` has `movies` and `reviews` before updating state
        if (data.movies && data.reviews) {
          setMovies(data.movies);
          setReviews(data.reviews);
        } else {
          console.error("Data structure does not contain movies or reviews.");
        }
      } catch (error) {
        console.error("Error fetching movies and reviews:", error);
      }
    };

    fetchMoviesAndReviews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-6">Movies Carousel</h1>
      {movies.length > 0 && reviews.length > 0 ? (
        <Carousel movies={movies} reviews={reviews} />
      ) : (
        <p className="text-center text-gray-500">No movies or reviews found.</p>
      )}
    </div>
  );
}

export default App;
