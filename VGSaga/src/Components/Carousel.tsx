// src/Components/Carousel.tsx
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

  const currentMovie = movies[currentIndex];

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg bg-[#13032C] shadow-lg">
      <div className="flex items-center space-x-4">
        <button onClick={handlePrevious} className="text-2xl text-white">
          {"<"}
        </button>

        {/* Movie Display */}
        <div className="flex flex-col items-center">
          <img
            src={currentMovie.program.poster}
            alt={currentMovie.program.title}
            className="w-32 h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2 text-white">
            {currentMovie.program.title}
          </h2>

          {/* Reviews for the current movie */}
          <div className="mt-4 space-y-4">
            {currentMovie.reviews.map((review, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <img
                    src={review.media.logo}
                    alt={review.media.name}
                    className="w-6 h-6"
                  />
                  <a
                    href={review.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-500"
                  >
                    {review.media.name}
                  </a>
                </div>
                <p className="text-sm text-white mt-1">{review.comment}</p>
                <p className="text-sm text-white mt-1">
                  Rating: {review.rating.score}/{review.rating.max} (
                  {review.normalized_rating.toFixed(1)})
                </p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="text-2xl text-white">
          {">"}
        </button>
      </div>
    </div>
  );
}
