import { heroData, siteConfig } from "../data/mock";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";

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
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0F766E 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Soft glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Badge
          variant="secondary"
          className="mb-8 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-50"
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
          className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-teal-700 rounded-xl hover:bg-teal-800 transition-all duration-200 shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300 hover:text-slate-500 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xs tracking-wider uppercase">Learn more</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
