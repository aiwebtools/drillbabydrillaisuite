
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";
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

      <ToolsGrid />

      <section id="about" className="py-20 bg-energy-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-animate="true">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">DRILL BABY DRILL</span>
            </h2>
            <p className="text-lg text-energy-600 max-w-2xl mx-auto">
              Our AI suite is designed from the ground up to meet the unique challenges
              of the oil and gas industry with precision and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GlassCard className="p-8 relative overflow-hidden" data-animate="true">
              <div className="absolute top-0 right-0 w-32 h-32 bg-drill-400/10 rounded-full -mr-16 -mt-16" />

              <h3 className="text-2xl font-bold mb-6 text-energy-800">
                Comprehensive AI Integration
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-drill-50 text-drill-600">
                    <Drill className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-energy-800 mb-1">
                      Industry-Specific Design
                    </h4>
                    <p className="text-energy-600">
                      Each tool is crafted specifically for oil and gas workflows, ensuring
                      seamless integration with your existing processes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-green-50 text-green-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-energy-800 mb-1">
                      Enhanced Safety & Compliance
                    </h4>
                    <p className="text-energy-600">
                      Maintain rigorous safety standards and regulatory compliance with
                      predictive risk management and automated reporting.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 relative overflow-hidden" data-animate="true">
              <div className="absolute top-0 right-0 w-32 h-32 bg-drill-400/10 rounded-full -mr-16 -mt-16" />

              <h3 className="text-2xl font-bold mb-6 text-energy-800">
                Data-Driven Excellence
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-amber-50 text-amber-600">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-energy-800 mb-1">
                      Advanced Analytics
                    </h4>
                    <p className="text-energy-600">
                      Transform raw operational data into actionable insights with
                      real-time analytics and predictive modeling capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-full p-3 bg-purple-50 text-purple-600">
                    <BarChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-energy-800 mb-1">
                      Performance Optimization
                    </h4>
                    <p className="text-energy-600">
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

      <Footer />
    </div>
  );
};

export default Index;
