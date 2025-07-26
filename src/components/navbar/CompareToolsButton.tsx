
import React from "react";
import { Sparkles } from "lucide-react";

interface CompareToolsButtonProps {
  onClick?: () => void;
}

const CompareToolsButton: React.FC<CompareToolsButtonProps> = ({ onClick }) => {
  return (
    <a 
      href="#tools" 
      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/40 hover:scale-105"
      onClick={onClick}
    >
      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
      <span>Compare</span>
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default CompareToolsButton;
