import { ServiceType } from "../../types/serviceType";
import "../../style/EntryPage.css";

const SingleService = ({ feature }: { feature: ServiceType }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div
      className="w-full p-[20px] pl-[29px] rounded-[10px] shadow-black shadow-three bigbox cursor-pointer hover:bg-[#181818] transform transition-all duration-300 hover:scale-110"
    >
      <div className="relative">
        <div className="mb-[5px] mt-[10px] flex h-[70px] w-[70px] items-center justify-center rounded-md bg-transparent bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3
          className="ml-[2px] mb-[7px] text-xl font-semibold text-white sm:text-2xl lg:text-xl xl:text-xxl"
        >
          {title}
        </h3>
        <p className="pr-[10px] text-gray-400 text-base font-michroma leading-relaxed text-[12.3px]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
