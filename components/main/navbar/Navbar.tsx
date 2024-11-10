"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../../shared/Container";
import { menuItems } from "@/data/menuitems";
import { trackEvent } from "@/lib/analytics";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleBookCall = () => {
    trackEvent("Book Call Pressed", {
      ButtonLocation: "Navbar",
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };
  return (
    <div className="mt-20">
      <nav className="w-full top-0 left-0 z-50 fixed backdrop-blur-lg">
        <Container>
          <header className="flex flex-col lg:flex-row justify-between items-center my-5">
            <div className="flex w-full lg:w-auto items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse text-4xl font-bold"
              >
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
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full lg:w-auto lg:flex lg:mt-0 rounded-[20px]`}
            >
              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-[20px] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block py-2 px-3  rounded lg:bg-transparent lg:p-0 hover:text-gray-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <div className="lg:hidden flex items-center justify-center mt-3 gap-4">
                  <Link href="https://cal.com/acex-labs" target="_blank">
                    <button
                      onClick={handleBookCall}
                      className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70"
                    >
                      Book a call
                    </button>
                  </Link>
                </div>
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="https://cal.com/acex-labs" target="_blank">
                <button
                  onClick={handleBookCall}
                  className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70"
                >
                  Book a call
                </button>
              </Link>
            </div>
          </header>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;
