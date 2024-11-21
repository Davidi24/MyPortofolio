import SingleService from "./SingleService";
import ServiceData from "../../data/ServicesData";
import Transition from "../Common/Transition";

const Services = () => {
  return (
    <>
      <div className="bg-transparent">
        <section
          id="features"
          className="py-10 sm:py-4 md:py-0 lg:py-26 md:pt-16 lg:pt-16   bg-transparent"
        >
          <div className=" flex justify-center items-center">
            <div className="h-[24px] text-[#e70735]  font-lato font-normale">
              My Services
            </div>
          </div>
          <div className="mt-[-3px]  text-white font-semibold text-[29px] md:text-[30px] lg:text-[40px] flex justify-center items-center">
            <div>What I do </div>
          </div>

          <div className=" mt-[30px]">
            <div className=" grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
              {ServiceData.map((feature, index) => (
                <Transition _duration={0.8 + index * 0.2} key={feature.id}>
                  <SingleService feature={feature} />
                </Transition>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
