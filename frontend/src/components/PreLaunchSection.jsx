import { preLaunchData } from "../data/mock";
import { Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

export const PreLaunchSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("signup-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
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
