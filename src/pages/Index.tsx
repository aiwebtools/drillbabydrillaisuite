
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { GlassCard } from "@/components/ui-custom/GlassCard";
import { Drill, Shield, Cpu, BarChart } from "lucide-react";

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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />

      <section className="py-16 px-4 bg-energy-950 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            <span className="text-gradient">Featured Video</span>
          </h2>
          <GlassCard variant="dark" className="overflow-hidden rounded-xl aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&origin=https://example.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&hd=1" 
              title="DRILL BABY DRILL AI SUITE Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </GlassCard>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-drill-600/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-drill-600/5 rounded-full -ml-40 -mb-40" />
      </section>

      <ToolsGrid />

      <section id="about" className="py-20 bg-energy-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="true">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-gradient">DRILL BABY DRILL</span>
            </h2>
            <p className="text-lg text-energy-300 max-w-2xl mx-auto">
              Our AI suite is designed from the ground up to meet the unique challenges
              of the oil and gas industry with precision and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GlassCard variant="dark" className="p-8 relative overflow-hidden" data-animate="true">
              <div className="absolute top-0 right-0 w-32 h-32 bg-drill-400/10 rounded-full -mr-16 -mt-16" />

              <h3 className="text-2xl font-bold mb-6 text-white">
                Comprehensive AI Integration
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-drill-900/50 text-drill-400">
                    <Drill className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Industry-Specific Design
                    </h4>
                    <p className="text-energy-300">
                      Each tool is crafted specifically for oil and gas workflows, ensuring
                      seamless integration with your existing processes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-green-900/50 text-green-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Enhanced Safety & Compliance
                    </h4>
                    <p className="text-energy-300">
                      Maintain rigorous safety standards and regulatory compliance with
                      predictive risk management and automated reporting.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard variant="dark" className="p-8 relative overflow-hidden" data-animate="true">
              <div className="absolute top-0 right-0 w-32 h-32 bg-drill-400/10 rounded-full -mr-16 -mt-16" />

              <h3 className="text-2xl font-bold mb-6 text-white">
                Data-Driven Excellence
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-amber-900/50 text-amber-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Advanced Analytics
                    </h4>
                    <p className="text-energy-300">
                      Transform raw operational data into actionable insights with
                      real-time analytics and predictive modeling capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-purple-900/50 text-purple-400">
                    <BarChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Performance Optimization
                    </h4>
                    <p className="text-energy-300">
                      Identify opportunities for operational improvements and cost
                      savings across your entire production chain.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-16 text-center" data-animate="true">
            <a href="#contact" className="btn-primary inline-flex">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-energy-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-animate="true">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Oil & Gas Operations?
            </h2>
            <p className="text-xl text-energy-300 mb-8">
              Join the growing number of energy companies leveraging AI to optimize their workflows,
              reduce costs, and drive sustainable growth.
            </p>
            <a href="#contact" className="btn-primary inline-flex">
              Get Started Today
            </a>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-drill-600/10 rounded-full -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-drill-600/10 rounded-full -mr-48 -mb-48" />
      </section>

      <FaqSection />
      <LegalDisclaimer />
      <Footer />
    </div>
  );
};

export default Index;
