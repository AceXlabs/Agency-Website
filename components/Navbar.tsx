
"use client"
import { useState } from 'react';

import Link from 'next/link';

import Container from './Container';

interface MenuItem {
  href: string;
  label: string;
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { href: '/about', label: 'About us' },
    { href: '/#services', label: 'Services' },
    { href: '/#projects', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/articles', label: 'Blog' },
  ];

  const navButton = {
    href: '/',
    label: 'Request a quote'
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mt-20">
      <nav className="w-full top-0 left-0 z-50 fixed backdrop-blur-lg">
        <Container>
          <header className="flex flex-col lg:flex-row justify-between items-center my-5">
            <div className="flex w-full lg:w-auto items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-4xl font-bold">
                {/* <Image 
                  src="/Logo.svg" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto"
                /> */}
                AceXlabs
              </Link>
              <button
                className="block lg:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-8 h-8 "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" 
                    
                    />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } w-full lg:w-auto lg:flex lg:mt-0 rounded-[20px]`}
            >
              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-[20px] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 px-3  rounded lg:bg-transparent lg:p-0 hover:text-gray-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <div className="lg:hidden flex items-center justify-center mt-3 gap-4">
                  <Link
                    className="px-9 py-5 rounded-2xl border border-gray-300   inline-flex transition-colors"
                    href={navButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-center text-xl font-normal leading-7">
                      {navButton.label}
                    </h2>
                  </Link>
                </div>
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                className="px-9 py-5 rounded-2xl border border-zinc-900 bg-white  text-black  inline-flex transition-colors"
                href={navButton.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-center text-xl font-normal leading-7">
                  {navButton.label}
                </h2>
              </Link>
            </div>
          </header>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;