'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero.js" className="min-h-screen flex items-center bg-[#1e1e1e] text-white font-code">
      <motion.div
        className="max-w-6xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🧩 Left column like VS Code shortcuts */}
        <div>
          <h2 className="text-xl text-gray-200 font-semibold mb-4">Start</h2>
          <ul className="space-y-3 text-[15px] text-blue-300">
            <li>
              <a href="#about.js" className="hover:underline hover:text-blue-200">
                <strong>about.js</strong>
              </a>
            </li>
            <li>
              <a href="#timeline.js" className="hover:underline hover:text-blue-200">
                <strong>timeline.js</strong>
              </a>
            </li>
            <li>
              <a href="#projects.js" className="hover:underline hover:text-blue-200">
                <strong>projects.js</strong>
              </a>
            </li>
            <li>
              <a href="#expertise" className="hover:underline hover:text-blue-200">
                <strong>expertise.js</strong>
              </a>
            </li>
            <li>
              <a href="#contact.js" className="hover:underline hover:text-blue-200">
                <strong>contact.js</strong>
              </a>
            </li>
            <li>
              <a
                href="#resume.pdf"
              >
                <strong>resume.pdf</strong>
              </a>
            </li>
          </ul>

        </div>

        {/* 🎤 Right column: about + quote */}
        <div>
          <h2 className="text-xl text-gray-200 font-semibold mb-4">Welcome</h2>
          <p className="text-gray-400 text-[15px] mb-4">
            Hello! I'm <span className="text-blue-500 font-semibold">Harsh N. Chandak</span>, full-stack dev & system optimizer.
          </p>
          <p className="text-gray-400 text-[15px] mb-4">
            (My name means "Happiness" in Hindi, I know it's ironic...)
          </p>
          <blockquote className="text-sm italic text-gray-500 border-l-4 border-blue-500 pl-4 mt-4">
            "Good code is like a good joke: if you have to explain it, you messed up."
            <div className="text-right mt-2">– Harsh N. Chandak</div>
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
}
