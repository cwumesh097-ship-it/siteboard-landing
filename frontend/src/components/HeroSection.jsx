"use client";

import { heroData, siteConfig } from "../data/mock";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { BuildingSkyline } from "./graphics/RealEstateGraphics";

const BUILDING_IMG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format";

export const HeroSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("signup-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProblems = () => {
    const el = document.getElementById("problem-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle real estate image overlay */}
      <div className="absolute inset-0">
        <img
          src={BUILDING_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      {/* Grid pattern - plot layout feel */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#1565C0 1px, transparent 1px), linear-gradient(90deg, #1565C0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Soft glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />

      {/* Building skyline at bottom */}
      <BuildingSkyline className="absolute bottom-0 left-0 right-0 w-full h-48 text-[#1565C0]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Badge
          variant="secondary"
          className="mb-8 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-blue-50 text-[#1565C0] border border-blue-100 hover:bg-blue-50"
        >
          {siteConfig.tagline}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          {heroData.headline}
        </h1>

        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
          {heroData.subheadline}
        </p>

        <button
          onClick={scrollToForm}
          className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1565C0] rounded-xl hover:bg-[#0D47A1] transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          {heroData.cta}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        <p className="mt-5 text-sm text-slate-400">
          Free for early members · No credit card required
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProblems}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-300 hover:text-slate-500 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xs tracking-wider uppercase">Learn more</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
