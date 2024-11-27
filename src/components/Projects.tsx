import { useState, useEffect } from "react";
import "../style/Portfolio.css"
import "../style/EntryPage.css"
import {
  portfolioItems,
  portofolioCarouselData,
} from "../data/PortofolioData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NomralCarousel from "./Common/Carousel/NormalCarousel";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { openWebsite } from "../utilities/Helpers/ExternalConnection";

function Projects() {
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 item per page
  const totalItems = portfolioItems.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(3); // lg and xl screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // md screens
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // sm screens
      } else {
        setItemsPerPage(1); // default
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemsPerPage); // Cleanup
    };
  }, []);

  const prevSlide = () => {
    const newIndex =
      currentIndex - 1 < 0
        ? Math.ceil(totalItems / itemsPerPage) - 1
        : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex + 1 >= Math.ceil(totalItems / itemsPerPage)
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getPageItems = (index: any) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return portfolioItems.slice(start, end);
  };

  const handleLearnMore = async (id: number) => {
    const data = portofolioCarouselData.find((item: any) => item.id === id);
    if (data) {
      setCarouselImages(data.images);
      setIsCarousel(true);
    } else {
      setCarouselImages([]);
    }
  };

  return (
    <div className="w-full z-0">
      {isCarousel && (
        <div>
          <NomralCarousel images={carouselImages} myFunction={setIsCarousel} />{" "}
          {/* Pass the images state */}
        </div>
      )}
      <div className="flex flex-col items-center text-center z-0">
        <div className="text-[17px] text-[#e70735]">Projects</div>
        <div className="text-[26px] font-semibold text-[#e2dddd]">
          Some of my best work, transforming <br />
          ideas into reality.
        </div>
      </div>
      <div className="px-4 lg:px-0 py-6 mx-auto w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-in-out h-[32rem] relative  duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from(
                { length: Math.ceil(totalItems / itemsPerPage) },
                (_, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-row "
                    style={{ minWidth: `${100 / itemsPerPage}%` }}
                  >
                    {getPageItems(index).map((item: any, itemIndex: number) => (
                      <div
                        key={itemIndex}
                        className="flex-1 bg-transparent  gap-6 rounded-[10px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.15] hover:shadow-lg"
                        style={{ flexBasis: `calc(100% / ${itemsPerPage})` }}
                      >
                        <div className="sm:p-8">
                          <div className=" px-4 me rounded--2xl pt-8 pb-1 rounded-2xl ">
                            <div className="flex justify-center items-center relative">
                              <div className="absolute  h-full bg-gray-500 opacity-5 w-[98%]  rounded-[15px]"></div>
                              <img
                                className="h-[200px] rounded-[15px] shadow-inset w-[98%]  shadow-black"
                                src={item.image}
                                alt=""
                              />
                            </div>
                            <div className="px-2 py-3 font-bold text-[18px] tracking-wide text-[#ebe7e7]">
                              {item.description}
                            </div>
                            <div className="px-2 pb-3 text-[#c7c5cf]">
                              {item.details}
                            </div>
                            <div className="px-2 py-3  bottom-0 mb-6">
                              <button
                                onClick={() => {
                                  if (item.livedemo) {
                                    openWebsite('https://chiefsoft.onrender.com/')
                                  }
                                  else {
                                    handleLearnMore(item.id);
                                  }

                                }}
                                className="px-6 text-[#ebe5e5] bg-[#bb324d] rounded-full py-[0.35rem]  font-extra-bold text-[16px] hover:text-white hover:cursor-pointer hover:bg-[#9e2e45] whitespace-nowrap"
                              >
                                {item.livedemo == true ? "Live demo" : "More info"}
                                <RemoveRedEyeIcon className="ml-3 text-[#dbd2d2]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {getPageItems(index).length < itemsPerPage &&
                      Array.from(
                        { length: itemsPerPage - getPageItems(index).length },
                        (_, i) => (
                          <div
                            key={`empty-${i}`}
                            className="flex-1  flex-shrink-0"
                            style={{
                              flexBasis: `calc(100% / ${itemsPerPage})`,
                            }}
                          ></div>
                        )
                      )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex relative justify-between mt-4 px-2 sm:px-4 md:px-8 lg:px-20">
            <button
              onClick={prevSlide}
              className="text-[#ebe6e6] shadow-black shadow-three  relative samecolor_btn px-4 py-4 rounded-[50px] hover:bg-red-700"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={nextSlide}
              className="text-[#ebe6e6] shadow-black shadow-three  relative samecolor_btn px-4 py-4 rounded-[50px]"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
