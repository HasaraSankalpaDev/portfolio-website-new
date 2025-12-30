"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menu = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      menu.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070e14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white">
          Hasara
          <span className=" bg-gradient-to-r from-[#4988C4] via-[#6FA3D8] to-[#A9C8E8] bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 text-[15px] font-medium">
          {menu.map((item) => {
            const key = item.toLowerCase();
            const isActive = active === key;

            return (
              <li key={item}>
                <Link
                  href={`/#${key}`}
                  className={`
                    px-4 py-2 rounded-md transition-all duration-200
                    ${
                      isActive
                        ? "text-white bg-[#4988C4]"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Button */}
        <Link
          href="https://api.whatsapp.com/send/?phone=94762160410&text&type=phone_number&app_absent=0"
          className="hidden md:inline-flex px-8 py-2 rounded-sm text-sm font-semibold text-white bg-[#4988C4] hover:bg-[#4988C4]/90"
        >
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#070e14] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-6 text-[16px] font-medium">
          {menu.map((item) => {
            const key = item.toLowerCase();
            const isActive = active === key;

            return (
              <li key={item}>
                <Link
                  href={`/#${key}`}
                  onClick={() => setOpen(false)}
                  className={`
                    block px-4 py-3 rounded-sm transition
                    ${
                      isActive
                        ? "bg-[#4988C4] text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          <Link
            href="https://api.whatsapp.com/send/?phone=94762160410&text&type=phone_number&app_absent=0"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-sm font-semibold text-white bg-[#4988C4]"
          >
            Hire Me
          </Link>
        </ul>
      </div>
    </nav>
  );
}
