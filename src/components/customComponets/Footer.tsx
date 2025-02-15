import React from "react";
import { LiaPuzzlePieceSolid } from "react-icons/lia";

import { IoCheckmarkDone } from "react-icons/io5";

import { FaCampground, FaCodeBranch } from "react-icons/fa";
const extensions = [
  {
    name: "pieces",
    icon: <LiaPuzzlePieceSolid className="text-subTextColor" />,
  },
  {
    name: "tabnine",
    icon: <FaCampground className="text-subTextColor" />,
  },
  {
    name: "Prittier",
    icon: <IoCheckmarkDone className="text-subTextColor" />,
  },
];
const Footer = () => {
  return (
    <div className="bg-topHeaderBgColor w-full flex justify-between items-center px-2 py-0.5 text-xs ">
      <div className="">
        <a
          href="https://github.com/Abdullah-Qureshi583/vs-portfolio"
          target="_blank"
          className="flex gap-1 items-center text-subTextColor"
        >
          <FaCodeBranch className="text-subTextColor size-3" />
          <span>main*</span>
        </a>
      </div>
      <div className="flex gap-4 items-center">
        {extensions.map((extension, index) => (
          <div key={index} className="flex gap-1 text-subTextColor">
            {extension.icon}
            <span>{extension.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
