"use client";

import { useEffect } from "react";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/start-background";
import Image from "next/image";
import React, { useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ProjectPage() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    // fix overflow issues
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="h-auto min-h-screen bg-neutral-900 flex flex-col items-center justify-start relative w-full overflow-hidden">
      <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-16 mb-8">
        My projects!
      </h2>

      <ShootingStars />
      <StarsBackground />

      {/* Expandable Card Grid */}
      <div className="relative z-10 w-full px-4 mt-8">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-700 dark:bg-neutral-900 sm:rounded-3xl overflow-auto"
                style={{ zIndex: 110, marginTop: "6rem" }}
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
                <div className="p-4">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-white text-base"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-gray-300 text-base"
                  >
                    {active.description}
                  </motion.p>
                  <motion.a
                    layout
                    href={active.ctaLink}
                    target="_blank"
                    className="block mt-4"
                  >
                    <button className="p-[3px] relative group w-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg transition duration-200 group-hover:from-blue-300 group-hover:to-blue-500" />
                      <div className="px-8 py-2 bg-transparent rounded-[6px] relative text-base text-white">
                        {active.ctaText}
                      </div>
                    </button>
                  </motion.a>
                  <motion.div className="mt-4 text-gray-300 text-sm">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white text-sm"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col bg-gray-700 hover:bg-gray-500 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-white text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-300 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
}

const cards = [
  {
    description: "A social stock market forum",
    title: "StockInsirator ",
    src: "https://gitlab.liu.se/willo509/tddd27_2024_stockinspirator/-/raw/main/searchStockPage.png",
    ctaText: "Visit the project",
    ctaLink: "https://gitlab.liu.se/willo509/tddd27_2024_stockinspirator",
    content: () => (
      <p>
        Stock-inspirator is a social platform that combines stock market insights with user interaction. I designed and developed both the frontend and backend systems, enabling users to access real-time stock data, news, and community-driven insights in one place. The platform integrated advanced data visualization with social features, allowing users to follow stocks, connect with fellow investors, and share ideas. My solution provided a seamless, reliable experience, improving how users engage with stock market information and fostering a more interactive investment community!
      </p>
    ),
    tags: [
      "Fullstack",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "D3.js",
      "Firebase",
      "TailwindCSS",
      "Finance",
      "CI/CD",
    ],
  },
  {
    description: "This website!",
    title: "Portfolio Website",
    src: "https://github.com/wilhelmlofsten/portfoliowebsite/raw/main/aboutMe.png",
    ctaText: "Visit the project",
    ctaLink: "https://github.com/wilhelmlofsten/portfoliowebsite",
    content: () => (
      <p>
        {" "}
        This portfolio website showcases my projects, contact information and
        information about me. Built with Next.js, the site leverages server-side
        rendering for fast load times and is designed with TailwindCSS.
        Furthermore, AceternityUI components have been used to elevate the
        website design. The site is hosted on Github Pages and features CI/CD
        for seamless deployment.
      </p>
    ),
    tags: [
      "Next.js",
      "TailwindCSS",
      "React",
      "AceternityUI",
      "Github Pages",
      "CI/CD",
    ],
  },
  {
    description: "LINK- Career days",
    title: "Project Manager",
    src: "https://github.com/wilhelmlofsten/portfoliowebsite/blob/main/public/linkdagarna.jpg?raw=true",
    ctaText: "Learn more about LINK-Dagarna",
    ctaLink: "https://linkdagarna.se/committee",
    content: () => (
      <p>
        Having participated in LINK Career Days 2022 as a Company Responsible,
        where I managed relationships with participating companies and ensured
        their smooth involvement in the event, I was inspired to take on a
        larger challenge by stepping into the role of Project Manager for LINK
        Career Fair 2024. <br /> <br />
        As Project Manager, I led a team of 30 members, each with distinct roles
        across various subgroups, fostering effective collaboration and ensuring
        all aspects of the fair were planned and executed. My responsibilities
        included overseeing event logistics, securing sponsorships, and managing
        communications with companies to enhance their engagement and
        satisfaction. I also worked to create valuable networking opportunities,
        connecting students with industry professionals to bridge the gap
        between academia and the workplace. This role allowed me to make a
        meaningful impact on the largest IT job fairs at LiU, demonstrating my
        ability to lead, coordinate complex projects, and deliver successful
        outcomes.
      </p>
    ),
    tags: [
      "Leadership",
      "Project Management",
      "Networking",
      "Teamwork",
      "Communication",
    ],
  },
  {
    description: "Your fellow travel chatbot!",
    title: "SafetySam",
    src: "https://gitlab.liu.se/willo509/tnm114project/-/raw/main/conversationExample.png?ref_type=heads",
    ctaText: "Visit the project",
    ctaLink: "https://gitlab.liu.se/willo509/tnm114project",
    content: () => (
      <p>
        SafetySam is an AI travel chatbot providing travelers with accurate and personalized travel advice. I developed the frontend and backend systems, enabling quick and easy access to travel safety, health, and entry requirement information. His solution effectively combined modern AI technologies with user-friendly design, significantly improving how travelers plan and prepare for their trips. The chatbot provided a reliable, intuitive experience, laying a solid foundation for further enhancements.
        <br />
        <a
          href="https://gitlab.liu.se/willo509/tnm114project/-/blob/main/TNM114_-_SafetySam.pdf?ref_type=heads"
          style={{ color: "#0096FF" }}
        >
          Report of the project can be found here
        </a>
        .
      </p>
    ),
    tags: [
      "Chatbot",
      "RAG",
      "Llama model",
      "React",
      "Flask",
      "Python",
      "MUI",
      "AI",
    ],
  },
  {
    description: "A JavaFX Login Authenticator",
    title: "Cookie Contributor",
    src: "https://github.com/wilhelmlofsten/loginAppl_JAVAFX_wMySQL/blob/main/readmeIMG/CMLogo.png?raw=true",
    ctaText: "Visit the project",
    ctaLink:
      "https://github.com/wilhelmlofsten/loginAppl_JAVAFX_wMySQL?tab=readme-ov-file",
    content: () => (
      <p>
        JavaFX application with database connectivity. In this JavaFX
        application project, I made an account registrator where we store user
        registration form data into MySQL database using JDBC API.
      </p>
    ),
    tags: ["Java", "JavaFX", "MySQL", "JDBC", "FXML", "Login Authenticator"],
  },
];
