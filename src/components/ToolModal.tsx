
import React, { useEffect, useRef } from "react";
import { Tool } from "@/lib/tools";
import { GlassCard } from "./ui-custom/GlassCard";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="w-full max-w-3xl max-h-[90vh] overflow-auto animate-scale-in"
      >
        <GlassCard intensity="high" className="p-6 md:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-energy-500 hover:text-energy-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className={cn("rounded-full w-16 h-16 flex items-center justify-center", tool.iconBg)}>
              <tool.icon className={cn("w-8 h-8", tool.primaryColor)} />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-energy-900">
                {tool.name}
              </h3>
              <p className="text-energy-600 mb-6 text-lg">
                {tool.description}
              </p>

              <h4 className="text-xl font-semibold mb-4 text-energy-800">
                Key Features
              </h4>
              <ul className="space-y-3 mb-6">
                {tool.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-energy-700 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn-primary">
                  Get Started
                </button>
                <button
                  onClick={onClose}
                  className="btn-secondary"
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
