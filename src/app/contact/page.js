"use client";

import { useEffect } from "react";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function ContactPage() {
  //useEffect hook to disable scrolling on mount and enable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40 w-full">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Heello 1
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Hello 2
        </p>
      </WavyBackground>
    </div>
  );
}
