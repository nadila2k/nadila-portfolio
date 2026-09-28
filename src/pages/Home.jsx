import React from "react";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div
      id="home"
      style={{ background: "var(--bg-base)" }}
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      {/* Each section is full-width; centering is handled inside each section via mx-auto max-w-6xl */}
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}
