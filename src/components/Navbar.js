// Sample responsive Tailwind-based Navbar with mobile menu toggle
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace with Heroicons or another icon lib

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/#" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
            <span className="text-lg font-semibold text-white hidden sm:inline">Harsh's Devfolio</span>
          </a>


          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-red-400">Home</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#timeline" className="hover:text-red-400">My Journey</a>
            <a href="#expertise" className="hover:text-red-400">Expertise</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-2 text-center">
          <a href="#" className="block hover:text-red-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-red-400" onClick={toggleMenu}>About</a>
          <a href="#timeline" className="block hover:text-red-400" onClick={toggleMenu}>My Journey</a>
          <a href="#expertise" className="block hover:text-red-400" onClick={toggleMenu}>Expertise</a>
          <a href="#contact" className="block hover:text-red-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}
