import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/#") return null;

  else {
    return (
      <nav className="sticky top-0 z-50 bg-gray-800 px-6 py-4 shadow-md text-white">
        <div className="flex justify-end gap-8 text-lg">
          <a href="#" className="hover:text-red-400">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#timeline" className="hover:text-red-400">My Journey</a>
          <a href="#expertise" className="hover:text-red-400">Experties</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </div>
      </nav>
    );
  }
}