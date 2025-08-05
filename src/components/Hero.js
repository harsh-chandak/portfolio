'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero.js" className="min-h-screen flex items-center justify-center pl-64 bg-[#1e1e1e] text-white font-code relative">
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
              <a href="#about" className="hover:underline hover:text-blue-200"> Open <strong>about.js</strong></a>
            </li>
            <li>
              <a href="#projects" className="hover:underline hover:text-blue-200"> Open <strong>projects.js</strong></a>
            </li>
            <li>
              <a href="#expertise" className="hover:underline hover:text-blue-200"> Open <strong>expertise.js</strong></a>
            </li>
            <li>
              <a href="/Harsh_Chandak_Resume.pdf" target="_blank" className="hover:underline hover:text-blue-200"> 📄 View Resume</a>
            </li>
          </ul>
        </div>

        {/* 🎤 Right column: about + quote */}
        <div>
          <h2 className="text-xl text-gray-200 font-semibold mb-4">Welcome</h2>
          <p className="text-gray-400 text-[15px] mb-4">
            Hello! I'm <span className="text-red-400 font-semibold">Harsh</span>, full-stack dev & system optimizer.
          </p>
          <p className="text-gray-400 text-[15px] mb-4">
            (You’ve entered my dev space — where bugs tremble and containers align.)
          </p>
          <blockquote className="text-sm italic text-gray-500 border-l-4 border-red-500 pl-4 mt-4">
            "Good code is like a good joke — if you have to explain it, it’s probably yours." <br />– Harsh N. Chandak
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
}
