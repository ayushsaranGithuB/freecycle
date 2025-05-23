"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  const hasMultipleImages = images.length > 1;

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative w-full max-w-md">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full object-cover rounded-lg shadow-md"
          width={280}
          height={210}
        />

        {/* Navigation Buttons */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-l"
            >
              &laquo;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-r"
            >
              &raquo;
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && (
        <div className="flex mt-4 space-x-2">
          {images.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => selectImage(index)}
              className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              width={280}
              height={210}
            />
          ))}
        </div>
      )}
    </div>
  );
}
