
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
    sm: "text-base sm:text-xl", // Smaller on mobile
    md: "text-lg sm:text-2xl",
    lg: "text-xl sm:text-3xl",
    xl: "text-2xl sm:text-5xl" 
  };

  const subtitleSizes = {
    sm: "text-[8px] sm:text-xs", // Even smaller on mobile
    md: "text-[10px] sm:text-sm",
    lg: "text-xs sm:text-base",
    xl: "text-xs sm:text-sm md:text-lg" 
  };

  const iconSizes = {
    sm: 16, // Smaller icon on mobile
    md: 20,
    lg: 24,
    xl: 28
  };

  const containerWidths = {
    sm: "max-w-[180px] sm:max-w-none",
    md: "max-w-[220px] sm:max-w-none",
    lg: "max-w-[240px] sm:max-w-none",
    xl: "max-w-[280px] sm:max-w-none",
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
      className={`flex flex-col transition-transform duration-200 ease-out ${sizeClasses[size]} ${containerWidths[size]} ${className}`}
    >
      <div className="flex items-center flex-nowrap whitespace-nowrap overflow-hidden sm:overflow-visible">
        <div className="mr-1 sm:mr-2 text-drill-600 flex-shrink-0">
          <Drill size={iconSizes[size]} className="animate-float" />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
          <div className="flex w-full">
            <span className="text-gradient font-cyber font-bold whitespace-nowrap overflow-hidden text-ellipsis">DRILL BABY DRILL</span>
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
