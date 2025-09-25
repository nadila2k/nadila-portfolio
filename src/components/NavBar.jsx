import React, { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ScrollLinks from "./ScrollLinks";
import { BiMenu, BiX } from "react-icons/bi";
import { div } from "motion/react-client";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <Link
        to="/"
        className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Nadila
      </Link>
      <ul className="hidden md:flex gap-10">
        {location.pathname === "/" ? (
          <>
            <ScrollLinks to="home">Home</ScrollLinks>
            <ScrollLinks to="tech">Tech</ScrollLinks>
            <ScrollLinks to="projects">Projects</ScrollLinks>
            <ScrollLinks to="contact">Contact</ScrollLinks>
          </>
        ) : (
          <NavLink to="/">Home</NavLink>
        )}

        {/* <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "text-gray-300 hover:text-white transition"
          }
        >
          Profile
        </NavLink> */}
      </ul>
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start border-l border-l-gray-700 bg-black/70 px-8 py-6 text-white backdrop-blur-md md:hidden gap-10 border-tran2 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <Link to="/">Home</Link>
          <ScrollLinks to="tech">Tech</ScrollLinks>
          <ScrollLinks to="projects">Projects</ScrollLinks>
          <ScrollLinks to="contact">Contact</ScrollLinks>
        </div>
      )}
    </nav>
  );
}
