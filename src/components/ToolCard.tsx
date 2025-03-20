
import React, { useState } from "react";
import { Tool } from "@/lib/tools";
import { GlassCard } from "./ui-custom/GlassCard";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
        "p-6 card-hover cursor-pointer group animate-fadeIn overflow-hidden relative",
        `animate-delay-${index % 5 + 1}`
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick(tool.id)}
    >
      {/* Shimmer effect on hover */}
      <div
        className={cn(
          "absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-10">
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-4", tool.iconBg)}>
          <tool.icon className={cn("w-6 h-6", tool.primaryColor)} />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-energy-900 group-hover:text-drill-600 transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-energy-600 mb-4">
          {tool.shortDescription}
        </p>
        
        <div className="flex items-center text-sm font-medium text-drill-600 mt-2 group-hover:translate-x-1 transition-transform">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </GlassCard>
  );
};

export default ToolCard;
