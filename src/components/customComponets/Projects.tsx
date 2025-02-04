import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "E-commerce Website",
    description:
      "A fully functional e-commerce platform featuring Admin dashboard, product filtering, add-to-cart, checkout, and Stripe payment integration, built with Next.js and Sanity.",
    languages: ["Next.js", "Sanity", "Tailwind CSS", "Stripe","TypeScript" ],
    liveDemo: "https://hekto-marketplace-builder.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/marketplace-builder-hackathon-2025",
  },
  {
    name: "SnapPin (URL Shortener)",
    description:
      "A full-stack URL shortener application with custom short URLs, detailed click analytics, and secure authentication using NextAuth.",
    languages: ["Next.js", "Tailwind CSS", "NextAuth", ],
    liveDemo: "https://snappin.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Projects/tree/main/NextJsBasedProjects/snapPin",
  },
  {
    name: "Password Manager",
    description:
      "A secure password manager that helps users generate, store, and manage passwords with encryption and authentication features.",
    languages: ["Next.js", "Node.js", "MongoDB", "ReactHookForm"],
    liveDemo: "https://fortilock.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Projects/tree/main/NextJsBasedProjects/password-manager",
  },
  {
    name: "To-Do List App",
    description:
      "A task management application that allows users to add, edit, and delete tasks, with features for marking tasks as completed and filtering by status.",
    languages: ["React",],
    liveDemo: "https://aq-todolist.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/TodoList-using-react-tailwind",
  },
  {
    name: "Currency Converter",
    description:
      "A currency converter tool providing exchange rates between multiple currencies, with a responsive and user-friendly interface.",
    languages: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://aq-currency-convertor.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/currency-convertor",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "An interactive Tic-Tac-Toe game with score tracking and animations, built for a fun and responsive user experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://aq-tic-tac-toe.netlify.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Projects/tree/main/Graphical%20Project/tic-tac-toe-game",
  },
  {
    name: "Resume Builder App",
    description:
      "A resume builder that allows users to enter their details and preview a professional resume with customizable templates.",
    languages: ["HTML", "CSS", "TypeScript"],
    liveDemo: "https://resume-builder-gamma-hazel.vercel.app/",
    github:
      "https://github.com/Abdullah-Qureshi583/Hackathons/tree/main/hackathon1",
  },
  {
    name: "Spotify Client Clone",
    description:
      "A fully responsive Spotify clone with the ability to browse and listen to playlists, providing a sleek music streaming experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://qureshispotify.freewebhostmost.com/",
    github: "https://github.com/Abdullah-Qureshi583/Clones/tree/main/Spotify",
  },
];

const techColors: { [key: string]: string } = {
  "Next.js": "border-gray-500",
  Sanity: "border-yellow-500",
  "Tailwind CSS": "border-blue-500",
  Stripe: "border-purple-600",
  ReactHookForm:"border-teal-500",
  React: "border-sky-500",
  UUID: "border-orange-500",
  LocalStorage: "border-teal-500",
  HTML: "border-red-500",
  CSS: "border-blue-600",
  JavaScript: "border-yellow-400",
  TypeScript: "border-blue-400",
  MongoDB: "border-green-500",
  "Node.js": "border-lime-500",
  NextAuth: "border-indigo-500",
  "Node Mailer": "border-pink-500",
};

export default function Projects() {
  return (
    <main className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#001822] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{project.name}</h2>
                <p className="mb-4 h-24 overflow-y-auto">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 border rounded-full text-sm ${
                          techColors[lang] || "border-gray-400"
                        }`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.liveDemo}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                    target="_blank"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
