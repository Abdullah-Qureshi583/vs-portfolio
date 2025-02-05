import React from "react";
import { VscVscode } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="relative top-0 w-full  ">
      <div className="bg-iconsSidebarBgColor w-full flex justify-center items-center py-1">
        <div className=" absolute left-3 top-1 flex gap-x-6 items-center">
          <VscVscode className="text-sky-500 size-6" />
          <div className="flex gap-2 items-center">
            <div className="h-3 w-3 bg-yellow-200 rounded-full"></div>
            <div className="h-3 w-3 bg-green-300 rounded-full"></div>
            <div className="h-3 w-3 bg-red-400 rounded-full"></div>
          </div>
        </div>
        <div className="md:hidden h-7 w-5 "></div>
        <div className="w-96 hidden md:flex text-center h-6 bg-[#191d23]  border-inActiveColor rounded-sm text-sm text-inActiveText  gap-2 justify-center items-center">
          <FaSearch className="rotate-90" />
          Abdullah Qureshi - Visual Studio Code
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
