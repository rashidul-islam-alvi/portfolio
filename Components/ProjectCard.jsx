import React from "react";

import { VscLiveShare } from "react-icons/vsc";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectCard = () => {
  const tools = ["HTML5", "CSS3", "Tailwind", "JavaScript", "ES6", "NextJs"];
  return (
    <div className="mt-10">
      <div className="px-3 py-4 md:p-8  md:flex shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
        <div className=" hidden bg-[#747fe0] flex-1 md:block"></div>
        <div className="flex-1 ml-8">
          <h1 className="mb-10 text-[1.5rem]">Project Title</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo
            inventore tempore dignissimos, dolorum accusantium sit sapiente
            magni ab consectetur et. Quidem, ad? Voluptatem nostrum dicta fugiat
            veniam adipisci eum, voluptatum, vel nihil, modi temporibus
            obcaecati quae expedita cumque esse!
          </p>

          <div className="flex flex-wrap">
            {tools?.map((tool) => (
              <span className="px-2 py-1 mr-2 mb-2 border-2 border-[#92eac0] rounded-md ">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <button className=" shadow-[0px_0px_3px_rgba(3,102,214,0.3)] flex items-center bg-[#747fe0] text-white px-[14px] py-[10px] cursor-pointer rounded-md  mb-3">
              Live Demo
              <VscLiveShare className="ml-2 text-lg text-white " />
            </button>
            <button className="shadow-[0px_0px_3px_rgba(3,102,214,0.3)] flex items-center bg-white text-[#747fe0] px-[14px] py-[10px] cursor-pointer rounded-md border-[#747fe0]">
              <AiOutlineGithub className="mr-2 text-[#747fe0] text-lg " />
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
