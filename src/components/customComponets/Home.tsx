"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { fileType } from "@/types/file";

const techStack = [
  {
    name: "Next Js",
    icon: (
      <SiNextdotjs className="text-black bg-white rounded-full  text-4xl  md:text-6xl" />
    ),
  },
  {
    name: "React",
    icon: <FaReact className="text-[#117eb3]  text-4xl  md:text-6xl" />,
  },

  {
    name: "JavaScript",
    icon: (
      <RiJavascriptFill className="text-yellow-400  text-4xl  md:text-6xl  rounded" />
    ),
  },
  {
    name: "Tailwind ",
    icon: (
      <RiTailwindCssFill className="text-[#00bdff]  text-4xl  md:text-6xl" />
    ),
  },
  {
    name: "Express.js",
    icon: <FaNodeJs className="text-green-400  text-4xl  md:text-6xl" />,
  },
];
const Home = ({
  setOpenFiles,
  setActiveFileName,
}: {
  setOpenFiles: any;
  setActiveFileName: any;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-resume.pdf";
    link.download = "Resume-Abdullah-Qureshi.pdf";
    link.click();
  };

  const openProjects = () => {
    const projectsFile = {
      name: "projects.ts",
      icon: <SiTypescript className="text-yellow-300" />,
    };
    setOpenFiles((prev: fileType[]) => {
      if (!prev.some((file) => file.name === projectsFile.name)) {
        return [...prev, projectsFile];
      }
      return prev;
    });
    setActiveFileName(projectsFile.name);
  };
  return (
    <>
      <section id="home" className="flex-grow flex relative  ">
        {/* Main content */}
        <div className="w-full  mx-auto pt-16 relative">
          <div className="flex flex-col gap-y-4  items-start">
            {/* Text content */}
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl tracking-wide  text-activeColor">
                Abdullah Qureshi
              </h1>
              <span className="block mt-2  text-nowrap text-lg xs:text-xl md:text-4xl  font-SpaceGrotesk  tracking-widest text-subTextColor">
                <Typewriter
                  options={{
                    strings: ["MERN Stack Developer"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    cursorClassName:
                      "text-secondaryColor font-semibold custom-cursor",
                    deleteSpeed: 100,
                  }}
                />
                <style>
                  {`
                    .custom-cursor {
                      animation: blink 1.2s infinite;
                    }
          
                    @keyframes blink {
                      50% { opacity: 0; }
                    }
                  `}
                </style>
              </span>
            </div>

            {/* skills logos */}
            <div className="flex flex-wrap justify-center gap-12  px-4  py-10 md:px-16 text-center text-secondaryColor">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center size-20 md:size-auto "
                >
                  {tech.icon}
                  <p className="mt-2 text-sm md:text-lg font-mono text-nowrap">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => openProjects()}
                className="border-darkgray bg-activeColor border text-darkGray font-medium  hover:text-activeColor hover:bg-darkGray hover:border-lightGray group px-6"
              >
                <span className="group-hover:underline duration-75 transition-all">
                  View Projects
                </span>
                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:scale-105 " />
              </Button>

              <Button
                variant="outline"
                className="border-lightGray bg-darkGray border text-activeColor font-medium  hover:text-darkGray hover:bg-activeColor hover:border-darkGray px-4"
                onClick={handleDownloadCV}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
