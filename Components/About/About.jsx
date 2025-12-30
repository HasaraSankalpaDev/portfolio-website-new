"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const highlights = [
    "2+ Years Experience",
    "Modern UI/UX",
    "Scalable Backend",
    "Clean Code",
  ];

  return (
    <section id="about" className="w-full py-12 bg-[#070e14] text-white">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT – Image */}
        <div
          className="flex justify-center md:justify-start"
          data-aos="fade-up"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#4988C4]/10 rounded-md -z-10 translate-x-4 translate-y-4" />
            <img
              src="/about-2.png"
              alt="About Hasara Sankalpa"
              className="p-10 pl-0 rounded-md object-cover"
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div
          className="text-center px-10 md:px-5 md:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-sm font-semibold text-[#4988C4] uppercase tracking-wide mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Passionate{" "}
            <span className="bg-gradient-to-r from-[#4988C4] via-[#6FA3D8] to-[#A9C8E8] bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-5">
            I’m{" "}
            <span className="font-semibold text-white">Hasara Sankalpa</span>, a
            dedicated full-stack web developer focused on building modern,
            scalable, and user-friendly applications.
          </p>

          <p className="text-white/80 text-lg leading-relaxed mb-8">
            I work with technologies like React, Next.js, Node.js, and MongoDB,
            always aiming to deliver clean UI, smooth user experience, and
            reliable backend systems.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0 mb-8">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="px-4 py-3 rounded-md text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm text-white/80"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-md font-semibold text-white bg-[#4988C4] hover:bg-[#4988C4]/90 transition"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
