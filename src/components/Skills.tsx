import "../style/EntryPage.css"
import { skills } from "../data/GeneralData";
import TransitionImage from "./Common/TransitionImage";

const Skills = () => {
  return (
    <div className=" text-[#d4cfcf] lg:px-14">
      <h1 className="text-center text-3xl font-bold mb-8">My Skills</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <TransitionImage _duration={0.5 + (index * 0.1)} key={index}>
            <div
              key={index}
              className="px-4 py-2 box text-[#c4bdbd] rounded-lg shadow-md hover:scale-105 transition-transform text-sm"
            >
              {skill}
            </div>
          </TransitionImage>
        ))}
      </div>
    </div>
  );
};

export default Skills;
