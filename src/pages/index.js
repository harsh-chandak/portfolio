'use client';
import { useEffect, useRef, useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Experties from "../components/Experties";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import VSCodeLayout from "../components/VSCodeLayout";

export default function MainPage() {
  const [activeFile, setActiveFile] = useState("hero.js");

  const sections = {
    "hero.js": useRef(null),
    "about.js": useRef(null),
    "timeline.js": useRef(null),
    "projects.js": useRef(null),
    "experties.js": useRef(null),
    "contact.js": useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          setActiveFile(id);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <VSCodeLayout activeFile={activeFile}>
      <section id="hero.js" ref={sections["hero.js"]}>
        <Hero />
      </section>
      <section id="about.js" ref={sections["about.js"]}>
        <About />
      </section>
      <section id="timeline.js" ref={sections["timeline.js"]}>
        <Timeline />
      </section>
      <section id="projects.js" ref={sections["projects.js"]}>
        <Projects />
      </section>
      <section id="experties.js" ref={sections["experties.js"]}>
        <Experties />
      </section>
      <section id="contact.js" ref={sections["contact.js"]}>
        <Contact />
      </section>
      <Footer />
    </VSCodeLayout>
  );
}
