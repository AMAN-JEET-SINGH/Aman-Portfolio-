import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function BackgroundLinesDemo() {
  return (
<>
    <NavbarDemo>
        <Projects/>
    </NavbarDemo>
    <h2 className="text-white text-center text-4xl mt-10 mb-9">More coming soon...💻</h2>
    <Footer/>
    
    </>
  );
}
