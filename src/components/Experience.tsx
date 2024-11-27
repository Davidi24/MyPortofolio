import "../style/EntryPage.css";
import { educationInfo, workInfo } from "../data/GeneralData";
import Transition from "./Common/Transition";

function Experience() {
    return (
        <>
            <div className="w-full flex flex-col items-center py-8">
                <div className="text-[#e70735] font-lato">Years of experience</div>
                <div className="text-[35px] text-[#e6e3e3] font-semibold">My Qualification</div>
            </div>

            <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-24">
                {/* Job Experience Section */}
                <Transition className="w-full min-w-0">
                    <div className="box shadow-black shadow-three p-8 transform transition-all duration-300 hover:scale-105">
                        <div className="font-lato text-[24px] text-[#e6e3e3]">Job Experience</div>
                        {workInfo.map((item, index) => (
                            <div className="flex" key={index}>
                                <div className="flex flex-col justify-center items-center mt-3">
                                    {item.logo}
                                    <div className="mt-3 w-[3px] h-36 bg-[#131212]"></div>
                                </div>
                                <div className="py-4 pl-8 lg:px-6 font-lato">
                                    <p className="text-[17px] lg:whitespace-nowrap text-gray-200 md:text-[22px]">
                                        {item.title}
                                    </p>
                                    <div className="flex flex-col sm:flex-row text-[11px] md:text-[13px] lgxl:text-[14px] lg:whitespace-nowrap xl:flex-row text-[#6f7279]">
                                        <p>{item.company}</p>
                                        <p className="md:ml-2 lgxl:ml-0 xl:ml-2">({item.year})</p>
                                    </div>
                                    <p className="mt-4 sm:text-[13px] w-full smmd:text-[14px] md:text-[15px] text-gray-400 text-base font-michroma leading-relaxed text-[0.9rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Transition>

                {/* Education Quality Section */}
                <Transition direction="right" className="w-full min-w-0">
                    <div className="box shadow-black shadow-three p-8 transform transition-all duration-300 hover:scale-105">
                        <div className="font-lato text-[24px] text-[#e6e3e3]">Education</div>
                        {educationInfo.map((item, index) => (
                            <div className="flex" key={index}>
                                <div className="flex flex-col justify-center items-center mt-3">
                                    {item.logo}
                                    <div className="mt-3 w-[3px] h-36 bg-[#131212]"></div>
                                </div>
                                <div className="py-4 pl-8 lg:px-6 font-lato">
                                    <p className="text-[17px] lg:whitespace-nowrap text-gray-200 md:text-[22px]">
                                        {item.title}
                                    </p>
                                    <div className="flex flex-col sm:flex-row text-[11px] md:text-[13px] lgxl:text-[14px] xl:flex-row text-[#6f7279]">
                                        <p>{item.school}</p>
                                        <p className="md:ml-2 lgxl:ml-0 xl:ml-2">({item.year})</p>
                                    </div>
                                    <p className="mt-4 sm:text-[13px] w-full smmd:text-[14px] md:text-[15px] text-gray-400 text-base font-michroma leading-relaxed text-[0.9rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Transition>
            </div>
        </>
    );
}

export default Experience;
