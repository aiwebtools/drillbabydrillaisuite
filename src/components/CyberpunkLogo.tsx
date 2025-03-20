
import React from "react";
import { Drill } from "lucide-react";

interface CyberpunkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CyberpunkLogo: React.FC<CyberpunkLogoProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const subtitleSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-purple-600/50 rounded-lg blur-xl opacity-70"></div>
        
        {/* Main logo container */}
        <div className="relative flex items-center bg-energy-900/80 rounded-lg px-4 py-2 border border-cyan-500/30 shadow-lg shadow-purple-600/20">
          <div className="relative mr-3">
            {/* Icon glow */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
            <Drill 
              className="relative text-cyan-400 animate-pulse" 
              size={iconSizes[size]} 
            />
          </div>
          
          <div>
            <h1 className={`font-cyber font-bold ${sizeClasses[size]} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600`}>
              DRILL BABY DRILL
            </h1>
            <div className="flex justify-end">
              <p className={`${subtitleSizes[size]} text-cyan-300/70 tracking-wider font-mono`}>
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
        className="mt-1.5 text-[10px] text-energy-500 hover:text-cyan-400 transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default CyberpunkLogo;
