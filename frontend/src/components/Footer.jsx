import { footerData, siteConfig } from "../data/mock";
import { LayoutDashboard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-semibold text-white tracking-tight">
              {siteConfig.name}
            </span>
          </div>

          <p className="text-sm text-slate-400 mb-1">
            {footerData.copyright}
          </p>
          <p className="text-sm text-slate-500 mb-1">
            {footerData.poweredBy}
          </p>
          <p className="text-xs text-slate-600">
            {footerData.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
