
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
    sm: "text-xs sm:text-lg md:text-xl",
    md: "text-sm sm:text-xl md:text-2xl",
    lg: "text-base sm:text-2xl md:text-3xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] sm:text-[10px] md:text-xs",
    md: "text-[7px] sm:text-xs md:text-sm",
    lg: "text-[8px] sm:text-sm md:text-base",
  };

  const iconSizes = {
    sm: isMobile ? 12 : 16,
    md: isMobile ? 14 : 20,
    lg: isMobile ? 16 : 24,
  };

  // Increased container widths to prevent text cutoff
  const containerWidths = {
    sm: "w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]", 
    md: "w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px]",
    lg: "w-full max-w-[380px] sm:max-w-[420px] md:max-w-[500px]",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${containerWidths[size]}`}>
        {/* Optimized glow effect - reduced for mobile */}
        <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500/40 to-purple-600/40 rounded-lg blur-md sm:blur-xl opacity-60 sm:opacity-70`}></div>
        
        {/* Main logo container - improved for mobile */}
        <div className="relative flex items-center bg-energy-900/80 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-cyan-500/30 shadow-lg shadow-purple-600/20">
          <div className="relative mr-1 sm:mr-2 md:mr-3 flex-shrink-0">
            {/* Optimized icon glow */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm sm:blur-md opacity-40 sm:opacity-50"></div>
            <Factory 
              className="relative text-cyan-400 animate-pulse" 
              size={iconSizes[size]} 
              strokeWidth={isMobile ? 2.5 : 2}
            />
          </div>
          
          <div className="min-w-0 flex-grow">
            <h1 className={`font-cyber font-bold ${sizeClasses[size]} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 whitespace-nowrap`}>
              DRILL BABY DRILL
            </h1>
            <div className="flex justify-start w-full">
              <p className={`${subtitleSizes[size]} text-cyan-300/70 tracking-wider font-mono whitespace-nowrap text-ellipsis overflow-hidden`}>
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
        className="mt-1 text-[7px] sm:text-[10px] text-energy-500 hover:text-cyan-400 transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default CyberpunkLogo;
