import { solutionData } from "../data/mock";
import { Check } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
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

        {/* Visual Board Preview */}
        <div className="mt-16 max-w-lg mx-auto">
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
                  className="aspect-square rounded-md transition-transform duration-200 hover:scale-110"
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
          </div>
        </div>
      </div>
    </section>
  );
};
