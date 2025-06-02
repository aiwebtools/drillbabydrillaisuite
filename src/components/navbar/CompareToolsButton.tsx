
import React from "react";

interface CompareToolsButtonProps {
  onClick?: () => void;
}

const CompareToolsButton: React.FC<CompareToolsButtonProps> = ({ onClick }) => {
  return (
    <a 
      href="#tools" 
      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/40"
      onClick={onClick}
    >
      Compare
    </a>
  );
};

export default CompareToolsButton;
