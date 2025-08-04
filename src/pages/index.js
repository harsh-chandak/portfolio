import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Experties from "../components/Experties";
import Contact from  "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  return (
    
    <div className="bg-[#101319] text-white min-h-screen">
      
      <Hero />
      <Navbar />
      <main className="relative max-w-6xl mx-auto px-4">
        
        <About />
        <Timeline />
        <Projects />
        <Experties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
