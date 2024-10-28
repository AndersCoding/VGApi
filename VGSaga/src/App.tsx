// src/App.tsx
import { useEffect, useState } from "react";
import { IMovie } from "./interface/IMovie";
import MovieServices from "./services/MovieServices";
import Carousel from "./Components/Carousel";
import "./index.css";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await MovieServices.getAllMovies();
        setMovies(fetchedMovies);
        console.log("Movies state after fetch:", fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-6">Movies Carousel</h1>
      {movies.length > 0 ? (
        <Carousel movies={movies} />
      ) : (
        <p className="text-center text-gray-500">No movies found.</p>
      )}
    </div>
  );
}

export default App;
