import { problemData } from "../data/mock";
import {
  FileSpreadsheet,
  AlertTriangle,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

const iconMap = {
  FileSpreadsheet,
  AlertTriangle,
  PhoneCall,
  ShieldAlert,
};

export const ProblemSection = () => {
  return (
    <section
      id="problem-section"
      className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative plot outline */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.04]">
        <svg viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="80" height="60" rx="4" stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
          <rect x="100" y="10" width="80" height="60" rx="4" stroke="#16A34A" strokeWidth="2" />
          <rect x="10" y="80" width="80" height="60" rx="4" stroke="#CA8A04" strokeWidth="2" />
          <rect x="100" y="80" width="80" height="60" rx="4" stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
          <rect x="10" y="150" width="80" height="40" rx="4" stroke="#16A34A" strokeWidth="2" />
          <rect x="100" y="150" width="80" height="40" rx="4" stroke="#CA8A04" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#1565C0] mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {problemData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problemData.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-base text-slate-700 leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
