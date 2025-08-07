'use client';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="resume"
      className="bg-[#1e1e1e] text-white font-mono flex min-h-[90vh] px-4 flex-1 max-w-full sm:max-w-5xl min-h-screen"
    >
      <div className="w-full">
        {!isMobile ? (
          <iframe
            src="/Harsh_Chandak_Resume.pdf"
            className="w-full min-h-[80vh] border-none"
            title="Resume PDF"
          ></iframe>
        ) : (
          <div className="w-full flex flex-col justify-center items-center py-10 text-center">
            <p className="text-gray-400 mb-4">
              PDF preview isn't supported on some mobile devices.
            </p>
            <a
              href="/Harsh_Chandak_Resume.pdf"
              download
              className="px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            >
              📄 Download Resume
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
