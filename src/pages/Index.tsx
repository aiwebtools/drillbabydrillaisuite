
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturedImageSection from "@/components/FeaturedImageSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Set up intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements with the data-animate attribute
    document.querySelectorAll('[data-animate="true"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Apply dark theme to the body
  useEffect(() => {
    document.body.classList.add('bg-energy-950', 'text-white');
    return () => {
      document.body.classList.remove('bg-energy-950', 'text-white');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-energy-950 text-white">
      <Navbar />
      <Hero />
      <ToolsGrid />
      <FeaturedImageSection />
      <VideoSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <LegalDisclaimer />
      <Footer />
    </div>
  );
};

export default Index;
