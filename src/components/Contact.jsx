import React from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const CONTACT_ITEMS = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    values: [
      { text: "+94 71 472 2610", href: "tel:+94714722610" },
      { text: "+94 78 372 0937", href: "tel:+94783720937" },
    ],
  },
  {
    icon: FaEnvelope,
    label: "Email",
    values: [
      {
        text: "Nadilanawod@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=Nadilanawod@gmail.com",
      },
    ],
  },
];

const SOCIALS = [
  { icon: FaGithub,   href: "https://github.com/nadila2k",                        label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nadila-nawod-ba977921b/", label: "LinkedIn" },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full flex items-center justify-center overflow-hidden pb-24 md:pb-32"
      style={{ paddingTop: "160px", marginTop: "40px" }}
      aria-label="Contact"
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:items-start lg:px-8">
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* ─ Left: copy ─ */}
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <span className="section-eyebrow">Let's work together</span>
              <h2
                className="font-extrabold tracking-tight leading-[1.1]"
                style={{ fontSize: "var(--fs-h1)", color: "var(--text-primary)" }}
              >
                Get In
                <br />
                <span style={{ color: "var(--accent-primary)" }}>Touch</span>
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", fontSize: "var(--fs-body)", maxWidth: 420 }}
              >
                I'm open to new opportunities, internships, and collaborations.
                Whether you have a project in mind or just want to say hello —
                feel free to reach out.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Nadilanawod@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Send a message
                <HiArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 lg:justify-start">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
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
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                    e.currentTarget.style.background = "rgba(34,211,238,0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ─ Right: contact info cards ─ */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            {CONTACT_ITEMS.map(({ icon: Icon, label, values }) => (
              <div
                key={label}
                className="flex w-full flex-col items-center gap-3 overflow-hidden rounded-xl p-5 text-center sm:flex-row sm:items-center sm:gap-4 sm:p-6 sm:text-left"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    minHeight: 40,
                    background: "rgba(34,211,238,0.1)",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Icon size={16} />
                </div>
                <div className="flex min-w-0 flex-col gap-1.5">
                  <span
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                  <div className="flex flex-col gap-1">
                    {values.map(({ text, href }) => (
                      <a
                        key={text}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="link-underline break-words text-sm font-medium transition-colors duration-200"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-primary)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                      >
                        {text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Footer note */}
            <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
              Typically responds within 24 hours.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex w-full flex-col items-center gap-2 border-t pt-8 text-center"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            Designed &amp; built by Nadila Nawod · 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}