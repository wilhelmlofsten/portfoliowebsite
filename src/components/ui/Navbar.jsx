import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FloatingDock } from "./floating-dock";

const Navbar = () => {
  const dockItems = [
    {
      title: "Projects",
      href: "/projects",
      text: true,
    },
    {
      title: "Contact",
      href: "/contact",
      text: true,
    },
    {
      title: "GitHub",
      href: "https://github.com/wilhelmlofsten",
      icon: <FaGithub size={24} />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/wilhelm-l%C3%B6fsten-oscarsson/",
      icon: <FaLinkedin size={24} />,
    },
    {
      title: "Mail",
      href: "mailto:wilhelm.oscarsson@gmail.com",
      icon: <FaEnvelope size={30} />,
    },
  ];

  return (
    <div className="m-0 p-0">
      <nav className="bg-gray-700 p-3 h-20 mt-0 w-full fixed top-0 z-50 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a
            className="
      bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text 
      text-xl sm:text-2xl md:text-3xl ml-2 sm:ml-4 
      hover:from-blue-400 hover:to-blue-500 font-bold"
          >
            <span className="block sm:inline">Wilhelm</span>
            <span className="block sm:inline"> Löfsten Oscarsson</span>
          </a>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8">
          <FloatingDock items={dockItems} className="mr-2 sm:mr-8" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
