import React, { useState, useRef, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

interface CarouselProps {
  images: string[];
  myFunction?: (open: boolean) => void; // Function prop is optional and takes a boolean
}

const NomralCarousel: React.FC<CarouselProps> = ({
  images,
  myFunction,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      carouselRef.current &&
      !carouselRef.current.contains(event.target as Node)
    ) {
      if (myFunction) myFunction(false); // Call the function if it's provided
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div
        ref={carouselRef}
        className="relative mt-[-5rem] w-[95%] h-[14rem] xssm:w-[85%] sm:w-[75%] sm:h-[16rem] md:w-[85%] md:h-[21rem] lg:w-[75%] lg:h-[24rem] 2xl:w-[60%] max-w-[80rem]"
      >
        <div
          className="flex justify-center mb-8"
          onClick={() => {
            setIsOpen(false);
            if (myFunction) myFunction(false); // Call the function if it's provided
          }}
        >
          <div
            className="top-[-2.5rem] right-[10rem] bg-gray-900 h-12 w-12 flex justify-center items-center rounded-full text-white cursor-pointer hover:bg-gray-950 active:bg-black focus:bg-gray-900"
            onClick={() => {
              setIsOpen(false);
              if (myFunction) myFunction(false); // Call the function if it's provided
            }}
          >
            <CloseIcon />
          </div>
        </div>

        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
            <button
              onClick={prevSlide}
              className="h-10 w-10 rounded-full ml-1 flex justify-center text-white bg-gray-800 items-center bg-opacity-50"
            >
              <ArrowBackIosIcon className="ml-2" />
            </button>
          </div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index + 1}`}
              className={`absolute w-full h-full object-fill transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
            <button
              onClick={nextSlide}
              className="text-white bg-gray-800 flex justify-center items-center bg-opacity-50 mr-1 rounded-full h-10 w-10 focus:bg-gray-800 focus:bg-opacity-50"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomralCarousel;
