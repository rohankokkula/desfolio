// src/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const getLinkClass = (path) =>
    router.pathname === path
      ? 'py-4 px-2 text-indigo-500 border-b-4 border-indigo-500 font-semibold'
      : 'py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-indigo-500 transition duration-300';

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" legacyBehavior>
                <a className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">RK</span>
                </a>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" legacyBehavior>
                <a className={getLinkClass('/')}>Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className={getLinkClass('/about')}>About</a>
              </Link>
              <Link href="/services" legacyBehavior>
                <a className={getLinkClass('/services')}>Services</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className={getLinkClass('/contact')}>Contact</a>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" legacyBehavior>
          <a className={`block text-sm px-2 py-4 ${router.pathname === '/' ? 'text-white bg-indigo-500' : 'text-gray-500 hover:bg-indigo-500 hover:text-white transition duration-300'}`}>
            Home
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={`block text-sm px-2 py-4 ${router.pathname === '/about' ? 'text-white bg-indigo-500' : 'text-gray-500 hover:bg-indigo-500 hover:text-white transition duration-300'}`}>
            About
          </a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a className={`block text-sm px-2 py-4 ${router.pathname === '/services' ? 'text-white bg-indigo-500' : 'text-gray-500 hover:bg-indigo-500 hover:text-white transition duration-300'}`}>
            Services
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={`block text-sm px-2 py-4 ${router.pathname === '/contact' ? 'text-white bg-indigo-500' : 'text-gray-500 hover:bg-indigo-500 hover:text-white transition duration-300'}`}>
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
