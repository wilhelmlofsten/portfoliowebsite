"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { WavyBackground } from "../../components/ui/wavy-background";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { prefix } from "../../lib/prefix"; // Import prefix

export default function ContactPage() {
  // fixes the overflow issue when the page is loaded
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <WavyBackground className="max-w-6xl mx-auto pb-20 w-full">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Me!</h1>
        </div>

        {/* 3D Card with Profile Picture Inside */}
        <div className="flex justify-center items-center mb-8">
          <CardContainer className="inter-var">
            <CardBody
              className="bg-gray-800 relative group/card dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-gray-700
              border-gray-600 w-[38rem] h-[18rem] rounded-xl p-6 border"
            >
              <div className="flex h-full items-center [transform-style:preserve-3d]">
                {/* column 1: Links and Icons */}
                <div className="flex flex-col space-y-4 w-2/3 [transform-style:preserve-3d]">
                  {/* row 1 (GitHub) */}
                  <CardItem
                    translateZ={20}
                    className="flex items-center space-x-4 py-2"
                  >
                    <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaGithub
                        size={30}
                        className="text-gray-300 dark:text-white"
                      />
                    </div>
                    <a
                      href="https://github.com/wilhelmlofsten"
                      target="_blank"
                      className="text-lg font-medium text-gray-300 hover:text-white"
                    >
                      wilhelmlofsten
                    </a>
                  </CardItem>

                  {/* row 2 (LinkedIn) */}
                  <CardItem
                    translateZ={50}
                    className="flex items-center space-x-4 py-2"
                  >
                    <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaLinkedin
                        size={30}
                        className="text-gray-300 dark:text-white"
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/wilhelm-l%C3%B6fsten-oscarsson/"
                      target="_blank"
                      className="text-lg font-medium text-gray-300 hover:text-white"
                    >
                      Wilhelm Löfsten Oscarsson
                    </a>
                  </CardItem>

                  {/* row 3 (Email) */}
                  <CardItem
                    translateZ={30}
                    className="flex items-center space-x-4 py-2"
                  >
                    <div className="p-2 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaEnvelope
                        size={30}
                        className="text-gray-300 dark:text-white"
                      />
                    </div>
                    <a
                      href="mailto:wilhelm.oscarsson@gmail.com"
                      className="text-lg font-medium text-gray-300 hover:text-white"
                    >
                      wilhelm.oscarsson@gmail.com
                    </a>
                  </CardItem>
                </div>

                {/* column 2: Profile Picture */}
                <div className="flex items-center justify-center w-1/3 [transform-style:preserve-3d]">
                  <CardItem
                    translateZ={70}
                    className="w-[175px] h-[175px] bg-gray-700 rounded-full
                      overflow-hidden border-4 border-gray-600 flex-shrink-0"
                  >
                    <Image
                      src={`${prefix}/profilepicture.jpg`}
                      alt="Profile Picture"
                      width={175}
                      height={175}
                      className="object-cover"
                    />
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </WavyBackground>
    </div>
  );
}
