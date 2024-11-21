import "../style/EntryPage.css"
import Header from "../components/Header";
import WhoAmI from "../components/WhoAmI";
import Services from "../components/Servicess/Services";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Portofolio";
import Skills from "../components/Skills";

const EntryPage = () => {
    return (
        <div className='EntryPage w-full  px-6 lg:px-24'>
            <Header />
            <div className="mt-14 lg:mt-0">
                <WhoAmI />
            </div>
            <br />
            <br />

            <div>
                <Services />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Experience />

            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Portfolio />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <Skills />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Contact />
            </div>
            <br />
            <br />


        </div>
    );
};

export default EntryPage;
