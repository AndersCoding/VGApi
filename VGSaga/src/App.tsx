import { useEffect, useState } from "react";
import { IMovie } from "./interface/IMovie";
import { IReview } from "./interface/IReviews";
import MovieServices from "./services/MovieServices";
import ReviewServices from "./services/ReviewServices"; // Assuming you have a similar service setup
import Carousel from "./Components/Carousel";
import CommentCarousel from "./Components/CommentCarousel";
import "./index.css";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]); // Add state for reviews

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await MovieServices.getAllMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const fetchedReviews = await ReviewServices.getAllReviews();
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchMovies();
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-6">Movies Carousel</h1>
      {movies.length > 0 ? (
        <Carousel movies={movies} />
      ) : (
        <p className="text-center text-gray-500">No movies found.</p>
      )}

      <h1 className="text-2xl text-center my-6">Reviews Carousel</h1>
      {reviews.length > 0 ? (
        <CommentCarousel reviews={reviews} />
      ) : (
        <p className="text-center text-gray-500">No reviews found.</p>
      )}
    </div>
  );
}

export default App;
