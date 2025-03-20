
import React from "react";
import { Drill } from "lucide-react";

interface CyberpunkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CyberpunkLogo: React.FC<CyberpunkLogoProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  const subtitleSizes = {
    sm: "text-[8px] sm:text-xs",
    md: "text-xs sm:text-sm",
    lg: "text-xs sm:text-base",
  };

  const iconSizes = {
    sm: 18,  // Reduced from 20
    md: 24,  // Reduced from 26
    lg: 30,  // Reduced from 32
  };

  // Added container width classes based on size
  const containerWidths = {
    sm: "max-w-[220px] sm:max-w-none",
    md: "max-w-[260px] sm:max-w-none",
    lg: "max-w-[300px] sm:max-w-none",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${containerWidths[size]}`}>
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-purple-600/50 rounded-lg blur-xl opacity-70"></div>
        
        {/* Main logo container - added overflow-hidden for mobile */}
        <div className="relative flex items-center bg-energy-900/80 rounded-lg px-1.5 sm:px-4 py-1.5 sm:py-2 border border-cyan-500/30 shadow-lg shadow-purple-600/20 overflow-hidden sm:overflow-visible">
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
