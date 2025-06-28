import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BackgroundLinesDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar at top */}
      <NavbarDemo />

      {/* Center content */}
      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-white text-center text-4xl">coming soon... 👀💻</h2>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
