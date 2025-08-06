'use client';
import { useEffect } from 'react';

export default function Tabs({ activeFile, setShowResume }) {
  const files = [
    { label: 'hero.js', href: '#hero.js' },
    { label: 'about.js', href: '#about' },
    { label: 'timeline.js', href: '#timeline' },
    { label: 'projects', href: '#projects' },
    { label: 'experties.js', href: '#expertise' },
    { label: 'contact.js', href: '#contact' },
    { label: 'resume.pdf', href: '#resume.pdf' }, // this assumes you've created Resume section
  ];

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
    <div className="flex bg-[#1e1e1e] border-b border-gray-700 text-sm font-code">
      {files.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => scrollToSection(e, href)}
          className={`px-4 py-2 border-r border-gray-700 cursor-pointer ${label === activeFile
            ? 'bg-[#252526] text-white'
            : 'hover:bg-[#2a2d2e] text-gray-400'
            }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
