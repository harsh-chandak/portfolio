// components/Tabs.jsx
export default function Tabs({ activeFile }) {
  const files = ['hero.js', 'about.js', 'projects.js', 'resume.pdf'];

  return (
    <div className="flex bg-[#1e1e1e] border-b border-gray-700 text-sm font-code pl-64">
      {files.map((file) => (
        <div
          key={file}
          className={`px-4 py-2 border-r border-gray-700 cursor-pointer ${
            file === activeFile
              ? 'bg-[#252526] text-white'
              : 'hover:bg-[#2a2d2e] text-gray-400'
          }`}
        >
          {file}
        </div>
      ))}
    </div>
  );
}
