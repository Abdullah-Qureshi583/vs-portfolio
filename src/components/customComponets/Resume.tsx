import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const PrimaryHeading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-xl font-medium font-serif border-b border-lightGray text-activeColor pb-2 mb-4">
      {children}
    </h2>
  );
};

const SecondaryHeading: React.FC<HeadingProps> = ({ children }) => {
  return <h3 className="font-medium text-activeColor">{children}</h3>;
};

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface CourseItem {
  title: string;
  institution: string;
  duration: string;
}

interface ProjectItem {
  title: string;
  link: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    institution: "D. J. Sindh Government Science College",
    degree: "Intermediate Computer Science",
    duration: "2024 - 2026",
  },
  {
    institution: "Pakistan NATIONAL ACADEMY, Karachi.",
    degree: "Matric from Computer Science (84%)",
    duration: "2022 - 2024",
  },
];

const coursesData: CourseItem[] = [
  {
    title: "CERTIFIED IN CLOUD GENAI, WEB3, AND METAVERSE",
    institution: "Governor House",
    duration: "2024 - 2026",
  },
  {
    title: "PYTHON PROGRAMMING",
    institution: "NED University",
    duration: "1/2025 - 3/2025",
  },
];

const projectsData: ProjectItem[] = [
  {
    title: "E-COMMERCE WEBSITE",
    link: "https://deku-marketplace-builder.vercel.app",
    description:
      "A fully functional e-commerce platform built with Next.js and Sanity. Key functionalities include product filtering, add-to-cart, checkout, and Stripe payment integration. Ensured a seamless user experience with a responsive UI using Tailwind CSS and deployed on Vercel.",
  },
  {
    title: "URL SHORTENER (MERN STACK)",
    link: "https://mega-shortener.vercel.app",
    description:
      "Developed SnapPin, a full-stack URL shortener using Next.js with NextAuth for secure authentication. Designed with Tailwind CSS for a responsive UI, it features custom short URLs, click analytics, and a user dashboard to manage URLs. Deployed on Vercel.",
  },
];

const skillsData: string[] = [
  "Next.js",
  "React",
  "Tailwind",
  "HTML",
  "CSS",
  "JavaScript",
];

const Resume: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl p-3 md:p-8 text-subTextColor rounded-md">
      {/* Header Section */}
      <header className="border-b border-lightGray pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl text-activeColor md:text-3xl font-serif md:underline decoration-lightGray">
              ABDULLAH QURESHI
            </h1>
            <p className="text-subTextColor">Front-End Developer</p>
          </div>
          <div className="space-y-1 text-sm text-subTextColor">
            <p className="flex items-center gap-2">
              <span>0324328965</span>
            </p>
            <p className="flex items-center gap-2">
              <span>mahdullahqureshi58@gmail.com</span>
            </p>
            <p>
              <a
                href="https://aq--portfolio.vercel.app/"
                className="hover:text-subTextColor hover:underline"
              >
                https://aq--portfolio.vercel.app/
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="mt-6">
        <PrimaryHeading>ABOUT ME</PrimaryHeading>
        <p className="text-sm leading-relaxed text-subTextColor">
          Aspiring full-stack web developer specializing in Next.js, React, and
          modern web technologies. Skilled in JavaScript, TypeScript, and
          Tailwind CSS, with a strong passion for Generative AI, Web 3.0, and
          the Metaverse. Always eager to learn, collaborate on innovative
          projects, and contribute to cutting-edge tech solutions.
        </p>
      </section>

      {/* Main Content */}
      <div className="mt-6 grid md:grid-cols-2 gap-8 ">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Education */}
          <section>
            <PrimaryHeading>EDUCATION</PrimaryHeading>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <div key={index}>
                  <SecondaryHeading>{item.institution}</SecondaryHeading>
                  <p className="text-sm text-subTextColor">{item.degree}</p>
                  <p className="text-sm text-lightGray">{item.duration}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enrolled Courses */}
          <section>
            <PrimaryHeading>ENROLLED COURSES</PrimaryHeading>
            <div className="space-y-4">
              {coursesData.map((item, index) => (
                <div key={index}>
                  <SecondaryHeading>{item.title}</SecondaryHeading>
                  <p className="text-sm text-subTextColor">
                    {item.institution}
                  </p>
                  <p className="text-sm text-lightGray">{item.duration}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          {/* Projects */}
          <section>
            <PrimaryHeading>PROJECTS</PrimaryHeading>
            <div className="space-y-4">
              {projectsData.map((item, index) => (
                <div key={index}>
                  <SecondaryHeading>{item.title}</SecondaryHeading>
                  <a
                    target="_blank"
                    href={item.link}
                    className="text-sm hover:text-subTextColor"
                  >
                    {item.link}
                  </a>
                  <p className="text-sm text-lightGray mt-2 text-justify">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <PrimaryHeading>Skills</PrimaryHeading>
            <ul className="text-sm gap-y-2 items-center text-subTextColor flex gap-3 flex-wrap">
              {skillsData.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
