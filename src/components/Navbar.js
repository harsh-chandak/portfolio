'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, File } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState({
    src: true,
    components: true,
  });

  const toggle = (folder) => {
    setIsOpen((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <aside className="w-64 bg-[#1e1e1e] text-gray-300 h-screen fixed top-0 left-0 z-50 border-r border-gray-700">
      <div className="px-4 py-2 font-semibold text-sm text-white border-b border-gray-700">
        EXPLORER
      </div>
      <div className="px-4 py-2">
        {/* src folder */}
        <div className="mb-1">
          <button onClick={() => toggle('src')} className="flex items-center gap-1 w-full text-left">
            {isOpen.src ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder className="text-yellow-400" size={16} />
            <span className="text-sm font-mono">src</span>
          </button>
          {isOpen.src && (
            <div className="pl-6 mt-1 space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <File className="text-blue-300" size={14} />
                <a href="#hero.js">hero.js</a>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <File className="text-blue-300" size={14} />
                <a href="#about">about.js</a>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <File className="text-blue-300" size={14} />
                <a href="#projects">projects.js</a>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <File className="text-blue-300" size={14} />
                <a href="#expertise">expertise.js</a>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <File className="text-blue-300" size={14} />
                <a href="#contact">contact.js</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
