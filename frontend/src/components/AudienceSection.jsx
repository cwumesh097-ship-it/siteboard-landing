import { audienceData } from "../data/mock";
import { MapPin, Building2, Briefcase } from "lucide-react";

const iconMap = {
  MapPin,
  Building2,
  Briefcase,
};

export const AudienceSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-700 mb-3">
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
                className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-50 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
