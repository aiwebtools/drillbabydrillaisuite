
import React, { useState } from "react";
import { tools } from "@/lib/tools";
import ToolCard from "./ToolCard";
import ToolModal from "./ToolModal";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const ToolsGrid: React.FC = () => {
  const [selectedToolId, setSelectedToolId] = useState<number | null>(null);
  
  const selectedTool = tools.find(tool => tool.id === selectedToolId) || null;
  
  const handleOpenModal = (id: number) => {
    setSelectedToolId(id);
  };
  
  const handleCloseModal = () => {
    setSelectedToolId(null);
  };

  return (
    <section id="tools" className="py-20 bg-energy-950 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-5"></div>
      
      {/* Glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-animate text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full bg-energy-900/70 border border-energy-800 text-neon-blue">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Select Your Tool</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-gradient">Advanced AI Tools</span>
          </h2>
          <p className="text-lg text-energy-400 max-w-2xl mx-auto">
            Discover our suite of specialized AI tools designed to transform every aspect
            of oil and gas operations from drilling to compliance and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              onClick={handleOpenModal} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/40 transition-all duration-300"
          >
            Explore More AI Tools
          </a>
        </div>
      </div>
      
      {selectedTool && (
        <ToolModal 
          tool={selectedTool} 
          isOpen={!!selectedToolId} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default ToolsGrid;
