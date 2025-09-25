import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div class="-z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main id="home" className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
