
import React from "react";
import { GlassCard } from "./ui-custom/GlassCard";
import { Drill, Shield, Cpu, BarChart } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-energy-900">
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
          <a href="#tools" className="btn-primary inline-flex">
            Compare Tools
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
