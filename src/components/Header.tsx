import { useState, useEffect } from "react";
import More from "./Common/More";
import { Link } from "react-scroll";
import {
  messageIcon,
} from "../data/HeaderData";
import avatar from '../assets/Icons/avatar.png'
import "../style/EntryPage.css"
import Transition from "./Common/Transition";
import { handledownload } from "../utilities/Helpers/ExternalConnection";
import cv from "../assets/Documents/CV_DavidKeci.pdf"


function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [moreSize, setMoreSize] = useState("medium");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 575) {
        setMoreSize("large");
      } else {
        setMoreSize("medium");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const sections = ["home", "services", "qualification", "projects", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.5, 0.8],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("Observed:", entry.target.id, "Intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          setIsSelected(index);
        }
      });
      
    }, observerOptions);

    sectionElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);




  return (
    <>
      <header
        className={`flex fixed    lg:static z-50 left-4 right-4 sm:left-8 sm:right-8 justify-between items-center transition-all duration-1000 ${scrolledFromTop ? "h-16 drop-shadow-3xl" : "h-20"
          }`}
      >

        <Transition>
          <a href="#" className="w-[30%] lg:w-[10%] flex items-center">
            <img
              src={avatar}
              alt="ChitChat Logo"
              className={`h-[4rem]  text-[#d1cccc] min-w-16 whitespace-nowrap   transform origin-left transition duration-200 ${scrolledFromTop ? "scale-75" : "scale-100"
                }`}
            />
            <p className={`text-white ml-2 md:ml-4 text-[15px] sm:text-[18px]  md:text-[22px] font-bold  items-baseline ${scrolledFromTop ? "ml-[-0.5rem] items" : ""} sm:ml-0 text-[20px] whitespace-nowrap transition-all duration-smoothie ease-smoothie `}>David Keci</p>
          </a>
        </Transition>

        <div className="z-50">
          <Transition>
            <div className="Header flex justify-center align-top h-[30px] z-50  ">
              <nav
                className={`hidden nav:flex lg:fixed lg:text-center lg:justify-center mr-[20px] text-[#dddada] rounded-[50px] text-nowrap transition-all duration-300 ${scrolledFromTop ? "samecolor mt-[-8px] " : "bg-transparent"
                  }`}
              >
                <ul className="flex justify-between align-middle  px-6 font-medium  py-[5px] text-[13px] ">

                  <li
                    className={`mr-16 ${isSelected === 0 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(0)}
                    >
                      HOME
                    </Link>
                  </li>

                  <li
                    className={`mr-16 ${isSelected === 1 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(1)}
                    >
                      SERVICES
                    </Link>
                  </li>

                  <li
                    className={`mr-16 ${isSelected === 2 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="qualification"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(2)}
                    >
                      QUALIFICATION
                    </Link>
                  </li>
                  <li
                    className={`mr-16 ${isSelected === 3 ? "underline" : ""
                      } cursor-pointer hover:underline mt-[3px]`}
                  >
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={300}
                      onClick={() => setIsSelected(3)}
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <ul className="flex cursor-pointer">
                    <li
                      className={`cursor-pointer ${isSelected === 4 ? "underline" : ""
                        } hover:underline mt-[3px] mr-[10px]`}
                    >
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={300}
                        onClick={() => setIsSelected(4)}
                      >
                        CONTACT
                      </Link>
                    </li>
                    <div className="h-[25px] rounded-[50px]  w-[25px] mr-[-15px] bg-white grid items-center justify-center drop-shadow-2xl">
                      {messageIcon}
                    </div>
                  </ul>
                </ul>
              </nav>
            </div>
          </Transition>
        </div>

        <Transition>
          <div className="flex items-center">
            <div onClick={() => {
              handledownload(cv);
            }}
              className=" bg-[#e70735] py-2 px-4 sm:px-6 sm:text-[14px] cursor-pointer font-semibold text-[12px] rounded-full text-white">
              Download CV
            </div>
            <div className="flex nav:hidden text-right cursor-pointer justify-start">
              <More size={moreSize} />
            </div>
          </div>
        </Transition>

      </header>

    </>
  );
}

export default Header;
