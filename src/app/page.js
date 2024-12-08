import Navbar from "../components/ui/Navbar";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from "next/link";
import Image from "next/image";
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
      <div className="relative z-0 -mt-28">
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
      <div className="relative z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white py-16 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <p className="text-lg text-gray-200">
              Currently in the final year of my Master of Science program in
              Information Technology (IT) at Linköping University, specializing
              in Large Scale Software Engineering. With a passion for full-stack
              development and management, I thrive on creating seamless user
              experiences and leading teams toward impactful results. I have
              hands-on experience with technologies like React.js, Next.js,
              Python, and have honed my leadership skills as the 2024 Project
              Manager for LINK-Career days - Linköpings largest IT job fair.
              Otherwise, feel free to browse my projects and contact information
              if you would like to reach out!
            </p>
          </div>
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-[250px] h-[250px] bg-gray-700 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
              <Image
                src="https://scontent.fbma4-1.fna.fbcdn.net/v/t39.30808-6/459566304_2004759299944374_9115011523230486269_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=So9rr63cXXAQ7kNvgGO5TN_&_nc_zt=23&_nc_ht=scontent.fbma4-1.fna&_nc_gid=AiQIdMQUqboOY7RV-gcqFLV&oh=00_AYD-wh4KbvrV1QJbCcsvK-M-MCrAqE48r_FQm4gL80m7dg&oe=675B2A74"
                alt="Profile Picture"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
