import { useEffect, useState } from "react";
import { IMovie } from "./interface/IMovie";
import MovieServices from "./services/MovieServices";
import "./App.css";
import Carousel from "./Components/Carousel";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await MovieServices.getAllMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Movies Carousel</h1>
      {movies.length > 0 ? (
        <Carousel movies={movies} />
      ) : (
        <p className="text-center text-gray-500">No movies found.</p>
      )}
    </div>
  );
}

export default App;
