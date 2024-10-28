import { useState } from "react";
import { IMovie } from "../interface/IMovie";
import SAGA from "../images/SAGA.png";

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
    <div className="max-w-sm mx-auto p-4 rounded-[30px] border-[3px] border-[#31214A] bg-[#13032C] ">
      {" "}
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="text-3xl text-[#F773DE] hover:text-[#B48AAC] focus:outline-none"
        >
          {"<"}
        </button>

        <div className="flex items-center justify-center space-x-4">
          {/* Current Movie */}

          <div className="relative flex flex-col items-center transform scale-100 transition-transform duration-300 ease-in-out">
            <img
              src={SAGA}
              className="max-w-full h-auto top-0 left-0 object-contain"
            ></img>{" "}
            <img
              src={movies[currentIndex].program.poster}
              alt={movies[currentIndex].program.title}
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="text-3xl text-[#F773DE] hover:text-[#B48AAC] focus:outline-none"
        >
          {">"}
        </button>
      </div>
      <div className="flex items-center justify-center space-x-2 mt-4">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full ${
              index === currentIndex ? " w-6 bg-[#F773DE]" : " w-2 bg-[#B48AAC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
