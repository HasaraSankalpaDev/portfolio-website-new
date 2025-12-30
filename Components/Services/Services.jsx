"use client";
import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern websites using React, Next.js, HTML, CSS, and Tailwind CSS.",
    icon: <FaLaptopCode size={30} className="text-[#4988C4]" />,
  },
  {
    title: "Mobile Responsive Design",
    description:
      "Creating fully responsive websites that look great on all devices and screen sizes.",
    icon: <FaMobileAlt size={30} className="text-[#4988C4]" />,
  },
  {
    title: "Backend & API Development",
    description:
      "Developing scalable backend systems using Node.js, Express, MongoDB, MySQL, and PHP/Laravel.",
    icon: <FaServer size={30} className="text-[#4988C4]" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, modern, and user-friendly interfaces with Figma and Tailwind CSS.",
    icon: <FaPaintBrush size={30} className="text-[#4988C4]" />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="services" className="w-full py-24 bg-[#070e14] text-white">
      <div
        className="max-w-7xl mx-auto text-center md:text-left px-10 md:px-5 "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Heading */}
        <p className="text-sm font-semibold text-[#4988C4] uppercase tracking-wide mb-2">
          Services
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What I Offer
        </h2>

        <p className="text-white/80 mb-12 text-center md:text-left max-w-3xl">
          I provide a wide range of services to help you build modern,
          responsive, and scalable web applications.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                p-6 rounded-xl text-left
                bg-white/5 border border-white/10
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white/10
              "
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger effect
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
