import React from "react";
import heroImg from "../assets/heroImg.png";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="hero"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px32"
    >
      <div className="flex   items-center justify-center gap-50 text-white">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
             viewport={{ once: false }} 
            className="flex max-w-[600px] flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 font-light md:text-7xl ">
              Nadila Nawod
            </h1>
            <h3 className="bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100 font-light md:text-3xl">
               Software Engineer Intern
            </h3>
            <ul className="flex justify-center gap-5 mt-5">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Nadilanawod@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nadila-nawod-ba977921b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nadila2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
              <p className="text-sm md:text-base">
                I am a motivated and adaptable Software Engineering
                undergraduate who has completed a Higher Diploma in Computing
                and Software Engineering and recently finished my BSc (Hons)
                Software Engineering, with final results pending confirmation.
                With a passion for problem-solving and continuous learning, I am
                eager to contribute effectively to a dynamic software
                engineering team while further advancing my professional
                expertise.
              </p>

              <p className="text-sm md:text-base">
                Through academic projects and self-learning, I have developed
                strong skills in full-stack development, API integration, and
                database management. Proficient in Java, JavaScript, React,
                Express.js, Spring Boot, and PostgreSQL, I enjoy designing and
                developing scalable, user-friendly applications.
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
             viewport={{ once: false }} 
            className="flex items-center justify-center"
          >
            <img
              src={heroImg}
              alt=""
              className="w-[250px] cursor-pointer rounded-full   shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:W-[350px] "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
