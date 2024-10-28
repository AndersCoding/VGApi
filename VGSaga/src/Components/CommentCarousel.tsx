import React, { useState } from "react";
import { IReview } from "../interface/IReview";

interface CommentCarouselProps {
    reviews: IReview[];
}

export default function CommentCarousel({ reviews }: CommentCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Check if reviews array and current review exist
    const currentReview = reviews[currentIndex];
    const hasMedia = currentReview?.media;
    const hasRating = currentReview?.rating;

    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-bold text-gray-700">Review Carousel</h2>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handlePrevious}
                    className="text-xl text-gray-600 hover:text-gray-800"
                >
                    {"<"}
                </button>

                {/* Display current review if it exists */}
                {currentReview ? (
                    <div className="text-center">
                        {hasMedia && (
                            <>
                                <img
                                    src={hasMedia.logo}
                                    alt={hasMedia.name}
                                    className="w-16 h-16 mx-auto mb-2"
                                />
                                <h3 className="text-lg font-semibold">
                                    {hasMedia.name}
                                </h3>
                            </>
                        )}
                        <p className="text-sm text-gray-600">
                            {currentReview.comment}
                        </p>
                        {hasRating && (
                            <div className="text-sm text-gray-800 mt-2">
                                Rating: {hasRating.score}/{hasRating.max} (
                                {hasRating.normalizedRating})
                            </div>
                        )}
                    </div>
                ) : (
                    <p>No review data available</p>
                )}

                <button
                    onClick={handleNext}
                    className="text-xl text-gray-600 hover:text-gray-800"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
