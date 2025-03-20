
import React from "react";
import { Drill } from "lucide-react";

interface CyberpunkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CyberpunkLogo: React.FC<CyberpunkLogoProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "text-md sm:text-xl", // Reduced size on mobile
    md: "text-lg sm:text-2xl",
    lg: "text-xl sm:text-3xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] sm:text-xs", // Further reduced for better mobile display
    md: "text-[8px] sm:text-sm",
    lg: "text-xs sm:text-base",
  };

  const iconSizes = {
    sm: 16,  // Further reduced from 18
    md: 20,  // Further reduced from 24
    lg: 26,  // Reduced from 30
  };

  // Adjusted container width classes for better mobile display
  const containerWidths = {
    sm: "max-w-[180px] sm:max-w-none", // Reduced from 200px
    md: "max-w-[220px] sm:max-w-none", // Reduced from 240px
    lg: "max-w-[260px] sm:max-w-none", // Reduced from 280px
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${containerWidths[size]}`}>
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-purple-600/50 rounded-lg blur-xl opacity-70"></div>
        
        {/* Main logo container - improved overflow handling */}
        <div className="relative flex items-center bg-energy-900/80 rounded-lg px-1 sm:px-4 py-1 sm:py-2 border border-cyan-500/30 shadow-lg shadow-purple-600/20 overflow-hidden">
          <div className="relative mr-1 sm:mr-3 flex-shrink-0">
            {/* Icon glow */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
            <Drill 
              className="relative text-cyan-400 animate-pulse" 
              size={iconSizes[size]} 
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
        className="mt-1 text-[8px] sm:text-[10px] text-energy-500 hover:text-cyan-400 transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default CyberpunkLogo;
