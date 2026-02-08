import { useState } from "react";
import { formData } from "../data/mock";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    companyName: "",
    city: "",
    whatsapp: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formValues.name.trim() || !formValues.companyName.trim() || !formValues.city.trim() || !formValues.whatsapp.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Mock submission - simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // Store in localStorage for mock persistence
      const existingEntries = JSON.parse(localStorage.getItem("siteboard_signups") || "[]");
      existingEntries.push({
        ...formValues,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("siteboard_signups", JSON.stringify(existingEntries));

      setSubmitted(true);
      toast.success("You're on the list! We'll reach out soon.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="signup-form" className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            You're on the list!
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Thank you for your interest in SiteBoard. We'll reach out to you on
            WhatsApp with next steps soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup-form" className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            {formData.title}
          </h2>
          <p className="text-base text-slate-500">
            {formData.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
        >
          <div className="space-y-5">
            {formData.fields.map((field) => (
              <div key={field.name}>
                <Label
                  htmlFor={field.name}
                  className="text-sm font-medium text-slate-700 mb-1.5 block"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formValues[field.name]}
                  onChange={handleChange}
                  className="h-11 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-slate-800 placeholder:text-slate-300"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-700 rounded-xl hover:bg-teal-800 transition-all duration-200 shadow-lg shadow-teal-700/15 hover:shadow-xl hover:shadow-teal-700/25 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <>
                {formData.button}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Your details are safe. We only use WhatsApp to reach out.
          </p>
        </form>
      </div>
    </section>
  );
};
