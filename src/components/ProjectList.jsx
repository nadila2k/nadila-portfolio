import React from "react";
import { motion } from "motion/react";
import { a } from "motion/react-client";

export default function ProjectList({ project }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
