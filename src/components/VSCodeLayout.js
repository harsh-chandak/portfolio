'use client';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TopBar from './TopBar';
import Tabs from './Tabs';
import StatusBar from './StatusBar';

export default function VSCodeLayout({ activeFile, children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] font-code text-gray-200 flex flex-col md:flex-row">
      {/* Sidebar */}
      {(showSidebar || !isMobile) && (
        <div
          className={`${isMobile
              ? 'fixed inset-y-0 left-0 w-64 z-50 h-full bg-[#1e1e1e] border-r border-gray-700'
              : 'w-64 border-r border-gray-700'
            } relative`}
        >
          {/* Close button inside the sidebar */}
          {isMobile && (
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded z-50"
            >
              ✖
            </button>
          )}
          <Navbar onLinkClick={() => setShowSidebar(false)} />
        </div>
      )}


      {/* Mobile Close Sidebar Button */}
      {isMobile && showSidebar && (
        <button
          onClick={() => setShowSidebar(false)}
          className="fixed top-1    right-3 z-50 bg-black bg-opacity-80 text-white px-2 py-1 rounded"
        >
          ✖
        </button>
      )}

      {/* Right Side (TopBar + Tabs + Main Content) */}
      <div className="flex flex-col flex-1 w-full">
        {/* TopBar + Tabs (sticky) */}
        <div className="sticky top-0 z-40 bg-[#1e1e1e]">
          {isMobile && (
            <button
              onClick={() => setShowSidebar(true)}
              className="p-2 w-full text-left text-white bg-[#007acc] md:hidden"
            >
              ☰ Open File Explorer
            </button>
          )}
          <TopBar activeFile={activeFile} />
          <Tabs activeFile={activeFile} />
        </div>

        {/* Main Scrollable Content */}
        <div className="flex-1 w-full h-full">{children}</div>

        {/* Status Bar */}
        <StatusBar />
      </div>
    </div>
  );
}
