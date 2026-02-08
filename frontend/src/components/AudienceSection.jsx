import { audienceData } from "../data/mock";
import { MapPin, Building2, Briefcase } from "lucide-react";

const iconMap = {
  MapPin,
  Building2,
  Briefcase,
};

const AUDIENCE_IMAGES = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80&auto=format",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&auto=format",
];

export const AudienceSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative building outlines */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <rect x="20" y="40" width="60" height="160" rx="4" stroke="#1565C0" strokeWidth="2" />
          <rect x="100" y="80" width="80" height="120" rx="4" stroke="#1565C0" strokeWidth="2" />
          <rect x="30" y="55" width="12" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="50" y="55" width="12" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="30" y="75" width="12" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="50" y="75" width="12" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="110" y="95" width="14" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="134" y="95" width="14" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
          <rect x="158" y="95" width="14" height="10" rx="1" stroke="#1565C0" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#1565C0] mb-3">
            Who It's For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {audienceData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {audienceData.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 overflow-hidden"
              >
                {/* Image strip at top */}
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={AUDIENCE_IMAGES[index]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
                </div>

                <div className="text-center px-6 pb-8 -mt-6 relative">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 border-4 border-white flex items-center justify-center shadow-sm group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#1565C0]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
