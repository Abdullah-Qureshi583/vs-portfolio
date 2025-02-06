"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
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
import { IoIosColorPalette } from "react-icons/io";

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
  setOpenFiles: (
    files: fileType[] | ((prev: fileType[]) => fileType[])
  ) => void;
  setActiveFileName: (fileName: string) => void;
  activeFileName: string;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>("explorer");
  const [isExplorerSheet, setIsExplorerSheet] = useState(false);

  const handleClick = (id: string) => {
    if (id === "explorer") {
      if (window.innerWidth > 768) {
        setIsExplorerOpen((prev: boolean) => !prev);
      } else {
        setIsExplorerSheet(true);
      }
      setActiveId(isExplorerOpen ? "" : "explorer");
    } else if (id == "setting") {
      const themeFile = {
        name: "theme.mjx",
        icon: <IoIosColorPalette className="text-teal-500" />,
      };
      setOpenFiles((prev: fileType[]) => {
        if (!prev.some((file) => file.name === themeFile.name)) {
          return [...prev, themeFile];
        }
        return prev;
      });
      setActiveFileName(themeFile.name);
      setActiveId("setting");
      if (isExplorerOpen) {
        setIsExplorerOpen(false);
      }
    } else {
      setActiveId(id);
      if (isExplorerOpen) {
        setIsExplorerOpen(false);
      }
    }
  };

  const icons = [
    {
      id: "explorer",
      name: "Explorer",
      icon: <FaRegCopy className="size-6" />,
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: <FaTwitter className="size-6" />,
      link: "#",
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub className="size-6" />,
      link: "#",
    },

    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <FaLinkedin className="size-6" />,
      link: "#",
    },

    {
      id: "email",
      name: "Email",
      icon: <FaEnvelope className="size-6" />,
      link: "mailto:mabdullahqureshi583+portfolio@gmail.com",
    },
  ];

  const bottomIcons = [
    {
      id: "profile",
      name: "Profile",
      icon: <FaUser className="size-6" />,
      link: "#",
    },
    {
      id: "setting",
      name: "Settings",
      icon: <FaCog className="size-6" />,
      link: "#",
    },
  ];

  const renderIcons = (items: typeof icons) => (
    <div className="flex flex-col items-start gap-y-1 max-w-[100vh]  ">
      {items.map((item) => (
        <Link key={item.id} href={item.link || "#"}>
          <div
            className={`relative flex items-center justify-center w-14 h-14 rounded-r-sm transition duration-300 cursor-pointer
              ${
                activeId === item.id
                  ? "bg-activeTabColor border-l-[3px] border-activeLineColor rounded-none rounded-r-sm text-subTextColor"
                  : "text-lightGray"
              }
              ${
                hovered === item.id && activeId !== item.id
                  ? "hover:bg-activeTabColor hover:text-subTextColor"
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
              <span className="hidden md:block fixed left-14 px-2 py-1 bg-iconsSidebarBgColor z-50 text-subTextColor text-sm rounded-md shadow-lg whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className=" bg-iconsSidebarBgColor flex flex-col justify-between py-1 pb-4 md:overflow-y- ">
      <Sheet
        open={isExplorerSheet}
        onOpenChange={(open) => {
          setIsExplorerSheet(open);
          setActiveId("");
        }}
      >
        <SheetContent className=" flex overflow-y-auto p-0 border-darkGray">
          <SheetClose className="absolute z-10 right-4 top-4 text-subTextColor">
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
