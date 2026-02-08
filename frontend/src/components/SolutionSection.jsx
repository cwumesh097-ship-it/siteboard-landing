import { solutionData } from "../data/mock";
import { Check } from "lucide-react";

const AERIAL_IMG = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format";

export const SolutionSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#1565C0 1px, transparent 1px), linear-gradient(90deg, #1565C0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#1565C0] mb-3">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            {solutionData.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {solutionData.description}
          </p>
        </div>

        {/* Plot Status Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-16">
          {solutionData.indicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
              style={{
                backgroundColor: indicator.bgColor,
                borderColor: `${indicator.color}30`,
              }}
            >
              <div
                className="w-4 h-4 rounded-full shadow-sm flex items-center justify-center"
                style={{ backgroundColor: indicator.color }}
              >
                {index === 2 && (
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                )}
              </div>
              <span
                className="text-base font-semibold"
                style={{ color: indicator.color }}
              >
                {indicator.label}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Board Preview with Real Estate Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Plot Board */}
          <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-semibold text-slate-800">Green Valley Layout</p>
                <p className="text-xs text-slate-400 mt-0.5">24 plots · Phase 1</p>
              </div>
              <div className="text-xs text-[#1565C0] font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Live
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[
                "green", "green", "yellow", "red", "green", "red",
                "red", "green", "green", "yellow", "red", "green",
                "yellow", "red", "green", "green", "green", "yellow",
                "red", "green", "yellow", "red", "red", "green",
              ].map((status, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md transition-transform duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor:
                      status === "green"
                        ? "#DCFCE7"
                        : status === "yellow"
                        ? "#FEF9C3"
                        : "#FEE2E2",
                    border: `1.5px solid ${
                      status === "green"
                        ? "#86EFAC"
                        : status === "yellow"
                        ? "#FDE047"
                        : "#FCA5A5"
                    }`,
                  }}
                />
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-green-400" />
                <span className="text-[10px] text-slate-400">Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-yellow-400" />
                <span className="text-[10px] text-slate-400">Booked</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                <span className="text-[10px] text-slate-400">Sold</span>
              </div>
            </div>
          </div>

          {/* Real Estate Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={AERIAL_IMG}
              alt="Modern real estate development"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm font-semibold mb-1">Real-time visibility</p>
              <p className="text-white/70 text-xs">
                See every plot's status across your projects — no phone calls needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
