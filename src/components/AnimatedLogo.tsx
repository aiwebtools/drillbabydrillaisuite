
import React, { useEffect, useRef } from "react";
import { Drill } from "lucide-react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = "md", 
  className = "" 
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: "text-sm sm:text-xl", // Reduced from text-base
    md: "text-base sm:text-2xl", // Reduced from text-lg
    lg: "text-lg sm:text-3xl", // Reduced from text-xl
    xl: "text-xl sm:text-5xl"  // Reduced from text-2xl
  };

  const subtitleSizes = {
    sm: "text-[6px] sm:text-xs", // Further reduced for better mobile display
    md: "text-[8px] sm:text-sm", // Reduced from 10px
    lg: "text-[10px] sm:text-base", // Added explicit mobile size
    xl: "text-[10px] sm:text-sm md:text-lg" // Reduced for mobile
  };

  const iconSizes = {
    sm: 14, // Reduced from 16
    md: 18, // Reduced from 20
    lg: 22, // Reduced from 24
    xl: 24  // Reduced from 28
  };

  const containerWidths = {
    sm: "max-w-[160px] sm:max-w-none", // Reduced from 180px
    md: "max-w-[190px] sm:max-w-none", // Reduced from 220px
    lg: "max-w-[220px] sm:max-w-none", // Reduced from 240px
    xl: "max-w-[260px] sm:max-w-none", // Reduced from 280px
  };

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      logo.style.transform = `perspective(500px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    const handleMouseLeave = () => {
      logo.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (logo) {
        logo.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={logoRef}
      className={`flex flex-col transition-transform duration-200 ease-out ${containerWidths[size]} ${className}`}
    >
      <div className="flex items-center flex-nowrap whitespace-nowrap overflow-hidden">
        <div className="mr-1 sm:mr-2 text-drill-600 flex-shrink-0">
          <Drill size={iconSizes[size]} className="animate-float" />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
          <div className="flex w-full">
            <span className={`text-gradient font-cyber font-bold ${sizeClasses[size]} whitespace-nowrap overflow-hidden text-ellipsis`}>DRILL BABY DRILL</span>
          </div>
          <div className="flex items-center -mt-1 w-full">
            <span className={`text-energy-700 ${subtitleSizes[size]} font-normal whitespace-nowrap overflow-hidden text-ellipsis w-full`}>
              AI TOOLS SUITE FOR THE OIL AND GAS INDUSTRY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
