
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
    sm: "text-[7px] sm:text-xs",
    md: "text-[8px] sm:text-sm",
    lg: "text-[9px] sm:text-base",
    xl: "text-[10px] sm:text-sm md:text-lg"
  };

  const iconSizes = {
    sm: isMobile ? 14 : 12,
    md: isMobile ? 16 : 16,
    lg: isMobile ? 18 : 18,
    xl: isMobile ? 20 : 20
  };

  const containerWidths = {
    sm: "w-auto min-w-[140px] sm:min-w-[160px]",
    md: "w-auto min-w-[170px] sm:min-w-[180px]",
    lg: "w-auto min-w-[200px] sm:min-w-[220px]",
    xl: "w-auto min-w-[220px] sm:min-w-[240px]",
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
      <div className="flex items-center flex-nowrap w-full">
        <div className="mr-2 sm:mr-2 text-drill-600 flex-shrink-0">
          <Factory 
            size={iconSizes[size]} 
            className={`${isMobile ? 'animate-pulse' : 'animate-float'}`}
            strokeWidth={isMobile ? 2.5 : 2}
          />
        </div>
        <div className="flex flex-col items-start min-w-0 flex-grow overflow-hidden">
          <div className="flex w-full">
            <span className={`text-gradient font-cyber font-bold ${sizeClasses[size]} truncate w-full`}>DRILL BABY DRILL</span>
          </div>
          <div className="flex items-center -mt-0.5 sm:-mt-1 w-full">
            <span className={`text-energy-700 ${subtitleSizes[size]} font-normal truncate w-full`}>
              AI TOOLS SUITE FOR THE OIL AND GAS INDUSTRY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
