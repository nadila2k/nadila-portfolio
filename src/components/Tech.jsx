import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import TechList from "./TechList";
import {
  SiExpress,
  SiPostgresql,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

export default function Tech() {
  const iconStyle =
    "cursor-pointer text-[80px] transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]";
  return (
    <div id="tech" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h2 className="text-4xl font-light text-white md:text-6xl">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5 ">
        <TechList>
          <FaHtml5 className={`${iconStyle} text-orange-500`} title="HTML" />
        </TechList>
        <TechList>
          <FaCss3Alt className={`${iconStyle} text-blue-500`} title="CSS" />
        </TechList>
        <TechList>
          {" "}
          <FaJs className={`${iconStyle} text-yellow-400`} title="JavaScript" />
        </TechList>
        <TechList>
          {" "}
          <FaReact className={`${iconStyle} text-cyan-400`} title="React" />
        </TechList>
        <TechList>
          {" "}
          <SiTailwindcss
            className={`${iconStyle} text-sky-400`}
            title="TailwindCSS"
          />
        </TechList>
        <TechList>
          {" "}
          <SiExpress
            className={`${iconStyle} text-gray-300`}
            title="Express.js"
          />
        </TechList>
        <TechList>
          {" "}
          <FaPhp className={`${iconStyle} text-indigo-600`} title="PHP" />
        </TechList>
        <TechList>
          {" "}
          <FaJava className={`${iconStyle} text-red-600`} title="Java" />
        </TechList>
        <TechList>
          {" "}
          <SiSpringboot
            className={`${iconStyle} text-green-500`}
            title="Spring Boot"
          />
        </TechList>
        <TechList>
          {" "}
          <FaDatabase className={`${iconStyle} text-gray-500`} title="SQL" />
        </TechList>
        <TechList>
          {" "}
          <SiPostgresql
            className={`${iconStyle} text-sky-700`}
            title="PostgreSQL"
          />
        </TechList>
        <TechList>
          {" "}
          <SiSupabase
            className={`${iconStyle} text-green-600`}
            title="Supabase"
          />
        </TechList>
        <div></div>
      </div>
    </div>
  );
}
