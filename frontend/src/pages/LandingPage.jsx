import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
import { AudienceSection } from "../components/AudienceSection";
import { PreLaunchSection } from "../components/PreLaunchSection";
import { SignupForm } from "../components/SignupForm";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AudienceSection />
        <PreLaunchSection />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}
