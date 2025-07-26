
import React from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GlassCard } from "../ui-custom/GlassCard";

interface ToolLink {
  name: string;
  href: string;
}

interface ToolsDropdownProps {
  toolLinks: ToolLink[];
}

const ToolsDropdown: React.FC<ToolsDropdownProps> = ({ toolLinks }) => {
  return (
    <div className="relative group">
      <button className="group relative text-white hover:text-cyan-400 transition-all duration-300 font-medium flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
        <span>Select Oil & Gas AI</span>
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
      </button>
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
        <GlassCard variant="dark" intensity="high" className="py-2 px-1 border border-cyan-500/20 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {toolLinks.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item text-energy-200 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 text-sm px-3 py-2 rounded-md flex items-center"
              >
                <span className="flex-1">{tool.name}</span>
                <ExternalLink className="ml-2 h-3 w-3 group-hover/item:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ToolsDropdown;
