"use client";

import { preLaunchData } from "../data/mock";
import { Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const CONSTRUCTION_IMG = "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?w=1200&q=80&auto=compress";

export const PreLaunchSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("signup-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background image strip */}
      <div className="absolute inset-0">
        <img
          src={CONSTRUCTION_IMG}
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-[0.06]">
        <svg viewBox="0 0 100 100" fill="none">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="3" fill="#1565C0" />
            ))
          )}
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-[0.06]">
        <svg viewBox="0 0 100 100" fill="none">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="3" fill="#1565C0" />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-100 hover:bg-amber-50"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
          {preLaunchData.badge}
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          {preLaunchData.title}
        </h2>

        <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-10">
          {preLaunchData.description}
        </p>

        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#1565C0] bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Apply for Early Access
        </button>
      </div>
    </section>
  );
};
