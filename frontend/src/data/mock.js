export const siteConfig = {
  name: "SiteBoard",
  tagline: "Your Project. One Board.",
  poweredBy: "Aiclex Technologies",
  domain: "SiteBoard.in",
};

export const heroData = {
  headline: "Stop guessing which plot is available.",
  subheadline:
    "One simple board to see project-wise plot status — Available, Booked, Sold — in real time.",
  cta: "Join Pre-Launch Access",
};

export const problemData = {
  title: "Sound familiar?",
  items: [
    {
      text: "Managing plots on Excel and registers",
      icon: "FileSpreadsheet",
    },
    {
      text: "Confusion between booked and sold plots",
      icon: "AlertTriangle",
    },
    {
      text: 'Daily calls asking "Which plot is available?"',
      icon: "PhoneCall",
    },
    {
      text: "Risk of double booking",
      icon: "ShieldAlert",
    },
  ],
};

export const solutionData = {
  title: "One board. Complete clarity.",
  description:
    "SiteBoard gives you a single, clear view of your entire project. No updates by agents. No confusion. Just visibility.",
  indicators: [
    { label: "Available", color: "#16A34A", bgColor: "#DCFCE7" },
    { label: "Booked", color: "#CA8A04", bgColor: "#FEF9C3" },
    { label: "Sold", color: "#DC2626", bgColor: "#FEE2E2" },
  ],
};

export const audienceData = {
  title: "Built for people who build.",
  items: [
    {
      title: "Plotting Project Owners",
      description: "Track every plot across your layout with zero confusion.",
      icon: "MapPin",
    },
    {
      title: "Real Estate Developers",
      description: "Get real-time status across all your active projects.",
      icon: "Building2",
    },
    {
      title: "Builder Companies",
      description: "Manage multiple projects and teams from one place.",
      icon: "Briefcase",
    },
  ],
};

export const preLaunchData = {
  title: "We're in private pre-launch.",
  description:
    "SiteBoard is currently in private pre-launch. We are inviting selected real estate companies to help us shape the product.",
  badge: "Pre-Launch",
};

export const formData = {
  title: "Request Early Access",
  subtitle: "Be among the first to experience SiteBoard.",
  fields: [
    { name: "name", label: "Name", placeholder: "Your full name", type: "text" },
    { name: "companyName", label: "Company Name", placeholder: "Your company name", type: "text" },
    { name: "city", label: "City", placeholder: "e.g. Pune, Mumbai, Ahmedabad", type: "text" },
    { name: "whatsapp", label: "WhatsApp Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
  ],
  button: "Request Early Access",
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} SiteBoard.in`,
  poweredBy: "Powered by Aiclex Technologies",
  tagline: "Pre-launch version | India-focused real estate system",
};
