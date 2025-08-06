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
import { projects } from "../components/Projects";
import Resume from "../components/Resume";

export default function MainPage() {
  const [activeFile, setActiveFile] = useState("hero.js");
  const sections = {
    "hero.js": useRef(null),
    "about.js": useRef(null),
    "timeline.js": useRef(null),
    "projects.js": useRef(null),
    "experties.js": useRef(null),
    "contact.js": useRef(null),
    "resume.pdf": useRef(null)
  };

  const projectRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (id.endsWith(".json")) {
            setActiveFile("projects");
          } else {
            setActiveFile(id); // hero.js, about.js, etc.
          }
        }
      },
      { threshold: 0.3 }
    );

    Object.entries(sections).forEach(([id, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Observe each project
    Object.entries(projectRefs.current).forEach(([id, ref]) => {
      if (ref) observer.observe(ref);
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
        <Projects projectRefs={projectRefs} />
      </section>
      <section id="experties.js" ref={sections["experties.js"]}>
        <Experties />
      </section>
      <section id="contact.js" ref={sections["contact.js"]}>
        <Contact />
      </section>
      <section id="resume.pdf" ref={sections["resume.pdf"]}>
        <Resume />
      </section>
      <Footer />
    </VSCodeLayout>
  );
}
