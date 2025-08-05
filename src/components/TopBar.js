// components/TopBar.jsx
export default function TopBar({ activeFile }) {
  return (
    <div className="bg-[#2d2d2d] h-9 flex items-center px-4 text-sm pl-64">
      <div className="flex items-center gap-2 mr-4">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <span className="truncate">
        Harsh’s DevSpace — /brain/src/{activeFile}
      </span>
    </div>
  );
}
