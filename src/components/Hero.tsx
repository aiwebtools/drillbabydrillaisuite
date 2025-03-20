
import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import { GlassCard } from "./ui-custom/GlassCard";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="section-animate flex flex-col items-center text-center mb-10">
          <AnimatedLogo size="xl" className="mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto text-balance">
            <span className="text-gradient">Revolutionary AI Suite</span> for the 
            <span className="text-energy-800"> Oil & Gas Industry</span>
          </h1>
          
          <p className="text-lg md:text-xl text-energy-600 max-w-3xl mx-auto mb-8 text-balance">
            A comprehensive collection of 10 specialized AI tools designed to revolutionize operations, 
            optimize workflows, and drive sustainable growth in the energy sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#tools" className="btn-primary flex items-center justify-center">
              Explore Tools
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Request Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <GlassCard className="p-6 animate-fadeIn animate-delay-1">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-drill-50 text-drill-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-big">
                <path d="M3 3v18h18"/>
                <rect x="7" y="10" width="2" height="8"/>
                <rect x="12" y="6" width="2" height="12"/>
                <rect x="17" y="14" width="2" height="4"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-energy-900">
              Optimize Performance
            </h3>
            <p className="text-energy-600">
              Harness AI-driven analytics to maximize operational efficiency, reduce downtime, and improve financial outcomes across your energy operations.
            </p>
          </GlassCard>

          <GlassCard className="p-6 animate-fadeIn animate-delay-2">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-energy-900">
              Sustainable Operations
            </h3>
            <p className="text-energy-600">
              Implement cutting-edge sustainability practices with AI tools designed to minimize environmental impact while maintaining productivity.
            </p>
          </GlassCard>

          <GlassCard className="p-6 animate-fadeIn animate-delay-3">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-amber-50 text-amber-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-energy-900">
              Enhanced Safety
            </h3>
            <p className="text-energy-600">
              Prioritize workforce safety with predictive risk management, automated monitoring systems, and AI-powered safety protocols for all operations.
            </p>
          </GlassCard>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#tools" className="text-energy-500 hover:text-drill-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
