"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 text-zinc-900 backdrop-blur-md border-b border-zinc-100/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col group select-none">
          <span className="text-[9px] font-bold tracking-[0.25em] text-zinc-400 uppercase font-sans mb-0.5">
            Web Developer
          </span>
          <span className="text-base font-medium text-zinc-900 font-serif italic tracking-wide capitalize leading-tight">
            Thabata Denise
            <span className="text-blue-600 font-sans not-italic font-bold mx-0.5">
              .
            </span>
            Monteiro
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 font-bold text-[11px] uppercase tracking-widest text-zinc-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-zinc-700 hover:text-blue-600 transition-colors focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 py-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 font-bold text-[11px] uppercase tracking-widest text-zinc-600">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
