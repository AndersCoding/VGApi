import { useState } from "react";
import { IMovie } from "../interface/IMovie";

interface CarouselProps {
  movies: IMovie[];
}

export default function Carousel({ movies }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = (currentIndex === 0 ? movies.length : currentIndex) - 1;
  const nextIndex = (currentIndex + 1) % movies.length;

  return (
    <div className="flex flex-col items-center bg-pink-100 py-8 rounded-lg shadow-lg space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {"<"}
        </button>

        <div className="flex items-center space-x-4">
          {/* Previous Movie */}
          <div className="transform scale-75 opacity-50 transition-transform duration-300 ease-in-out">
            <img
              src={movies[prevIndex].program.poster}
              alt={movies[prevIndex].program.title}
              className="w-20 h-28 rounded-md shadow-md"
            />
          </div>

          {/* Current Movie */}
          <div className="transform scale-100 transition-transform duration-300 ease-in-out">
            <img
              src={movies[currentIndex].program.poster}
              alt={movies[currentIndex].program.title}
              className="w-32 h-40 rounded-md shadow-lg border-2 border-blue-400"
            />
          </div>

          {/* Next Movie */}
          <div className="transform scale-75 opacity-50 transition-transform duration-300 ease-in-out">
            <img
              src={movies[nextIndex].program.poster}
              alt={movies[nextIndex].program.title}
              className="w-20 h-28 rounded-md shadow-md"
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {">"}
        </button>
      </div>

      <div className="flex space-x-2 mt-4">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
