import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Nav from "@/Components/Nav/Nav";
import Projects from "@/Components/Projects/Projects";
import Services from "@/Components/Services/Services";
import Skills from "@/Components/Skills/Skills";
import React from "react";

function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
