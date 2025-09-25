import React from "react";
import { motion } from "motion/react";
export default function TechList({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
