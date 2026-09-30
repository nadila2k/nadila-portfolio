import React from "react";
import heroImg from "../assets/heroImg.png";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const SOCIAL = [
  {
    icon: FaGithub,
    href: "https://github.com/nadila2k",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nadila-nawod-ba977921b/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Nadilanawod@gmail.com",
    label: "Email",
  },
];

/* Stagger children */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* ── Layout: Image on top for mobile/tablet, right for desktop ── */}
        <div className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-[1fr_380px] lg:place-items-start lg:gap-20">
          {/* ─ Text column ─ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left w-full"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="section-eyebrow">Software Engineer</span>
              <span
                className="h-px flex-1 max-w-[80px]"
                style={{ background: "var(--accent-primary)", opacity: 0.4 }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="leading-[1.05] tracking-tight font-extrabold"
              style={{
                fontSize: "var(--fs-display)",
                color: "var(--text-primary)",
              }}
            >
              Nadila
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nawod
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-mono text-sm md:text-base max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
                Software Engineer · Full-Stack Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="max-w-[60ch] leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--fs-body)",
              }}
            >
              Software Engineering graduate passionate about turning ideas into
              meaningful, reliable digital experiences. I enjoy solving complex
              problems, learning new technologies, and building applications
              that are intuitive, scalable, and secure. With experience across
              the full software development lifecycle, I thrive in collaborative
              environments where thoughtful design, clean development, and
              continuous improvement come together.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start w-full sm:w-auto"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Nadilanawod@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Get in touch
              </a>
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="btn-outline cursor-pointer w-full sm:w-auto justify-center"
              >
                View projects
              </ScrollLink>
            </motion.div>

            {/* Social icons */}
            <motion.ul
              variants={fadeUp}
              className="flex items-center justify-center gap-4 pt-1 lg:justify-start"
              aria-label="Social links"
            >
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-primary)";
                      e.currentTarget.style.borderColor =
                        "rgba(34,211,238,0.3)";
                      e.currentTarget.style.background =
                        "rgba(34,211,238,0.08)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ─ Image column ─ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, #22d3ee22 0deg, transparent 120deg, #f59e0b11 240deg, transparent 360deg)",
                  transform: "scale(1.08)",
                  filter: "blur(1px)",
                }}
              />
              {/* Decorative corner accent */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 h-16 w-16 rounded-full opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
                }}
              />
              <motion.img
                src={heroImg}
                alt="Nadila Nawod, Software Engineer"
                className="relative z-10 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] rounded-2xl object-cover"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.1)",
                }}
                animate={{ translateY: [-6, 6, -6] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />

            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <ScrollLink
            to="tech"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: "var(--text-muted)" }}
            >
              <HiArrowDown size={22} />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
