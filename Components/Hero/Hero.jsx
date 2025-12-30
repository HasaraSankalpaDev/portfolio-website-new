"use client";
import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaWordpress,
  FaServer,
  FaFacebook,
  FaCode,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const TypewriterWithIcons = () => {
  const items = [
    {
      text: "Full Stack Web Developer",
      icon: <FaCode className="inline text-[#4988C4] mr-4" />,
    },
    {
      text: "React Developer",
      icon: <FaReact className="inline text-[#61DAFB] mr-4" />,
    },
    {
      text: "Next.js Developer",
      icon: <SiNextdotjs className="inline text-[#4988C4] mr-4" />,
    },
    {
      text: "Backend Developer",
      icon: <FaServer className="inline text-[#4988C4] mr-4" />,
    },
    {
      text: "WordPress Developer",
      icon: <FaWordpress className="inline text-[#21759B] mr-4" />,
    },
    {
      text: "Social Media Manager",
      icon: <FaFacebook className="inline text-[#4267B2] mr-4" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const { text } = items[currentIndex];

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === text.length) {
        clearInterval(interval);
        setTimeout(
          () => setCurrentIndex((prev) => (prev + 1) % items.length),
          1400
        );
      }
    }, 90);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
      {items[currentIndex].icon}
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </h2>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="w-full pt-28 pb-24 bg-[#070e14] text-white" id="home">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* IMAGE */}
        <div
          className="order-1 md:order-2 flex justify-center md:justify-end px-10 md:px-0"
          data-aos="fade-up"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#4988C4]/10 rounded-md -z-10 translate-x-4 translate-y-4" />
            <img
              src="/04.png"
              alt="Hasara Sankalpa"
              className="w-full sm:w-80 md:w-[420px] rounded-md object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          className="order-2 md:order-1 text-center md:text-left px-10 md:px-0"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold bg-gradient-to-r from-[#4988C4] via-[#6FA3D8] to-[#A9C8E8] bg-clip-text text-transparent mb-3 uppercase tracking-wide">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-[#4988C4] via-[#6FA3D8] to-[#A9C8E8] bg-clip-text text-transparent">
              Hasara Sankalpa
            </span>
          </h1>

          <p className="text-white/80 text-lg max-w-xl mx-auto md:mx-0 mb-6 my-8">
            I build modern, fast, and scalable web applications with clean UI
            and strong backend architecture.
          </p>

          {/* Typewriter with icons first */}
          <TypewriterWithIcons />

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start mb-10 mt-12">
            <a
              href="https://api.whatsapp.com/send/?phone=94762160410&text&type=phone_number&app_absent=0"
              className="px-6 py-3 rounded-md font-semibold text-white bg-[#4988C4] hover:bg-[#4988C4]/90 transition"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-md font-semibold text-white border border-white/20 hover:bg-white/10 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
