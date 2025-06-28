import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
export default function BackgroundLinesDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar at top */}
      <NavbarDemo />

      <About/>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
