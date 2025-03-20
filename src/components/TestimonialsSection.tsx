
import React from "react";
import { GlassCard } from "./ui-custom/GlassCard";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Peterson",
    position: "Senior Drilling Engineer, GulfStream Energy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "DRILL BABY DRILL AI SUITE has revolutionized our drilling operations. The predictive analytics from DrillGenius GPT alone saved us over $2.3M in potential equipment failures last quarter.",
    stars: 5
  },
  {
    name: "Sarah Lin",
    position: "Environmental Compliance Director, PetroNorth",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "GreenDrill GPT has been instrumental in helping us achieve our sustainability goals while maintaining production targets. Our regulatory compliance has never been more streamlined.",
    stars: 5
  },
  {
    name: "Michael Okonkwo",
    position: "Operations Manager, DeepSea Drilling Co.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "The ability to predict equipment failures before they happen with RigMaster GPT has transformed our maintenance schedules. Downtime is down 37% since implementation.",
    stars: 5
  },
  {
    name: "Elena Rodriguez",
    position: "Chief Safety Officer, Texan Oil & Gas",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "SafetyGuard GPT has transformed our safety protocols. The simulated training scenarios have prepared our team for situations we'd never considered before.",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-energy-900 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-5"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-energy-300 max-w-2xl mx-auto">
            Trusted by leading oil and gas companies worldwide to revolutionize their operations
            with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <GlassCard
              key={index}
              variant="dark"
              className={`p-6 relative overflow-hidden border border-energy-800/50 group hover:border-cyan-500/30 transition-all duration-300 animate-fadeIn ${`animate-delay-${index % 4 + 1}`}`}
            >
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
              
              <Quote className="absolute top-6 right-6 text-energy-700 w-8 h-8 opacity-50" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500/30" 
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-energy-400">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-energy-300 italic">"{testimonial.quote}"</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
