import { useEffect, useState } from "react";
import { IMovie } from "./interface/IMovie";
import MovieServices from "./services/MovieServices";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await MovieServices.getAllMovies();
        setMovies(fetchedMovies); // Set movies directly
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.program.slug} className="movie-item">
              <img src={movie.program.poster} alt={movie.program.title} />
              <h2>{movie.program.title}</h2>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
