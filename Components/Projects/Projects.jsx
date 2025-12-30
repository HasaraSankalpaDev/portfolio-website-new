"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "NC Rent Car – Galle",
    description:
      "A professional car rental platform for Galle, with responsive UI and booking management.",
    image: "/nc.png",
    link: "https://ncrentcar.com/",
  },
  {
    title: "VDrive Car Rental – Kalutara",
    description:
      "A modern car rental website built with React and Next.js, optimized for mobile and desktop.",
    image: "/vdrive.png",
    link: "https://www.vdrivecarrental.com/",
  },
  {
    title: "Tango Cabs – Tangalle (Ongoing)",
    description:
      "Ongoing project for a taxi and tourism service in Tangalle, built with Next.js and React.",
    image: "/tango.png",
    link: "https://tangocabandtourism.vercel.app/",
  },
  {
    title: "Rocky Point Beach Resort (Ongoing)",
    description:
      "Ongoing resort website project with modern UI, responsive layout, and booking features.",
    image: "/rocky.png",
    link: "https://rocky-point-beach-front-pool-resort.vercel.app/",
  },
  {
    title: "Viora E-Commerce Store",
    description:
      "A full-featured e-commerce website for Viora, built with React, Next.js, and Stripe integration.",
    image: "/viora.png",
    link: "https://viora-deploy.vercel.app/",
  },
  {
    title: "NS Recovery Service – Malabe",
    description:
      "A professional vehicle recovery service website with modern UI and clear call-to-actions.",
    image: "/vingtow.png",
    link: "https://vingtow.com/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="w-full py-24 bg-[#070e14] text-white">
      <div
        className="max-w-7xl mx-auto text-center md:text-left px-10 md:px-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Heading */}
        <p className="text-sm font-semibold text-[#4988C4] uppercase tracking-wide mb-2">
          Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My Work</h2>

        <p className="text-white/80 mb-12 max-w-3xl mx-auto md:mx-0">
          Here are some of my recent projects where I applied my skills in web
          development and full-stack technologies.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                rounded-xl overflow-hidden
                bg-white/5 border border-white/10
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white/10
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-4 text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-4 py-2 rounded-md font-semibold
                             text-white bg-[#4988C4]
                             hover:bg-[#4988C4]/90 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
