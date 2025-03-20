
import React from "react";
import { BrainCircuit, AreaChart, Shield, Zap } from "lucide-react";
import { GlassCard } from "./ui-custom/GlassCard";

const steps = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Our specialized GPTs utilize the latest in artificial intelligence to analyze your oil & gas data, providing insights that would take teams of experts weeks to compile.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-900/30"
  },
  {
    icon: AreaChart,
    title: "Real-Time Predictions",
    description: "Get predictive analysis for equipment failures, market fluctuations, drilling optimization and more, all updated in real-time as conditions change.",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30"
  },
  {
    icon: Shield,
    title: "Enhanced Safety & Compliance",
    description: "Our tools constantly monitor operations for safety risks and regulatory issues, providing alerts and recommendations before problems occur.",
    color: "text-green-400",
    bgColor: "bg-green-900/30"
  },
  {
    icon: Zap,
    title: "Instant Implementation",
    description: "No complex software installations or lengthy training required. Simply access our GPTs through ChatGPT to revolutionize your oil & gas operations.",
    color: "text-amber-400",
    bgColor: "bg-amber-900/30"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-energy-950 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-5"></div>
      
      {/* Glow effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-drill-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-energy-300 max-w-2xl mx-auto">
            Our revolutionary AI Suite transforms complex oil & gas operations into streamlined, 
            data-driven processes in just four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <GlassCard 
              key={index}
              variant="dark" 
              className={`p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 animate-fadeIn ${`animate-delay-${index % 4 + 1}`}`}
              data-animate="true"
            >
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 ${step.bgColor}`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-energy-300">
                {step.description}
              </p>
              
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-energy-800/20 to-energy-900/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-gradient-to-tr from-energy-900/10 to-energy-800/10 rounded-full blur-xl"></div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
