"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll manually (do NOT use old custom hook)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 
        bg-primary hover:bg-primary-dark 
        text-white w-12 h-12 rounded-full 
        flex items-center justify-center 
        shadow-lg transition-all duration-300
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
