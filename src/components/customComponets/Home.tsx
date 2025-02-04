// https://sarcastic-geek.netlify.app/
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiRust,
  SiTypescript,
} from "react-icons/si";
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
      <section id="home" className="flex-grow flex   relative  ">
        {/* Main content */}
        <div className="w-full  mx-auto pt-16 relative">
          <div className="flex flex-col gap-y-4  items-start">
            {/* Text content */}
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl tracking-wide  text-activeColor">
                Abdullah Qureshi
              </h1>
              <span className="block mt-2  text-nowrap text-lg xs:text-xl md:text-4xl  font-SpaceGrotesk  tracking-widest ">
                <Typewriter
                  options={{
                    strings: ["MERN Stack Developer"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    cursorClassName:
                      "text-textYellow font-semibold custom-cursor",
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
            <div className="flex flex-wrap justify-center gap-12  px-4  py-10 md:px-16 text-center text-textYellow">
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
                className="bg-inActiveColor/30 text-white hover:bg-transparent group hover:text-textYellow px-6"
              >
                <span className="group-hover:underline duration-75 transition-all">
                  View Projects
                </span>
                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:scale-105 group-hover:-translate-y-1" />
              </Button>

              <Button
                variant="outline"
                className="border-gray-700 text-gray-600 font-semibold bg-zinc-200 hover:text-zinc-200 hover:bg-gray-600"
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
