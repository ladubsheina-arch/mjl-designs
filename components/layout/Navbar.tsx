"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-zinc-200/50">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="transition hover:opacity-80"
          aria-label="Go to homepage"
        >
          <h1 className="font-serif text-3xl leading-none">MJL</h1>
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-600">
            Designs
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden gap-10 text-sm uppercase tracking-[0.22em] md:flex">
          <li>
            <Link href="/" className="transition hover:text-[#7B9482]">
              Home
            </Link>
          </li>

          <li>
            <a href="/#services" className="transition hover:text-[#7B9482]">
              Services
            </a>
          </li>

          <li>
            <a href="/#portfolio" className="transition hover:text-[#7B9482]">
              Portfolio
            </a>
          </li>

          <li>
            <a href="/#about" className="transition hover:text-[#7B9482]">
              About
            </a>
          </li>

          <li>
            <a href="/#contact" className="transition hover:text-[#7B9482]">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden rounded-full border border-[#7B9482] px-7 py-3 text-sm uppercase tracking-[0.15em] transition hover:bg-[#7B9482] hover:text-white lg:block"
        >
          Let's Work Together
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl leading-none text-[#2E3A34]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 border-t border-zinc-200" : "max-h-0"
        }`}
      >
        <div className="bg-[#FAFAF8] px-6 py-6">
          <ul className="flex flex-col gap-6 text-sm uppercase tracking-[0.22em]">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <a href="/#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="/#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="/#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="/#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <a
            href="/#contact"
            onClick={closeMenu}
            className="mt-8 inline-flex rounded-full border border-[#7B9482] px-6 py-3 text-sm uppercase tracking-[0.15em] transition hover:bg-[#7B9482] hover:text-white"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </header>
  );
}