'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, File } from 'lucide-react';
import { projects } from './Projects';

export default function Navbar({ setShowResume }) {
  const [isOpen, setIsOpen] = useState({
    src: true,
    components: true,
  });

  const toggle = (folder) => {
    setIsOpen((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const projectLinks = projects.map((proj) => {
    const id = proj.name.toLowerCase();
    return { id, name: proj.name };
  });
  return (
    <aside className="w-64 bg-[#1e1e1e] text-gray-300 h-screen fixed top-0 left-0 z-50 border-r border-gray-700 flex flex-col">
      <div className="px-4 py-2 font-semibold text-sm text-white border-b border-gray-700">
        EXPLORER
      </div>
      <div className="px-4 py-2 flex-1 overflow-y-auto">
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
                <a href="#timeline">timeline.js</a>
              </div>
              {/* projects folder */}
              <button
                onClick={() => toggle('projects')}
                className="flex items-center gap-1 w-full text-left"
              >
                {isOpen.projects ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder className="text-yellow-400" size={16} />
                <span className="text-sm font-mono">projects</span>
              </button>
              {isOpen.projects && (
                <div className="pl-6 mt-1 space-y-1 max-h-[400px] overflow-y-auto">
                  {projectLinks.map(({ id, name }, index) => (
                    <div key={id} className="flex items-center gap-1 text-sm">
                      <File className="text-blue-300" size={14} />
                      {index === 0 ? (
                        // Special scroll for the first project
                        <a
                          href="#projects.js"
                          className="hover:underline"
                          onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById("projects.js");
                            if (section) {
                              section.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }}
                        >
                          {name}
                        </a>
                      ) : (
                        // Normal scroll for other projects
                        <a href={`#${id}`} className="hover:underline">
                          {name}
                        </a>
                      )}
                    </div>
                  ))}

                </div>
              )}
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
      {/* Bottom Section - Resume Button */}
      <div className="border-t border-gray-700 px-4 py-3">
        <div className="flex items-center gap-1 text-sm">
          <File className="text-blue-300" size={14} />
          <a href="#resume.pdf">resume.js</a>
        </div>
      </div>
    </aside>
  );
}
