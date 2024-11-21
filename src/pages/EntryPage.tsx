import "../style/EntryPage.css"
import Header from "../components/Header";
import WhoAmI from "../components/WhoAmI";
import Services from "../components/Servicess/Services";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Transition from "../components/Common/Transition";

const EntryPage = () => {

    const [scrolledFromTop, setScrolledFromTop] = useState(false);
    const [isWidthLarge, setIsWidthLarge] = useState(false);

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
        const handleResize = () => {
            setIsWidthLarge(window.innerWidth >= 992); // Set threshold width
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div id="home" className='EntryPage relative w-full  px-6 lg:px-24'>
                <div className={`${isWidthLarge ? "hidden" : ""} w-full z-50 h-16  top-0 left-0 fixed px-[-1.5rem] ${scrolledFromTop ? "shadow-black shadow-three header" : ""}`}>
                </div>
                <Header />
                <div className="mt-14 lg:mt-0" >
                    <Transition direction="down">
                        <WhoAmI />
                    </Transition>
                </div>
                <br />
                <br className="hidden md:block" />

                <div id="services">
                    <Transition direction="left">
                        <Services />
                    </Transition>
                </div>
                <div className="hidden smmd:block">
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div id="qualification">
                    <Experience />
                </div>
                <br />
                <br />
                <br />
                <br />
                <div id="projects">
                    <Projects />
                </div>
                <br />
                <br />
                <br />
                <div id="skills">
                    <Skills />
                </div>
                <br id="contact" />
                <br />
                <br />
                <br />
                <div>
                    <Transition direction="down">
                        <Contact />
                    </Transition>
                </div>
                <br />
                <Footer />
                <br />
            </div>
        </>
    );
};

export default EntryPage;
