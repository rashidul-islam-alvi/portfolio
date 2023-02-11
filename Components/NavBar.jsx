import React from "react";

const NavBar = () => {
  return (
    <div className="mx-[60px] h-[56px] flex items-end">
      <ul className="text-[#5a5d7a] text-lg md:text-2xl flex justify-between w-full md:justify-end  ">
        <li className="hover:text-[#747FE0] cursor-pointer md:ml-10">
          Projects
        </li>
        <li className="hover:text-[#747FE0] cursor-pointer md:ml-10">Resume</li>
        <li className="hover:text-[#747FE0] cursor-pointer md:ml-10">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
