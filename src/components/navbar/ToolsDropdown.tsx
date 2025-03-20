
import React from "react";
import { ExternalLink } from "lucide-react";
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
      <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center">
        Select Oil & Gas AI
      </button>
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <GlassCard variant="dark" intensity="high" className="py-2 px-1 border border-cyan-500/20">
          <div className="flex flex-col space-y-1">
            {toolLinks.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-energy-200 hover:text-cyan-400 transition-colors text-sm px-3 py-1.5 flex items-center"
              >
                {tool.name}
                <ExternalLink className="ml-1.5 h-3 w-3" />
              </a>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ToolsDropdown;
