'use client';
import { useEffect } from 'react';

export default function Tabs({ activeFile, setShowResume }) {
  const files = [
    { label: 'hero.js', href: '#hero.js' },
    { label: 'about.js', href: '#about' },
    { label: 'timeline.js', href: '#timeline.js' },
    { label: 'projects', href: '#projects' },
    { label: 'expertise.js', href: '#expertise' },
    { label: 'contact.js', href: '#contact' },
    { label: 'resume.pdf', href: '#resume' },
  ];

  const normalized = (str) =>
    str.replace('.js', '').replace('.pdf', '').replace('.jsx', '').toLowerCase();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');

    if (id === 'resume.pdf' && setShowResume) {
      setShowResume(true);
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="overflow-x-auto border-b border-gray-700 bg-[#1e1e1e] scrollbar-thin">
      <div className="flex min-w-max">
        {files.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => scrollToSection(e, href)}
            className={`px-4 py-2 border-r border-gray-700 whitespace-nowrap cursor-pointer ${
              normalized(label) === normalized(activeFile)
                ? 'bg-[#252526] text-white'
                : 'hover:bg-[#2a2d2e] text-gray-400'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
