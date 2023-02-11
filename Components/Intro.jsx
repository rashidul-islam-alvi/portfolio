import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Intro = () => {
  return (
    <div className="px-5 mt-[130px]">
      <h1 className="text-[2.1rem] text-[#747FE0] md:text-[4.5rem] flex items-center">
        <BiChevronRight /> Md. Rashidul Islam
      </h1>
      <p className="my-[50px] text-[#525f7f] text-[1.2rem] md:text-[1.3rem]">
        I am a web developer with JavaScript frameworks problem-solving skills
        and my passion is building simple, beautiful user experiences. <br />
        Check out my{" "}
        <b className="text-[#747FE0] cursor-pointer capitalize">projects.</b>
      </p>
    </div>
  );
};

export default Intro;
