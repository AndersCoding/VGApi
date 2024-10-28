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

  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <button
        onClick={handlePrevious}
        className="text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {"<"}
      </button>

      <div className="flex flex-col items-center">
        <img
          src={movies[currentIndex].program.poster}
          alt={movies[currentIndex].program.title}
          className="w-48 h-auto rounded-md shadow-md"
        />
        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {movies[currentIndex].program.title}
        </h2>
      </div>

      <button
        onClick={handleNext}
        className="text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {">"}
      </button>
    </div>
  );
}
