import { footerData, siteConfig } from "../data/mock";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 bg-white rounded-lg px-4 py-2 inline-block">
            <img
              src={LOGO_URL}
              alt={siteConfig.name}
              className="h-14 w-auto object-contain"
            />
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
