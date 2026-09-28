import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function ScrollLinks({ children, to, onClick }) {
  return (
    <ScrollLink
      to={to}
      smooth
      duration={500}
      offset={-80}
      onClick={onClick}
      className="cursor-pointer transition-colors duration-200"
      style={{ color: "var(--text-secondary)" }}
      activeClass="active-scroll-link"
      spy
    >
      {children}
    </ScrollLink>
  );
}
