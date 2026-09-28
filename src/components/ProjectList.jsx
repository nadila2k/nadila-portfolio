import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaUserShield } from "react-icons/fa";

/* Fixed image panel dimensions — consistent across all cards */
const PANEL_H = 240; // mobile/fallback height (px)

/* Pick an icon based on the link's label */
function getLiveLinkIcon(reponame) {
  if (/admin/i.test(reponame)) return FaUserShield;
  if (/client/i.test(reponame)) return FaGlobe;
  return FaExternalLinkAlt;
}

/* Keep the full label as-is, e.g. "Live Demo - Client App" */
function getLiveLinkLabel(reponame) {
  return reponame;
}

export default function ProjectList({ project, index }) {
  const [imgHovered, setImgHovered] = useState(false);

  /* All live (non-GitHub) links — shown in image hover overlay */
  const liveLinks = project.repositories?.filter((r) => !r.link?.includes("github.com")) ?? [];
  /* GitHub repos — shown at the bottom */
  const repoLinks = project.repositories?.filter((r) => r.link?.includes("github.com")) ?? [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="card group relative overflow-hidden flex flex-col md:flex-row md:gap-6 h-full"
    >
      {/* ── Image panel — no padding, object-cover fills edge to edge ── */}
      <div
        className="relative shrink-0 cursor-pointer overflow-hidden md:w-[300px] lg:w-[320px]"
        style={{ height: PANEL_H, minHeight: PANEL_H }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {/* Full-bleed image — no gap/padding */}
        <motion.img
          src={project.image}
          alt={`${project.title} screenshot`}
          animate={{ scale: imgHovered ? 1.04 : 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-center"
        />

        {/* Bottom gradient + index watermark */}
        <div
          className="absolute inset-0 flex items-end p-5 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,10,15,0.82) 0%, transparent 55%)" }}
        >
          <span
            className="font-mono text-6xl font-bold leading-none select-none"
            style={{ color: "rgba(255,255,255,0.07)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Hover overlay — shows ALL live links (Live Demo, Client App, Admin Panel…) */}
        {liveLinks.length > 0 && (
          <motion.div
            animate={{ opacity: imgHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4"
            style={{ background: "rgba(10,10,15,0.58)", backdropFilter: "blur(5px)" }}
          >
            {liveLinks.map((link) => {
              const Icon = getLiveLinkIcon(link.reponame);
              const label = getLiveLinkLabel(link.reponame);
              return (
                <a
                  key={link.reponame}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.reponame}
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 w-full max-w-[220px] justify-center text-center"
                  style={{
                    background: "rgba(34,211,238,0.12)",
                    border: "1px solid rgba(34,211,238,0.35)",
                    color: "var(--accent-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(34,211,238,0.24)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(34,211,238,0.12)";
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon size={10} />
                  {label}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* ── Content panel ── */}
      <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
        {/* Title + description */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-lg font-bold leading-snug md:text-xl"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom bar — GitHub repos + live links, all same style */}
        {(repoLinks.length > 0 || liveLinks.length > 0) && (
          <div
            className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {/* GitHub repo links */}
            {repoLinks.map((repo) => (
              <a
                key={repo.reponame}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
              >
                <FaGithub size={14} />
                {repo.reponame}
              </a>
            ))}

            {/* Live links — same style as GitHub links, icon + shortened label */}
            {liveLinks.map((link) => {
              const Icon = getLiveLinkIcon(link.reponame);
              const label = getLiveLinkLabel(link.reponame);
              return (
                <a
                  key={link.reponame}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.reponame}
                  className="link-underline flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  <Icon size={13} />
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.article>
  );
}