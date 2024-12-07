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
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-base"
                  >
                    {active.description}
                  </motion.p>
                  <motion.a
                    layout
                    href={active.ctaLink}
                    target="_blank"
                    className="block mt-4 px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white text-center"
                  >
                    {active.ctaText}
                  </motion.a>
                  <motion.div className="mt-4 text-neutral-600 text-sm dark:text-neutral-400">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
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
                    className="font-medium text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-400 text-center md:text-left text-base"
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

// Cards Data
const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAKHFBCeaYsNP5YkIuS4pOzf6CakpWupPzg&s",
    ctaText: "Visit",
    ctaLink: "https://github.com/wilhelmlofsten",
    content: () => <p>Some detailed description about Lana Del Rey.</p>,
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    ctaText: "Visit",
    ctaLink: "https://github.com/wilhelmlofsten",
    content: () => <p>Some detailed description about Babbu Maan.</p>,
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAKHFBCeaYsNP5YkIuS4pOzf6CakpWupPzg&s",
    ctaText: "Visit",
    ctaLink: "https://github.com/wilhelmlofsten",
    content: () => <p>Some detailed description about Metallica.</p>,
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    ctaText: "Visit",
    ctaLink: "https://github.com/wilhelmlofsten",
    content: () => <p>Some detailed description about Himesh.</p>,
  },
];
