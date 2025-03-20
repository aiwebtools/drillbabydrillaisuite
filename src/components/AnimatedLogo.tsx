
import React, { useEffect, useRef } from "react";
import { Factory } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = "md", 
  className = "" 
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const sizeClasses = {
    sm: "text-xs sm:text-xl",
    md: "text-sm sm:text-2xl", 
    lg: "text-base sm:text-3xl",
    xl: "text-lg sm:text-5xl"
  };

  const subtitleSizes = {
    sm: "text-[5px] sm:text-xs",
    md: "text-[6px] sm:text-sm",
    lg: "text-[7px] sm:text-base",
    xl: "text-[8px] sm:text-sm md:text-lg"
  };

  const iconSizes = {
    sm: isMobile ? 10 : 12,
    md: isMobile ? 12 : 16,
    lg: isMobile ? 14 : 18,
    xl: isMobile ? 16 : 20
  };

  const containerWidths = {
    sm: "max-w-[120px] sm:max-w-none",
    md: "max-w-[140px] sm:max-w-none",
    lg: "max-w-[160px] sm:max-w-none",
    xl: "max-w-[180px] sm:max-w-none",
  };

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo || isMobile) return; // Skip effect on mobile for better performance
    
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
  }, [isMobile]);

  return (
    <div 
      ref={logoRef}
      className={`flex flex-col ${isMobile ? '' : 'transition-transform duration-200 ease-out'} ${containerWidths[size]} ${className}`}
    >
      <div className="flex items-center flex-nowrap whitespace-nowrap overflow-hidden">
        <div className="mr-1 sm:mr-2 text-drill-600 flex-shrink-0">
          <Factory 
            size={iconSizes[size]} 
            className={`${isMobile ? 'animate-pulse' : 'animate-float'}`}
            strokeWidth={isMobile ? 2.5 : 2}
          />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-1 overflow-hidden">
          <div className="flex w-full">
            <span className={`text-gradient font-cyber font-bold ${sizeClasses[size]} whitespace-nowrap overflow-hidden text-ellipsis`}>DRILL BABY DRILL</span>
          </div>
          <div className="flex items-center -mt-0.5 sm:-mt-1 w-full">
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
