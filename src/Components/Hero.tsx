import { useState, useEffect } from "react";

const images = [
  "public/images/image-2.png",
  "public/images/image-3.png",
  "public/images/image-2.png",
  "public/images/image-3.png",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-2 overflow-hidden w-full h-[30vh] sm:h-[18vh] md:h-[30vh] lg:h-[80vh]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Image ${index + 1} of ${images.length}`}
          />
        ))}
      </div>
    </div>
  );
}
