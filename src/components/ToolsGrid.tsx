
import React, { useState } from "react";
import { tools } from "@/lib/tools";
import ToolCard from "./ToolCard";
import ToolModal from "./ToolModal";

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
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-animate text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Advanced AI Tools</span>
          </h2>
          <p className="text-lg text-energy-600 max-w-2xl mx-auto">
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
