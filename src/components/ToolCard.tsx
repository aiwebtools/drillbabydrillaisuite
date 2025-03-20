
import React, { useState } from "react";
import { Tool } from "@/lib/tools";
import { GlassCard } from "./ui-custom/GlassCard";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ToolCardProps {
  tool: Tool;
  onClick: (id: number) => void;
  index: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, index }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <GlassCard
      className={cn(
        "p-4 sm:p-6 card-hover cursor-pointer group animate-fadeIn overflow-hidden relative border border-energy-800/50 bg-energy-900/70",
        `animate-delay-${index % 5 + 1}`
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Shimmer effect on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[size:200%_100%] animate-shimmer opacity-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-10">
        <div className={cn("rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-3 sm:mb-4", tool.iconBg)}>
          <tool.icon className={cn("w-5 sm:w-6 h-5 sm:h-6", tool.primaryColor)} />
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-sm sm:text-base text-energy-400 mb-3 sm:mb-4 min-h-[40px] sm:min-h-[50px]">
          {tool.shortDescription}
        </p>
        
        {/* Key feature highlight - adding this section to show differences */}
        <div className="mb-3 sm:mb-4 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md bg-energy-800/80 border border-energy-700/50">
          <p className="text-xs sm:text-sm font-medium text-cyan-400 mb-0.5 sm:mb-1">Key Specialization:</p>
          <p className="text-xs sm:text-sm text-energy-300">{tool.features[0]}</p>
        </div>
        
        <div className="flex flex-col gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            className={cn(
              "w-full justify-center text-white border-energy-700 hover:text-cyan-400 hover:border-cyan-400 text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4 h-auto",
              tool.primaryColor
            )}
            onClick={(e) => {
              e.stopPropagation();
              window.open(tool.link, "_blank", "noopener,noreferrer");
            }}
          >
            Use {tool.name.replace(" GPT", "").replace(" AI", "")} Now
          </Button>
          
          <div className="flex justify-between items-center">
            <button 
              className="flex items-center text-xs sm:text-sm font-medium text-cyan-400 group-hover:translate-x-1 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                onClick(tool.id);
              }}
            >
              Learn more <ChevronRight className="ml-1 h-3 sm:h-4 w-3 sm:w-4" />
            </button>
            
            <a 
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 sm:p-2 rounded-full bg-energy-800 hover:bg-energy-700 text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ToolCard;
