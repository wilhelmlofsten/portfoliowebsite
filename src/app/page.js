import Navbar from "../components/ui/Navbar";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaCogs, FaCode, FaUserTie } from "react-icons/fa";

export default function Home() {
  const words = [
    { text: "I", className: "text-white" },
    { text: "am", className: "text-white" },
    { text: "Wilhelm", className: "text-blue-500" },
    { text: "Löfsten", className: "text-blue-500" },
    { text: "Oscarsson", className: "text-blue-500" },
  ];

  const projects = [
    {
      title: "Large Scale Software Engineering",
      description:
        "System Architecture, Design Patterns, Design Systems, Domain Driven Design, Software Testing, Open Source Development and CI/CD.",
      icon: <FaCogs size={30} className="text-blue-500" />,
    },
    {
      title: "Programming Skills",
      description:
        "React.js, Next.js, Python, Java, SpringBoot, TS, JS, Flutter, HTML, CSS, C#, C,C++, SQL, R, Matlab and more!",
      icon: <FaCode size={30} className="text-red-500" />,
    },
    {
      title: "Soft Skills",
      description:
        "Leadership, Project Management, Communicative, Problem-Solver, Stress-Resistant and Driven.",
      icon: <FaUserTie size={30} className="text-green-500" />,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="relative z-0 -mt-28">
        <AuroraBackground>
          <div className="flex flex-col items-center justify-center h-[40rem] space-y-4">
            <p className="text-white text-4xl sm:text-5xl">Hello!</p>
            <TypewriterEffectSmooth words={words} />
            <p className="text-white text-lg sm:text-xl text-center">
              Full-Stack Developer
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
              <Link href="/projects" passHref>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-blue-500 px-3 py-1 text-base font-medium text-white backdrop-blur-3xl transition duration-300">
                    Discover my projects
                  </span>
                </button>
              </Link>
              <Link href="/contact" passHref>
                <button className="p-[3px] relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg transition duration-200 group-hover:from-blue-300 group-hover:to-blue-500" />
                  <div className="px-8 py-2 bg-transparent rounded-[6px] relative text-base text-white">
                    Get in touch!
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </AuroraBackground>
      </div>
      <div className="relative z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white py-16 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <p className="text-lg text-gray-200">
              Currently working as an IT-Consultant at Netlight, with a specialization in
              fullstack development. With a background in M.Sc. Information
              Technology from Linköping University (LiU), specializing in
              Large-Scale Software Engineering, I’m very passionate about
              fullstack development, software architecture and project
              management! Therefore, I thrive on creating seamless user
              experiences and leading teams toward impactful results. I have
              hands-on experience with technologies like React.js, Next.js,
              Python, AWS and have honed my leadership skills as the 2024
              Project Manager for LINK-Career days - Linköpings largest IT job
              fair. Otherwise, feel free to browse my projects and contact
              information if you would like to reach out!
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-[250px] h-[250px] bg-gray-700 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
              <Image
                src="https://github.com/wilhelmlofsten/portfoliowebsite/blob/main/public/profilePicture.jpg?raw=true"
                alt="Profile Picture"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}
