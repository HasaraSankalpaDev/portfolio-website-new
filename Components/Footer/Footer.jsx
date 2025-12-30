"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070e14] border-t border-white/10 py-10 text-white">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-2xl font-extrabold">
          Hasara<span className="text-[#4988C4]">.dev</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-white/80">
          <Link href="#hero" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white/80">
          <a
            href="https://github.com/HasaraSankalpaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4988C4] transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/hasara-sankalpa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4988C4] transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://twitter.com/HasaraSankalpa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4988C4] transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Hasara Sankalpa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
