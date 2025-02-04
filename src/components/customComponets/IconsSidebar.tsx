"use client";

import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaEnvelope,
  FaCog,
  FaUser,
  FaRegCopy,
} from "react-icons/fa";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import ExplorerSidebar from "./ExplorerSidebar";
import { fileType } from "@/types/file";
import { RxCross2 } from "react-icons/rx";

const IconsSidebar = ({
  isExplorerOpen,
  setIsExplorerOpen,
  files,
  setOpenFiles,
  setActiveFileName,
  activeFileName,
}: {
  isExplorerOpen: boolean;
  setIsExplorerOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;

  files: fileType[];
  setOpenFiles: (files: fileType[]) => void;
  setActiveFileName: (fileName: string) => void;
  activeFileName: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number>(1);
  const [isExplorerSheet, setIsExplorerSheet] = useState(false);

  const handleClick = (id: number) => {
    if (id === 1) {
      if (window.innerWidth > 768) {
        setIsExplorerOpen((prev: boolean) => !prev);
      } else {
        setIsExplorerSheet(true);
      }
      setActiveId(isExplorerOpen ? 0 : 1);
    } else {
      setActiveId(id);
      if (isExplorerOpen) {
        setIsExplorerOpen(false);
      }
    }
  };

  const icons = [
    { id: 1, name: "Explorer", icon: <FaRegCopy className="size-6" /> },
    {
      id: 2,
      name: "Twitter",
      icon: <FaTwitter className="size-6" />,
      link: "#",
    },
    { id: 3, name: "GitHub", icon: <FaGithub className="size-6" />, link: "#" },

    {
      id: 5,
      name: "LinkedIn",
      icon: <FaLinkedin className="size-6" />,
      link: "#",
    },

    {
      id: 7,
      name: "Email",
      icon: <FaEnvelope className="size-6" />,
      link: "mailto:mabdullahqureshi583+portfolio@gmail.com",
    },
  ];

  const bottomIcons = [
    { id: 8, name: "Profile", icon: <FaUser className="size-6" />, link: "#" },
    { id: 9, name: "Settings", icon: <FaCog className="size-6" />, link: "#" },
  ];

  const renderIcons = (items: typeof icons) => (
    <div className="flex flex-col items-start gap-y-1">
      {items.map((item) => (
        <Link key={item.id}  href={item.link || "#"}>
          <div
            className={`relative flex items-center justify-center w-14 h-14 rounded-r-sm transition duration-300 cursor-pointer
              ${
                activeId === item.id
                  ? "bg-gray-700 border-l-[3px] border-activeLineColor rounded-none rounded-r-sm text-activeColor"
                  : "text-inActiveColor"
              }
              ${
                hovered === item.id && activeId !== item.id
                  ? "hover:bg-gray-700 hover:text-activeColor"
                  : ""
              }`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            {item.icon}
            {hovered === item.id && (
              <span className="hidden md:block absolute left-14 px-2 py-1 bg-gray-800 z-50 text-activeColor text-sm rounded-md shadow-lg whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="  w-16 bg-iconsSidebarBgColor flex flex-col justify-between py-1 pb-4  ">
      <Sheet
        open={isExplorerSheet}
        onOpenChange={(open) => {
          setIsExplorerSheet(open);
          setActiveId(0);
        }}
      >
        <SheetContent className=" flex overflow-y-auto p-0 border-black">
          <SheetClose className="absolute z-10 right-4 top-4 text-white hover:text-gray-300">
            <RxCross2 className="h-6 w-6" />
          </SheetClose>
          <ExplorerSidebar
            setIsExplorerSheet={setIsExplorerSheet}
            isMobileView={true}
            isDesktopView={false}
            files={files}
            setOpenFiles={setOpenFiles}
            setActiveFileName={setActiveFileName}
            activeFileName={activeFileName}
          />
        </SheetContent>
      </Sheet>

      {/* Top Icons */}
      {renderIcons(icons)}

      {/* Bottom Icons */}
      {renderIcons(bottomIcons)}
    </div>
  );
};

export default IconsSidebar;
