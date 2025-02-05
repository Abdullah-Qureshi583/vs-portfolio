import React from "react";
import { User, Code, BookOpen, Target, Trophy } from "lucide-react";
import Image from "next/image";

const PrimaryHeadig = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-xl xs:text-2xl  font-semibold mb-4 flex items-center">
      {children}
    </h2>
  );
};

const SecondaryHeadig = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg md:text-xl font-medium text-activeColor mb-2">
      {children}
    </h3>
  );
};

const About = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Express.js",
  ];

  const learningGoals = [
    {
      title: "Deepening Next.js Expertise",
      description:
        "Enhance my skills in Next.js by building advanced projects and mastering full-stack development.",
    },
    {
      title: "Mastering Python",
      description:
        "Learn Python for backend development, automation, and data-related applications.",
    },
    {
      title: "Exploring Web 3.0",
      description:
        "Understand blockchain, smart contracts, and decentralized applications as my next step.",
    },
  ];

  const onlineCourses = [
    {
      platform: "freeCodeCamp",
      focus: "Responsive Web Design",
      status: "Completed",
    },
    {
      platform: "Udemy",
      focus: "React & Next.js Bootcamp",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen  py-12 ">
      <div className="max-w-4xl mx-auto">
        {/* top upper part about me and skills */}
        <div className="  mb-12">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <Image
              src="/profile-pic.jpg"
              alt="Profile Image"
              width={300}
              height={300}
              className="w-48 h-48 rounded-full -backdrop-hue-rotate-60 object-cover mb-6 md:mb-0 md:mr-8 border-4 border-gray-700"
            />
            {/* image and name  */}
            <div>
              <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-2">
                Abdullah Qureshi
              </h1>
              <p className="  md:text-xl text-inActiveText mb-4">
                Web Application Developer | Expertise in Next.js, React &
                JavaScript | Exploring Web 3.0 & Python.
              </p>

              <div className="flex space-x-4">
                <span className="text-blue-400 hover:text-blue-300">
                  <Code size={24} />
                </span>
                <span className="text-blue-400 hover:text-blue-300">
                  <BookOpen size={24} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <PrimaryHeadig>
                <User className="mr-2" /> About My Journey
              </PrimaryHeadig>

              <p className="text-subTextColor text-start mb-4">
                Driven by a deep passion for technology, I have immersed myself
                in the world of programming and AI, transforming my curiosity
                into practical coding skills. My journey is fueled by a
                commitment to continuous learning and a desire to create
                innovative solutions that address real-world challenges. Whether
                it&apos;s building projects, exploring new technologies, or
                collaborating with like-minded individuals, I am dedicated to
                pushing the boundaries of what&apos;s possible.
              </p>
            </div>

            <div>
              <PrimaryHeadig>
                <Code className="mr-2" /> Skills
              </PrimaryHeadig>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-subTextColor px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* learning Goals */}
        <div className=" ">
          <PrimaryHeadig>
            <Target className="mr-2" /> Learning Goals
          </PrimaryHeadig>
          {learningGoals.map((goal, index) => (
            <div
              key={index}
              className="mb-6 pb-6 border-b border-gray-700 last:border-b-0"
            >
              <SecondaryHeadig>{goal.title}</SecondaryHeadig>
              <p className="text-subTextColor mb-2">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
