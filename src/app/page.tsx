"use client";
import React, { useEffect, useState } from "react";
import IconsSidebar from "@/components/customComponets/IconsSidebar";
import ExplorerSidebar from "@/components/customComponets/ExplorerSidebar";
import TopHeader from "@/components/customComponets/TopHeader";
import FilesHeader from "@/components/customComponets/FilesHeader";
import { fileType } from "@/types/file";

import { FaReact, FaHtml5, FaMarkdown } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import Home from "@/components/customComponets/Home";
import About from "@/components/customComponets/About";
import Projects from "@/components/customComponets/Projects";
import Resume from "@/components/customComponets/Resume";
import Github from "@/components/customComponets/Github";
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

const HomePage = () => {
  const [files, setFiles] = useState(allFiles);
  const [activeFileName, setActiveFileName] = useState("home.tsx");
  const [isExplorerOpen, setIsExplorerOpen] = useState<boolean>(true);
  const [openFiles, setOpenFiles] = useState<fileType[]>([
    {
      name: "home.tsx",

      icon: <FaReact className="text-blue-400" />,
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
        <div className="flex-grow flex flex-col  relative">
          {/* Fixed FilesHeader at the top */}
          <div className="shrink-0 h-[35px] absolute top-0 w-full">
            <FilesHeader
              openFiles={openFiles}
              setOpenFiles={setOpenFiles}
              setActiveFileName={setActiveFileName}
              activeFileName={activeFileName}
            />
          </div>

          {/* Scrollable content */}
          <div className=" mt-[35px] flex-grow overflow-y-auto px-3 sm:px-5  lg:px-8">
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
            ) : activeFileName.split(".")[0] === "github" ? (
              <Github />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
