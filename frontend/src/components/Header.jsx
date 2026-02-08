"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "../data/mock";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("signup-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => router.push("/")} className="flex items-center gap-1 cursor-pointer">
          <img
            src={LOGO_URL}
            alt={siteConfig.name}
            className="h-16 w-auto object-contain"
          />
        </button>
        <button
          onClick={scrollToForm}
          className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[#1565C0] rounded-lg hover:bg-[#0D47A1] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get Early Access
        </button>
      </div>
    </header>
  );
};
