import React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { tools } from "@/lib/tools";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ToolsAccordion: React.FC = () => {
  // Organize tools by category
  const toolCategories = {
    "Training & Management": [1], // PetroMaster AI
    "Technology & Innovation": [2], // PetroTech Innovator
    "Logistics & Operations": [3, 7, 9], // OilLogistics GPT, RigMaster GPT, DrillGenius GPT
    "Sustainability & Environment": [4, 11], // GreenDrill GPT, Plastoline GPT
    "Compliance & Finance": [5, 6], // PetroCompliance GPT, PetroFinancial GPT
    "Safety & Exploration": [8, 10], // SafetyGuard GPT, PetroExplorer GPT
  };

  return (
    <div className="relative group">
      <button className="group relative text-white hover:text-cyan-400 transition-all duration-300 font-medium flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
        <span>AI Tools</span>
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
      </button>
      
      <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-energy-900/95 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl p-2">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(toolCategories).map(([category, toolIds], categoryIndex) => (
              <AccordionItem 
                key={category} 
                value={category}
                className="border-energy-800"
              >
                <AccordionTrigger className="text-white hover:text-cyan-400 py-2 px-2 text-sm font-medium hover:no-underline">
                  {category}
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="space-y-1">
                    {toolIds.map((toolId) => {
                      const tool = tools.find(t => t.id === toolId);
                      if (!tool) return null;
                      
                      return (
                        <a
                          key={tool.id}
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item flex items-center justify-between text-energy-200 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 text-xs px-3 py-2 rounded-md"
                        >
                          <div className="flex items-center gap-2">
                            <tool.icon className="w-3 h-3" />
                            <span className="flex-1 truncate">{tool.name}</span>
                          </div>
                          <ExternalLink className="w-3 h-3 group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-2 pt-2 border-t border-energy-800">
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-energy-200 hover:text-cyan-400 transition-colors text-xs py-2"
            >
              <span>More AI Tools</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAccordion;