
import React from "react";
import { Factory } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CyberpunkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CyberpunkLogo: React.FC<CyberpunkLogoProps> = ({ size = "md", className }) => {
  const isMobile = useIsMobile();
  
  const sizeClasses = {
    sm: "text-xs sm:text-xl",
    md: "text-sm sm:text-2xl",
    lg: "text-base sm:text-3xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] sm:text-xs",
    md: "text-[7px] sm:text-sm",
    lg: "text-[8px] sm:text-base",
  };

  const iconSizes = {
    sm: isMobile ? 12 : 14,
    md: isMobile ? 14 : 18,
    lg: isMobile ? 16 : 22,
  };

  // Optimized container width classes for mobile
  const containerWidths = {
    sm: "max-w-[140px] sm:max-w-none", 
    md: "max-w-[180px] sm:max-w-none",
    lg: "max-w-[220px] sm:max-w-none",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${containerWidths[size]}`}>
        {/* Optimized glow effect - reduced for mobile */}
        <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500/40 to-purple-600/40 rounded-lg blur-md sm:blur-xl opacity-60 sm:opacity-70`}></div>
        
        {/* Main logo container - improved for mobile */}
        <div className="relative flex items-center bg-energy-900/80 rounded-lg px-1 sm:px-4 py-0.5 sm:py-2 border border-cyan-500/30 shadow-lg shadow-purple-600/20 overflow-hidden">
          <div className="relative mr-1 sm:mr-3 flex-shrink-0">
            {/* Optimized icon glow */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm sm:blur-md opacity-40 sm:opacity-50"></div>
            <Factory 
              className="relative text-cyan-400 animate-pulse" 
              size={iconSizes[size]} 
              strokeWidth={isMobile ? 2.5 : 2}
            />
          </div>
          
          <div className="min-w-0 flex-1">
            <h1 className={`font-cyber font-bold ${sizeClasses[size]} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 whitespace-nowrap overflow-hidden text-ellipsis`}>
              DRILL BABY DRILL
            </h1>
            <div className="flex justify-end">
              <p className={`${subtitleSizes[size]} text-cyan-300/70 tracking-wider font-mono whitespace-nowrap overflow-hidden text-ellipsis`}>
                AI TOOLS SUITE FOR THE OIL AND GAS INDUSTRY
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-1 text-[6px] sm:text-[10px] text-energy-500 hover:text-cyan-400 transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default CyberpunkLogo;
