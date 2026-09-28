import React from "react";
import { motion } from "motion/react";

/* Generic animated wrapper for scroll-triggered entrance */
export default function TechList({ children }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
