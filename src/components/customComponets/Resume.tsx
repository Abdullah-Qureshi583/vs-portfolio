// const PrimaryHeading = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <h2 className="text-xl font-medium font-serif border-b border-gray-700 pb-2 mb-4">
//       {children}
//     </h2>
//   );
// };
// const SecondaryHeading = ({ children }: { children: React.ReactNode }) => {
//   return <h3 className="font-medium text-gray-100">{children}</h3>;
// };

// export default function Resume() {
//   return (
//     <div className=" mx-auto p-3 md:p-8  text-gray-200">
//       {/* Header Section */}
//       <header className="border-b border-gray-700 pb-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h1 className="text-xl md:text-3xl font-serif md:underline decoration-gray-400">
//               ABDULLAH QURESHI
//             </h1>
//             <p className="">Front-End Developer</p>
//           </div>
//           <div className="space-y-1 text-sm">
//             <p className="flex items-center gap-2">
//               <span>0324328965</span>
//             </p>
//             <p className="flex items-center gap-2">
//               <span>mahdullahqureshi58@gmail.com</span>
//             </p>
//             <p>
//               <a
//                 href="https://aq--portfolio.vercel.app/"
//                 className="hover:text-gray-300 hover:underline"
//               >
//                 https://aq--portfolio.vercel.app/
//               </a>
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* About Me Section */}
//       <section className="mt-6">
//         <PrimaryHeading>ABOUT ME</PrimaryHeading>
//         <p className="text-sm leading-relaxed text-gray-400">
//           Aspiring full-stack web developer specializing in Next.js, React, and
//           modern web technologies. Skilled in JavaScript, TypeScript, and
//           Tailwind CSS, with a strong passion for Generative AI, Web 3.0, and
//           the Metaverse. Always eager to learn, collaborate on innovative
//           projects, and contribute to cutting-edge tech solutions.
//         </p>
//       </section>

//       {/* Main Content */}
//       <div className="mt-6 grid md:grid-cols-2 gap-8">
//         {/* Left Column */}
//         <div className="space-y-6">
//           {/* Education */}
//           <section>
//             <PrimaryHeading>EDUCATION</PrimaryHeading>
//             <div className="space-y-4">
//               <div>
//                 <SecondaryHeading>
//                   D. J. Sindh Government Science College
//                 </SecondaryHeading>
//                 <p className="text-sm text-gray-300">
//                   Intermediate Computer Science
//                 </p>
//                 <p className="text-sm text-gray-400">2024 - 2026</p>
//               </div>
//               <div>
//                 <SecondaryHeading>
//                   Pakistan NATIONAL ACADEMY, Karachi.
//                 </SecondaryHeading>
//                 <p className="text-sm text-gray-300">
//                   Matric from Computer Science (84%)
//                 </p>
//                 <p className="text-sm text-gray-400">2022 - 2024</p>
//               </div>
//             </div>
//           </section>

//           {/* Enrolled Courses */}
//           <section>
//             <PrimaryHeading>ENROLLED COURSES</PrimaryHeading>
//             <div className="space-y-4">
//               <div>
//                 <SecondaryHeading>
//                   CERTIFIED IN CLOUD GENAI, WEB3, AND METAVERSE
//                 </SecondaryHeading>
//                 <p className="text-sm text-gray-300">Governor House</p>
//                 <p className="text-sm text-gray-400">2024 - 2026</p>
//               </div>
//               <div>
//                 <SecondaryHeading>PYTHON PROGRAMMING</SecondaryHeading>
//                 <p className="text-sm text-gray-300">NED University</p>
//                 <p className="text-sm text-gray-400">1/2025 - 3/2025</p>
//               </div>
//             </div>
//           </section>
//         </div>
//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Projects */}
//           <section>
//             <PrimaryHeading>PROJECTS</PrimaryHeading>
//             <div className="space-y-4">
//               <div>
//                 <SecondaryHeading>E-COMMERCE WEBSITE</SecondaryHeading>
//                 <a
//                   target="_blank"
//                   href="https://deku-marketplace-builder.vercel.app"
//                   className="text-sm hover:text-gray-300"
//                 >
//                   https://hekto-marketplace-builder.vercel.app
//                 </a>
//                 <p className="text-sm text-gray-400 mt-2">
//                   A fully functional e-commerce platform built with Next.js and
//                   Sanity, featuring a admin dashboard. Key functionalities
//                   include product filtering, add-to-cart, checkout, and Stripe
//                   payment integration. Ensured a seamless user experience with a
//                   responsive UI using Tailwind CSS and deployed on Vercel.
//                 </p>
//               </div>
//               <div>
//                 <SecondaryHeading>URL SHORTENER (MERN STACK)</SecondaryHeading>
//                 <a
//                   target="_blank"
//                   href="https://mega-shortener.vercel.app"
//                   className="text-sm hover:text-gray-300"
//                 >
//                   https://snappin.vercel.app/
//                 </a>
//                 <p className="text-sm text-gray-400 mt-2">
//                   Developed SnapPin, a full-stack URL shortener using Next.js
//                   with NextAuth for secure authentication. Designed with
//                   Tailwind CSS for a responsive UI, it features custom short
//                   URLs, click analytics, and a user dashboard to manage URLs.
//                   Deployed on Vercel.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Skills */}
//           <section>
//             <PrimaryHeading>Skills</PrimaryHeading>
//             <ul className="text-sm gap-y-2 items-center text-gray-400 flex gap-3 flex-wrap">
//               <li>Next.js</li>
//               <li>React</li>
//               <li>Tailwind</li>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>JavaScript</li>
//             </ul>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const PrimaryHeading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-xl font-medium font-serif border-b border-gray-700 pb-2 mb-4">
      {children}
    </h2>
  );
};

const SecondaryHeading: React.FC<HeadingProps> = ({ children }) => {
  return <h3 className="font-medium text-gray-100">{children}</h3>;
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
      "A fully functional e-commerce platform built with Next.js and Sanity, featuring a admin dashboard. Key functionalities include product filtering, add-to-cart, checkout, and Stripe payment integration. Ensured a seamless user experience with a responsive UI using Tailwind CSS and deployed on Vercel.",
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
    <div className="mx-auto p-3 md:p-8 text-gray-200">
      {/* Header Section */}
      <header className="border-b border-gray-700 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-serif md:underline decoration-gray-400">
              ABDULLAH QURESHI
            </h1>
            <p className="">Front-End Developer</p>
          </div>
          <div className="space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <span>0324328965</span>
            </p>
            <p className="flex items-center gap-2">
              <span>mahdullahqureshi58@gmail.com</span>
            </p>
            <p>
              <a
                href="https://aq--portfolio.vercel.app/"
                className="hover:text-gray-300 hover:underline"
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
        <p className="text-sm leading-relaxed text-gray-400">
          Aspiring full-stack web developer specializing in Next.js, React, and
          modern web technologies. Skilled in JavaScript, TypeScript, and
          Tailwind CSS, with a strong passion for Generative AI, Web 3.0, and
          the Metaverse. Always eager to learn, collaborate on innovative
          projects, and contribute to cutting-edge tech solutions.
        </p>
      </section>

      {/* Main Content */}
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Education */}
          <section>
            <PrimaryHeading>EDUCATION</PrimaryHeading>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <div key={index}>
                  <SecondaryHeading>{item.institution}</SecondaryHeading>
                  <p className="text-sm text-gray-300">{item.degree}</p>
                  <p className="text-sm text-gray-400">{item.duration}</p>
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
                  <p className="text-sm text-gray-300">{item.institution}</p>
                  <p className="text-sm text-gray-400">{item.duration}</p>
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
                    className="text-sm hover:text-gray-300"
                  >
                    {item.link}
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <PrimaryHeading>Skills</PrimaryHeading>
            <ul className="text-sm gap-y-2 items-center text-gray-300 flex gap-3 flex-wrap">
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
