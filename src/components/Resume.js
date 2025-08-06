'use client';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
  }, []);

  return (
    <section id="resume.pdf" className="bg-[#1e1e1e] text-gray-200 font-mono flex min-h-[90vh] px-4 flex-1 max-w-5xl ">
      <div className="w-full max-w-5xl h-[85vh] bg-white rounded-md  relative">
        {!isMobile ? (
          <iframe
            src="/Harsh_Chandak_Resume.pdf"
            className="w-full h-full"
          ></iframe>
        ) : (
          <div className="h-full w-full flex flex-col justify-center items-center p-4 text-center">
            <p className="text-gray-800 mb-4">PDF preview isn't supported on some mobile devices.</p>
            <a
              href="/Harsh_Chandak_Resume.pdf"
              download
              className="px-6 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600"
            >
              📄 Download Resume
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
