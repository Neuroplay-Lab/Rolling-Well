"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Registration", href: "#registration" },
  { label: "Speakers & Schedule", href: "#speakers" },
  { label: "Organisers", href: "#organisers" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-3"
      }`}
      style={{
        background: scrolled ? "rgba(245,239,224,0.97)" : "rgba(245,239,224,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">
        <a href="#" className="shrink-0">
          <Image
            src="/logo-dice.png"
            alt="Rolling Well — Gaming for health and wellbeing"
            width={180}
            height={80}
            className="h-14 w-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.slice(0, 5).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-semibold text-[#2d2d2d] hover:text-[#29abe2] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          {/* TODO: Uncomment when registration opens */}
          {/* <li>
            <a
              href="#registration"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Register Now
            </a>
          </li> */}
        </ul>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 origin-center ${
                menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" :
                menuOpen && i === 1 ? "opacity-0 scale-x-0" :
                menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          ))}
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="bg-[#f5efe0] border-t border-black/8 px-5 pt-3 pb-5 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}
                className="block font-body font-semibold text-[#2d2d2d] hover:text-[#29abe2] py-2 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          {/* TODO: Uncomment when registration opens */}
          {/* <li className="pt-3">
            <a href="#registration" onClick={() => setMenuOpen(false)} className="btn-primary block text-center !text-sm">
              Register Now
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
