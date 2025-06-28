import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Words from "@/components/Words";
import Aboutme from "@/components/Aboutme";
import { NavbarDemo } from "@/components/Navbar";
import { CardDemo } from "@/components/CardDemo";
import Homeprojects from "@/components/Homeprojects";
import Footer from "@/components/Footer";
import LetsConnectCard from"@/components/Connect"
export default function BackgroundLinesDemo() {
  return (
<>  <NavbarDemo>
    <Words />    
    </NavbarDemo>
    <BackgroundLines>
    </BackgroundLines>
    <Aboutme/>
    <Homeprojects/>
              < div className="flex justify-center items-center mt-10">
      <a
    href="/projects"
    className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white rounded-lg shadow-md group"
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></span>
    <span className="relative z-10 flex items-center gap-2">
      See More
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </a>
    </div>
    <LetsConnectCard/>

    <Footer/>
    
    
    </>
  );
}
