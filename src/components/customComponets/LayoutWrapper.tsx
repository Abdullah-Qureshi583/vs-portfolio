"use client";
import React, { useEffect, useState } from "react";
import IconsSidebar from "@/components/customComponets/IconsSidebar";
import ExplorerSidebar from "./ExplorerSidebar";
import TopHeader from "./TopHeader";
import FilesHeader from "./FilesHeader";
import { fileType } from "@/types/file";

import { FaReact, FaHtml5, FaMarkdown } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
const allFiles: fileType[] = [
  {
    name: "home.tsx",

    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "about.html",

    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "resume.json",

    icon: <VscJson className="text-yellow-400" />,
  },
  {
    name: "projects.ts",

    icon: <SiTypescript className="text-yellow-300" />,
  },
  {
    name: "github.md",

    icon: <FaMarkdown className="text-blue-300" />,
  },
];

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState(allFiles);
  const [activeFileName, setActiveFileName] = useState("home.tsx");
  const [isExplorerOpen, setIsExplorerOpen] = useState<boolean>(true);
  const [openFiles, setOpenFiles] = useState<fileType[]>([
    {
      name: "home.tsx",
      icon: <FaReact className="text-blue-400" />,
    },
    {
      name: "about.html",
      icon: <FaHtml5 className="text-orange-500" />,
    },
  ]);

  // if all the files are close so open home again
  useEffect(() => {
    if (openFiles.length === 0) {
      setActiveFileName("home.tsx");
      setOpenFiles([
        {
          name: "home.tsx",
          icon: <FaReact className="text-blue-400" />,
        },
      ]);
    }
  }, [openFiles]);

  // set the explorer open or close according to device width
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsExplorerOpen(true);
    }
  }, []);

  return (
    <div className="overflow-hidden font-sora  flex flex-col min-h-screen max-h-screen bg-iconsSidebarBgColor text-activeColor">
      <TopHeader />
      <div className="flex flex-grow w-full h-full overflow-hidden">
        <IconsSidebar
          isExplorerOpen={isExplorerOpen}
          setIsExplorerOpen={setIsExplorerOpen}
          files={files}
          setOpenFiles={setOpenFiles}
          setActiveFileName={setActiveFileName}
          activeFileName={activeFileName}
        />

        {isExplorerOpen && (
          <div className="hidden md:flex">
            <ExplorerSidebar
              files={files}
              setOpenFiles={setOpenFiles}
              setActiveFileName={setActiveFileName}
              activeFileName={activeFileName}
              isMobileView={false}
              isDesktopView={true}
            />
          </div>
        )}

        {/* Main content area */}
        <div className="flex-grow flex flex-col">
          {/* Fixed FilesHeader at the top */}
          <div className="shrink-0">
            <FilesHeader
              openFiles={openFiles}
              setOpenFiles={setOpenFiles}
              setActiveFileName={setActiveFileName}
              activeFileName={activeFileName}
            />
          </div>

          {/* Scrollable content */}
          <div className="flex-grow overflow-y-auto  px-4 sm:px-6 lg:px-8 ">
            {activeFileName.split(".")[0] === "home" ? (
              <Home
                setOpenFiles={setOpenFiles}
                setActiveFileName={setActiveFileName}
              />
            ) : activeFileName.split(".")[0] === "about" ? (
              <About />
            ) : activeFileName.split(".")[0] === "projects" ? (
              <Projects />
            ) : activeFileName.split(".")[0] === "resume" ? (
              <Resume />
            ) : (
              // <Projects />
              // ) : activeFileName === "contact.tsx" ? (
              //   <About />
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;

{
  /* {children} */
}
