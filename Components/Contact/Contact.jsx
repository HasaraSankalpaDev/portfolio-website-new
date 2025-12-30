"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) return;

    // WhatsApp link
    const phone = "94762160410"; // your number without '+'
    const whatsappMessage = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#070e14] text-white">
      <div className="max-w-7xl mx-auto px-10 md:px-5 text-center">
        {/* Heading */}
        <p
          className="text-sm font-semibold text-[#4988C4] uppercase tracking-wide mb-2"
          data-aos="fade-down"
        >
          Contact
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Get In Touch
        </h2>

        <p
          className="text-white/80 mb-12 max-w-2xl mx-auto"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Feel free to reach out for project inquiries or just to say hello!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid grid-cols-1 gap-6 text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="
              w-full px-4 py-3 rounded-md
              bg-white/5 border border-white/10
              text-white placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-[#4988C4]
            "
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="
              w-full px-4 py-3 rounded-md
              bg-white/5 border border-white/10
              text-white placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-[#4988C4]
            "
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="
              w-full px-4 py-3 rounded-md
              bg-white/5 border border-white/10
              text-white placeholder:text-white/50
              focus:outline-none focus:ring-2 focus:ring-[#4988C4]
            "
          />

          <button
            type="submit"
            className="
              px-6 py-3 rounded-md font-semibold
              bg-[#4988C4] text-white
              hover:bg-[#4988C4]/90 transition
            "
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            { title: "Email", value: "hasarasankalpa176@gmail.com" },
            { title: "Phone", value: "+94 76 216 0410" },
            { title: "Location", value: "Sri Lanka" },
          ].map((item) => (
            <div
              key={item.title}
              className="
                p-5 rounded-xl
                bg-white/5 border border-white/10
                backdrop-blur-sm
              "
            >
              <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
              <p className="text-white/70 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
