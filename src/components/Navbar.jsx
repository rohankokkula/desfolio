import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) =>
    `text-${theme === 'dark' ? 'white' : 'black'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
      router.pathname === path ? 'font-bold' : ''
    } transition-colors duration-300`;

  return (
    <nav
      className={`${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
    <span className="inline-block transform scale-x-[-1]">R</span>K</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/design" className={getLinkClass('/design')}>
                  Design
                </Link>
                <Link href="/devrel" className={getLinkClass('/devrel')}>
                  Devrel
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={toggleTheme}
              className={`${
                theme === 'dark'
                  ? 'text-white'
                  : 'text-black hover:text-gray-800'
              } px-3 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-300`}
            >
              {theme === 'dark' ? 'Sun' : 'Moon'}
            </button>
            <button
              onClick={toggleMenu}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         
          <Link href="/design" className={getLinkClass('/design')}>
            Design
          </Link>
          <Link href="/devrel" className={getLinkClass('/devrel')}>
            Devrel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
