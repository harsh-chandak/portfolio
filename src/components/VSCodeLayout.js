import Navbar from './Navbar';
import TopBar from './TopBar';
import Tabs from './Tabs';
import StatusBar from './StatusBar';

export default function VSCodeLayout({ activeFile, children }) {
  return (
    <div className="flex min-h-screen bg-[#1e1e1e] font-code text-gray-200 overflow-hidden">
      {/* Left: Sidebar */}
      <Navbar activeFile={activeFile} />

      {/* Right: Editor-like content */}
      <div className="flex flex-col flex-1 max-h-screen overflow-hidden">
        {/* Top: TopBar + Tabs (fixed height) */}
        <div className="shrink-0 pl-64">
          <TopBar activeFile={activeFile} />
          <Tabs activeFile={activeFile} />
        </div>

        {/* Scrollable main area */}
        <main className="flex-1 overflow-y-auto pace-y-24 pl-64">
          {children}
        </main>

        {/* Bottom: Status bar */}
        <StatusBar />
      </div>
    </div>
  );
}
