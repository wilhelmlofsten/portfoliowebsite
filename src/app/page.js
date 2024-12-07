import Navbar from "../components/ui/Navbar";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from "next/link";

export default function Home() {
  const words = [
    { text: "I", className: "text-white" },
    { text: "am", className: "text-white" },
    { text: "Wilhelm", className: "text-blue-500" },
    { text: "Löfsten", className: "text-blue-500" },
    { text: "Oscarsson", className: "text-blue-500" },
  ];

  return (
    <div>
      <Navbar />
      <AuroraBackground>
        <div className="flex flex-col items-center justify-center h-[40rem] space-y-4">
          <p className="text-white text-4xl sm:text-5xl">Hello!</p>
          <TypewriterEffectSmooth words={words} />
          <p className="text-white text-lg sm:text-xl text-center">
            Dedicated to Continuous Learning and Development
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
  );
}
