import React from "react";
import { motion } from "motion/react";
import projectData from "../Data/projectData .js";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center py-28 pb-16"
      aria-label="Projects"
    >
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 w-full flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
        >
          <span className="section-eyebrow">Selected work</span>
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: "var(--fs-h1)", color: "var(--text-primary)" }}
          >
            Projects
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 440, fontSize: "var(--fs-body)" }}>
            A collection of full-stack applications built across academic and personal projects.
          </p>
        </motion.div>

        {/* Project grid — uniform card heights via grid */}
        <div className="w-full grid grid-cols-1 gap-6">
          {projectData.map((project, index) => (
            <ProjectList key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
