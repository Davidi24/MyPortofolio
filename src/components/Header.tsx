import { useState, useEffect } from "react";
import More from "./Common/More";
import { Link } from "react-scroll";
import {
  messageIcon,
} from "../data/HeaderData";
import avatar from '../assets/Icons/avatar.png'
import "../style/EntryPage.css"


function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [moreSize, setMoreSize] = useState("medium");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
    };

    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth < 992) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Initial check
    if (windowWidth < 992) {
      handleScroll(); // Check scroll position initially if width < 992
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

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
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
        className={`flex fixed lg:static z-50 left-4 right-4 sm:left-8 sm:right-8 justify-between items-center transition-all duration-1000 ${scrolledFromTop ? "h-16 drop-shadow-3xl" : "h-20"
          }`}
      >
        <a href="#" className="w-[30%] lg:w-[10%]  flex items-center">
          <img
            src={avatar}
            alt="ChitChat Logo"
            className={`h-[4.5rem] min-w-16 whitespace-nowrap   transform origin-left transition duration-200 ${scrolledFromTop ? "scale-75" : "scale-100"
              }`}
          />
          <p className="text-white font-bold  text-[20px] whitespace-nowrap">David Keci</p>
        </a>



        <div className="Header flex justify-center align-top h-[30px] z-50 ">
          {" "}
          <nav className="  hidden lg:flex lg:fixed lg:text-center lg:justify-center mr-[20px] text-[#dddada] rounded-[50px] text-nowrap">
            <ul className="flex justify-between align-middle  px-6 font-thin py-[5px] text-[13px] ">
              <li
                className={`mr-16 ${isSelected === 0 ? "underline" : ""
                  }  cursor-pointer hover:underline mt-[3px]`}
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
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(1)}
                >
                  ABOUT
                </Link>
              </li>
              <li
                className={`mr-16 ${isSelected === 2 ? "underline" : ""
                  } cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(2)}
                >
                  SERVICES
                </Link>
              </li>
              <li
                className={`mr-16 ${isSelected === 3 ? "underline" : ""
                  } cursor-pointer hover:underline mt-[3px]`}
              >
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsSelected(3)}
                >
                  PORTFOLIO
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


        <div className="flex items-center">
          <div className=" bg-[#e70735] py-2 px-6 rounded-full text-white">
            Download CV
          </div>
          <div className="flex lg:hidden text-right cursor-pointer justify-start">
            <More size={moreSize} />
          </div>
        </div>

      </header>

    </>
  );
}

export default Header;
