
import React, { useEffect, useRef } from "react";
import { Tool } from "@/lib/tools";
import { GlassCard } from "./ui-custom/GlassCard";
import { X, Check, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ToolModalProps {
  tool: Tool;
  isOpen: boolean;
  onClose: () => void;
}

const ToolModal: React.FC<ToolModalProps> = ({ tool, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
      <div
        ref={modalRef}
        className="w-full max-w-3xl max-h-[90vh] overflow-auto animate-scale-in"
      >
        <GlassCard intensity="high" className="p-4 sm:p-6 md:p-8 relative border border-energy-800/50 bg-energy-900/80">
          <button
            onClick={onClose}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-energy-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className={cn("rounded-full w-12 sm:w-16 h-12 sm:h-16 flex-shrink-0 flex items-center justify-center", tool.iconBg)}>
              <tool.icon className={cn("w-6 sm:w-8 h-6 sm:h-8", tool.primaryColor)} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                {tool.name}
              </h3>
              
              {/* Highlight primary purpose badge */}
              <div className="inline-block mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm font-medium py-1 px-2 sm:px-3 rounded-full bg-energy-800 border border-energy-700 text-cyan-400">
                  {tool.features[0]}
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-energy-400 mb-4 sm:mb-6">
                {tool.description}
              </p>

              {/* What makes this tool unique section */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-energy-800/50 border border-energy-700/50">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">
                  What Makes {tool.name.replace(" GPT", "").replace(" AI", "")} Unique:
                </h4>
                <p className="text-sm sm:text-base text-energy-300">
                  {tool.name} specializes in {tool.features[0].toLowerCase()}, setting it apart from other tools in our suite by focusing on {tool.features[1].toLowerCase()}.
                </p>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-cyan-400">
                Key Capabilities
              </h4>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {tool.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-energy-300 text-sm sm:text-base animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                >
                  Get Started with {tool.name.replace(" GPT", "").replace(" AI", "").split(" ")[0]} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-energy-800 text-energy-300 text-sm sm:text-base hover:bg-energy-700 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ToolModal;
