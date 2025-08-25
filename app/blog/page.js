import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard"; // import the BlogCard

export default function BackgroundLinesDemo() {
  const blogs = [
    {
      title: "JavaScript’s Answer to cin and Scanner: The Readline Module",
      description:
        "Learn how to take user input in Node.js using the Readline module, with examples like calculators and CLI tools.",
      imageUrl: "/blog1.png", // add this image in /public/images/
      link: "https://medium.com/@amanjeet1089singh/taking-user-input-in-javascript-with-the-readline-module-28431e3b666a",
      date: "August 2025",
      topics: ["JavaScript", "Node.js", "CLI"],
    },
    // {
    //   title: "Understanding Async/Await in JavaScript",
    //   description:
    //     "A beginner-friendly explanation of async/await with practical code examples.",
    //   imageUrl: "/images/async-blog.jpg",
    //   link: "https://medium.com/your-second-blog",
    //   date: "July 2025",
    //   topics: ["JavaScript", "Async", "Promises"],
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Navbar at top */}
      <NavbarDemo />

      {/* Center content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-white text-center text-4xl font-bold mb-10">
            My Blog Posts 📝
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
