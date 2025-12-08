// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#teachers", label: "Faculty" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  // Close mobile menu on scroll a bit (optional, same behavior feel)
  useEffect(() => {
    if (scrollY > 50 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [scrollY, isMobileMenuOpen]);

  return (
    <header
      className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 100 ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Title */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-primary">Excellence</span>{" "}
              <span className="text-gray-800">Academy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              Enquire Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-2 w-full text-center px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enquire Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
