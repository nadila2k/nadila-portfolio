import React from "react";
import { motion } from "motion/react";

export default function ProjectList({ project }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
      href={project.repositories?.[0]?.link}
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

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg bg-black p-3 text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Repository Links */}
        {project.repositories && project.repositories.length > 0 && (
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Repositories</h4>
            <div className="flex flex-wrap gap-3">
              {project.repositories.map((repo, index) => (
                <a
                  key={index}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 transition-colors"
                >
                  {repo.reponame}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.a>
  );
}
