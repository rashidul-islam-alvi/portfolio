import React from "react";

import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="mx-5 mb-[30px]">
      <h1 className=" flex justify-center text-center text-[1.5em] md:text-[1.5em] font-[510] mt-[120px] mb-[50px]">
        Contact Me <span className="ml-2 animate-ping"> !</span>
      </h1>

      <div className="flex py-1 border-2 md:py-3 justify-evenly shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
        <div>
          <SiGmail className="text-2xl md:text-[4.5rem] cursor-pointer" />
        </div>
        <div>
          <AiFillLinkedin className="text-2xl md:text-[4.5rem] cursor-pointer" />
        </div>
        <div>
          <FaFacebook className="text-2xl md:text-[4.5rem] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
