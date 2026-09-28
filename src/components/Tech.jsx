import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaCss3Alt, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress, SiFastapi, SiMongodb, SiNextdotjs, SiPostgresql, SiSpringboot,
  SiSupabase, SiTailwindcss, SiDocker, SiGit,
} from "react-icons/si";

const CATEGORIES = [
  {
    label: "Frontend",
    color: "#22d3ee",
    items: [
      { name: "HTML5",       icon: FaHtml5,        color: "#e34f26" },
      { name: "CSS3",        icon: FaCss3Alt,       color: "#1572b6" },
      { name: "JavaScript",  icon: FaJs,            color: "#f7df1e" },
      { name: "React",       icon: FaReact,         color: "#61dafb" },
      { name: "Next.js",     icon: SiNextdotjs,     color: "#ffffff" },
      { name: "TailwindCSS", icon: SiTailwindcss,   color: "#38bdf8" },
    ],
  },
  {
    label: "Backend",
    color: "#f59e0b",
    items: [
      { name: "Java",        icon: FaJava,          color: "#f89820" },
      { name: "Spring Boot", icon: SiSpringboot,    color: "#6db33f" },
      { name: "Express.js",  icon: SiExpress,       color: "#d1d5db" },
      { name: "PHP",         icon: FaPhp,           color: "#7a86b8" },
      { name: "Python",      icon: FaPython,        color: "#3776ab" },
      { name: "FastAPI",     icon: SiFastapi,       color: "#009688" },
    ],
  },
  {
    label: "Database",
    color: "#a78bfa",
    items: [
      { name: "PostgreSQL",  icon: SiPostgresql,    color: "#336791" },
      { name: "MongoDB",     icon: SiMongodb,       color: "#47a248" },
      { name: "Supabase",    icon: SiSupabase,      color: "#3ecf8e" },
    ],
  },
  {
    label: "Tools",
    color: "#fb7185",
    items: [
      { name: "Docker",      icon: SiDocker,        color: "#2496ed" },
      { name: "Git",         icon: SiGit,           color: "#f05032" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function TechItem({ name, icon: Icon, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center gap-2.5 cursor-default"
      style={{ minWidth: 72 }}
    >
      {/* Icon container */}
      <motion.div
        animate={{
          y: hovered ? -4 : 0,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-16 w-16 items-center justify-center rounded-xl"
        style={{
          background: hovered
            ? `${color}18`
            : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? color + "40" : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered ? `0 8px 24px ${color}22` : "none",
          transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        }}
      >
        <Icon style={{ fontSize: 30, color: hovered ? color : "#94a3b8" }} />
      </motion.div>

      {/* Tooltip label */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0.55 }}
        transition={{ duration: 0.15 }}
        className="text-center text-xs font-medium leading-tight"
        style={{ color: hovered ? "var(--text-primary)" : "var(--text-muted)" }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

export default function Tech() {
  return (
    <section
      id="tech"
      className="w-full min-h-screen flex items-center justify-center py-28"
      aria-label="Technologies"
    >
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
        >
          <span className="section-eyebrow">What I work with</span>
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontSize: "var(--fs-h1)", color: "var(--text-primary)" }}
          >
            Tech Stack
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 440, fontSize: "var(--fs-body)" }}>
            Tools and technologies I use to build full-stack applications.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="w-full flex flex-col gap-12">
          {CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category label */}
              <div className="mb-10 flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-sm"
                  style={{ background: cat.color, opacity: 0.8 }}
                />
                <span
                  className="font-mono text-xs font-bold uppercase tracking-widest"
                  style={{ color: cat.color, opacity: 0.85 }}
                >
                  {cat.label}
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: `${cat.color}20` }}
                />
              </div>

              {/* Icons row */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap justify-center gap-6 lg:justify-start"
              >
                {cat.items.map((item) => (
                  <TechItem key={item.name} {...item} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
