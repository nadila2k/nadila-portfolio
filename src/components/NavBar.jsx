import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";
import { BiMenu, BiX } from "react-icons/bi";

const NAV_ITEMS = [
  { label: "Home",     to: "hero" },
  { label: "Tech",     to: "tech" },
  { label: "Projects", to: "projects" },
  { label: "Contact",  to: "contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [active, setActive]     = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const menuButtonRef = useRef(null);

  /* Scroll-aware glass background */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((n) => document.getElementById(n.to))
      .filter(Boolean);
    if (sections.length === 0) return;
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.intersectionRatio));
        let topId = active, topRatio = 0;
        ratios.forEach((r, id) => { if (r > topRatio) { topRatio = r; topId = id; } });
        if (topRatio > 0) setActive(topId);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (isOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (sw > 0) document.body.style.paddingRight = `${sw}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => { document.body.style.overflow = ""; document.body.style.paddingRight = ""; };
  }, [isOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    const onResize = () => { if (window.innerWidth >= 768) close(); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [isOpen, close]);

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full transition-all duration-500"
        style={{
          background: scrolled ? "rgba(7,7,12,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
        }}
      >
        {/* Mobile-friendly padding: tight on small screens, wide on desktop */}
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3 md:py-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.9,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(139,92,246,0.4))"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.filter = "none"; }}
            aria-label="Home"
          >
            Nadila
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            <ul className="flex gap-6 lg:gap-10 items-center">
              {NAV_ITEMS.map(({ label, to }) => {
                const isActive = active === to;
                return (
                  <li key={to} className="relative">
                    <ScrollLink
                      to={to}
                      smooth
                      duration={500}
                      offset={-80}
                      spy
                      aria-current={isActive ? "page" : undefined}
                      className="relative cursor-pointer select-none text-base font-medium outline-none transition-all duration-200 py-1"
                      style={{ color: isActive ? "#22d3ee" : "rgba(255,255,255,0.6)" }}
                      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.95)"; }}
                      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                      onClick={() => setActive(to)}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                          style={{ background: "linear-gradient(90deg, #22d3ee, #8b5cf6)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg outline-none transition-all duration-200"
            style={{
              color: "rgba(255,255,255,0.85)",
              background: isOpen ? "rgba(34,211,238,0.1)" : "rgba(255,255,255,0.05)",
              border: isOpen ? "1px solid rgba(34,211,238,0.3)" : "1px solid rgba(255,255,255,0.1)",
            }}
            onClick={() => setIsOpen((p) => !p)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                {isOpen ? <BiX size={22} /> : <BiMenu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Full-width slide-down panel */}
            <motion.div
              key="panel"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed left-0 right-0 top-0 z-50 md:hidden"
              style={{
                background: "rgba(7,7,12,0.97)",
                backdropFilter: "blur(28px) saturate(200%)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Panel header row */}
              <div
                className="flex items-center justify-between px-5 py-5 sm:px-8"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="text-2xl font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Nadila
                </span>
                <button
                  onClick={close}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  aria-label="Close navigation"
                >
                  <BiX size={20} />
                </button>
              </div>

              {/* Nav links — large touch targets */}
              <nav className="flex flex-col items-center justify-center gap-2 px-10 py-8 sm:px-10 min-h-[220px]" aria-label="Mobile navigation links">
                {NAV_ITEMS.map(({ label, to }, i) => {
                  const isActive = active === to;
                  return (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full max-w-xs"
                    >
                      <ScrollLink
                        to={to}
                        smooth
                        duration={500}
                        offset={-80}
                        onClick={close}
                        aria-current={isActive ? "page" : undefined}
                        className="flex cursor-pointer items-center justify-between rounded-xl px-8 py-4 gap-6 transition-all duration-200 group"
                        style={{
                          color: isActive ? "#22d3ee" : "rgba(255,255,255,0.65)",
                          background: isActive ? "rgba(34,211,238,0.08)" : "transparent",
                          border: isActive ? "1px solid rgba(34,211,238,0.15)" : "1px solid transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                          }
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-medium">{label}</span>
                        </div>
                        {/* Arrow indicator — always mounted so it reserves space and
                            never collapses into the label when it becomes active */}
                        <motion.span
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                          transition={{ duration: 0.18 }}
                          className="text-xs w-4 flex-shrink-0 text-center"
                          style={{ color: "#22d3ee" }}
                        >
                          ▶
                        </motion.span>
                      </ScrollLink>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Panel footer — hidden on small mobile widths, shown from sm up */}
              <div
                className="hidden sm:block px-8 py-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                  Nadila Nawod · {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}