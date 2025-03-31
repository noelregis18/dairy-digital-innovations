
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { TechnologySection } from "@/components/technology-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { LiveClock } from "@/components/live-clock";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <LiveClock />
          </div>
          <StatsSection />
          <AboutSection />
          <FeaturesSection />
          <TechnologySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
