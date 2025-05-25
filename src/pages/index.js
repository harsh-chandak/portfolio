import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Experties from "../components/Experties";
import Contact from  "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <Navbar />
      <main className="relative max-w-6xl mx-auto px-4">
        
        <About />
        <Timeline />
        <Experties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
