
import React from "react";
import { Drill } from "lucide-react";

interface CyberpunkLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CyberpunkLogo: React.FC<CyberpunkLogoProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-75"></div>
        <div className="relative flex items-center bg-energy-900 rounded-full px-4 py-2 border border-cyan-500/50">
          <Drill className="mr-2 text-cyan-400 animate-pulse" size={size === "sm" ? 20 : size === "md" ? 28 : 36} />
          <div>
            <h1 className={`${sizeClasses[size]} font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500`}>
              DRILL BABY DRILL
            </h1>
            <div className="flex justify-end">
              <p className="text-xs text-energy-400">
                AI SUITE
              </p>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-1 text-[10px] text-energy-500 hover:text-cyan-400 transition-colors"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default CyberpunkLogo;
