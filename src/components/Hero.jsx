import React from "react";
import profileImage from "../../public/cv.jpg";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      id="hero"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <img
            src={profileImage}
            alt=""
            className="w-[250px] cursor-pointer rounded-full   shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:W-[350px] "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-4 text-center"
        >
          <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 font-light md:text-7xl ">
            Nadila Nawod
          </h1>
          <h3 className="bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100 font-light md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-300">
            Subject: Clarification on CIS 6035 Final Project Submission –
            November 2024 Intake Dear Madushan Fonseka, I hope you are doing
            well. I am writing to clarify the submission requirements for CIS
            6035 – Development Project (Final Project), November 2024 Intake. On
            Moodle, the submission portal for the project is now open and due on
            Sunday, 7 September 2025 at 2:00 PM. I would like to confirm: Do we
            need to upload our source code as a ZIP file directly to this
            submission portal? Regarding the final report, should we attach it
            along with the project files in this submission, or will it need to
            be uploaded later in the feedback section after this submission?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
