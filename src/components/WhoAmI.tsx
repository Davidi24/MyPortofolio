import me from "../assets/Icons/me.png";
import "../style/EntryPage.css"
import { icons } from "../data/IconData";
import { personalInfo } from "../data/GeneralData";


function WhoAmI() {
    return (
        <div className="sm:flex w-full mt-16 lg:mt-10">
            <div className="relative w-full lgxl:w-[60%] lg:w-[65%]  p-4 text-white">

                <div className="flex text-[25px] lg:text-[31px] mt-6 font-michroma items-baseline tracking-wider sm:tracking-normal justify-center sm:justify-start whitespace-nowrap">
                    <p>Hello,</p>
                    <p className="text-[#e70735] ml-2"> I am</p>
                    <p className="font-bold ml-2  text-[27px] lg:text-[38px]">{personalInfo.full_name}</p>
                </div>

                <div className="w-full flex  items-center justify-center sm:justify-start tracking-wider sm:tracking-normal">
                    <p className="font-michroma  text-[22px] lg:text-[26px] md:text-[24px] mt-[-6px]">{personalInfo.profession}</p>
                </div>

                {/* Image when small */}
                <div className="flex items-center justify-center relative sm:hidden  w-full  mt-5">
                    <div className="absolute w-[85%] xssm:w-[60%] flex items-center justify-center me  h-[13.5rem] bottom-0"></div>
                    <img src={me} alt="" className="h-[18rem] relative " />
                </div>


                <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start mt-10 sm:mt-6  font-michroma ">
                    <p className="text-[19px] text-[#e4e0e0]">About me</p>
                    <p className="text-center sm:text-start text-gray-400 mt-1 text-[13px]  md:text-[14px]">
                        {personalInfo.abautMe}
                    </p>
                </div>


                <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start">
                    <p className="mt-12 font-michroma text-[18px] text-[#e6dede]">Find or contact me in </p>
                    <div className="flex gap-6 mt-2">
                        {icons.map((icon, index) => (
                            <div onClick={icon.onClick} key={index} className="h-12 w-12 box flex items-center cursor-pointer ">
                                <img src={icon.src} alt={icon.alt} className="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[2px] line w-[90%] md:w-[90%] absolute bottom-0"></div>

            </div>

            {/* Image when large  */}
            <div className=" w-[70%] lgxl:w-[40%] lg:w-[35%]  relative   h-[28rem] mt-[-4rem] sm:mt-0 md:ml-[4rem] left-4   hidden sm:flex">
                <div className="absolute   w-[90%] lg:w-full lgxl:w-[85%] xl:w-[72%] max-w-[20rem] sm:top-44 lg:top-32 bottom-0 sm:bottom-6 lg:bottom-0 me z-0"></div>
                <img src={me} alt="" className="h-[20rem]  sm:h-[22rem] lg:h-[28rem] absolute left-0 bottom-6  lg:bottom-0 z-10" />
            </div>



        </div>
    )
}

export default WhoAmI