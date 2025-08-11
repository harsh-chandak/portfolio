'use client';

import { useState, useRef } from 'react';
import {
  VscJson,
  VscFilePdf,
  VscFileCode,
  VscFile,
} from 'react-icons/vsc';
import {
  ChevronDown,
  ChevronRight,
  Folder,
} from 'lucide-react';
import { projects } from './Projects';

const getFileIcon = (filename) => {
  if (filename.endsWith('.json')) return <VscJson className="text-blue-400" />;
  if (filename.endsWith('.pdf')) return <VscFilePdf className="text-red-500" />;
  if (filename.endsWith('.js') || filename.endsWith('.mjs')) return <VscFileCode className="text-yellow-400" />;
  return <VscFile className="text-blue-400" />;
};

const gitColorClasses = [
  'text-yellow-300', // modified
  'text-green-400',  // added
  'text-white',      // unchanged
  'text-white',
  'text-white',
];

export default function Navbar({ setShowResume, onLinkClick }) {
  const [isOpen, setIsOpen] = useState({
    src: true,
    projects: true,
  });

  // 🧠 Store color mapping for this session
  const fileColors = useRef({});

  const assignColor = (file) => {
    if (!fileColors.current[file]) {
      const rand = Math.floor(Math.random() * gitColorClasses.length);
      fileColors.current[file] = gitColorClasses[rand];
    }
    return fileColors.current[file];
  };

  const toggle = (folder) => {
    setIsOpen((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const handleNavigate = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onLinkClick) onLinkClick();
  };

  const projectLinks = projects.map((proj) => {
    const id = proj.name.toLowerCase();
    return { id, name: proj.name };
  });

  return (
    <aside className="w-64 bg-[#1e1e1e] text-gray-300 fixed inset-y-0 left-0 z-50 border-r border-gray-700 flex flex-col">
      <div className="px-4 py-2 font-semibold text-sm text-white border-b border-gray-700">
        EXPLORER
      </div>

      <div className="px-4 py-2 flex-1 overflow-y-auto font-mono text-sm">
        <div className="mb-1">
          <button
            onClick={() => toggle('src')}
            className="flex items-center gap-1 w-full text-left"
          >
            {isOpen.src ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder className="text-yellow-400" size={16} />
            <span>src</span>
          </button>

          {isOpen.src && (
            <div className="pl-6 mt-1 space-y-1">
              {['hero.js', 'about.js', 'timeline.js'].map((file) => (
                <div key={file} className="flex items-center gap-1">
                  {getFileIcon(file)}
                  <a
                    href={`#${file}`}
                    onClick={(e) => handleNavigate(e, file)}
                    className={`hover:underline ${assignColor(file)}`}
                  >
                    {file}
                  </a>
                </div>
              ))}

              {/* projects folder */}
              <button
                onClick={() => toggle('projects')}
                className="flex items-center gap-1 w-full text-left mt-2"
              >
                {isOpen.projects ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder className="text-yellow-400" size={16} />
                <span>projects</span>
              </button>

              {isOpen.projects && (
                <div className="pl-6 mt-1 space-y-1 max-h-[300px] overflow-y-auto">
                  {projectLinks.map(({ id, name }, index) => (
                    <div key={id} className="flex items-center gap-1">
                      {getFileIcon(`${name}.json`)}
                      <a
                        href={`#${index === 0 ? 'projects' : projectLinks[index - 1].id}`}
                        onClick={(e) => handleNavigate(e, index === 0 ? 'projects' : projectLinks[index - 1].id)}
                        className={`hover:underline ${assignColor(name)}`}
                      >
                        {name}
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {['expertise.js', 'contact.js'].map((file) => (
                <div key={file} className="flex items-center gap-1">
                  {getFileIcon(file)}
                  <a
                    href={`#${file}`}
                    onClick={(e) => handleNavigate(e, file)}
                    className={`hover:underline ${assignColor(file)}`}
                  >
                    {file}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-3">
        <div className="flex items-center gap-1 text-sm">
          {getFileIcon('resume.pdf')}
          <a
            href="#resume.pdf"
            onClick={(e) => handleNavigate(e, 'resume.pdf')}
            className={`hover:underline ${assignColor('resume.pdf')}`}
          >
            resume.pdf
          </a>
        </div>
      </div>
    </aside>
  );
}
