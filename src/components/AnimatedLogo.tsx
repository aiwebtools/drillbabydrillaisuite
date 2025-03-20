
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
    sm: "text-xs sm:text-xl", // Further reduced for mobile
    md: "text-sm sm:text-2xl", // Further reduced for mobile
    lg: "text-base sm:text-3xl", // Further reduced for mobile
    xl: "text-lg sm:text-5xl"  // Further reduced for mobile
  };

  const subtitleSizes = {
    sm: "text-[4px] sm:text-xs", // Further reduced for better mobile display
    md: "text-[5px] sm:text-sm", // Further reduced for better mobile display
    lg: "text-[6px] sm:text-base", // Further reduced for better mobile display
    xl: "text-[7px] sm:text-sm md:text-lg" // Further reduced for better mobile display
  };

  const iconSizes = {
    sm: 12, // Further reduced for mobile
    md: 16, // Further reduced for mobile
    lg: 18, // Further reduced for mobile
    xl: 20  // Further reduced for mobile
  };

  const containerWidths = {
    sm: "max-w-[130px] sm:max-w-none", // Further reduced for mobile
    md: "max-w-[150px] sm:max-w-none", // Further reduced for mobile
    lg: "max-w-[180px] sm:max-w-none", // Further reduced for mobile
    xl: "max-w-[210px] sm:max-w-none", // Further reduced for mobile
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
