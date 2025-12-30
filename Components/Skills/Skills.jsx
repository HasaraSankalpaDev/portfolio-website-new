"use client";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    level: 88,
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
  },
  { name: "React.js", level: 85, icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-[#339933]" /> },
  {
    name: "MongoDB",
    level: 70,
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  { name: "PHP", level: 65, icon: <FaPhp className="text-[#777BB4]" /> },
  {
    name: "Laravel",
    level: 60,
    icon: <FaLaravel className="text-[#FF2D20]" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    name: "TypeScript",
    level: 70,
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
];

const SkillsBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animation occurs only once
    });
  }, []);

  return (
    <section id="skills" className="w-full py-24 bg-[#070e14] text-white">
      <div className="max-w-7xl mx-auto px-10 md:px-5">
        {/* Heading */}
        <div
          className="mb-12 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-sm font-semibold text-[#4988C4] uppercase tracking-wide mb-2">
            Skills & Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            My Skills
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto md:mx-0">
            I have worked with a variety of technologies to build modern,
            scalable, and responsive web applications. Here are some of the
            skills I excel in:
          </p>
        </div>

        {/* Skills Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 100} // staggered animation
            >
              <div className="flex justify-between mb-1 items-center">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-white/90 font-medium">
                    {skill.name}
                  </span>
                </div>
                <span className="text-white/60">{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-md overflow-hidden">
                <div
                  className="h-3 bg-[#4988C4] rounded-md transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBar;
