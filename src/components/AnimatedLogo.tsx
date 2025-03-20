
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
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl sm:text-5xl" // Responsive sizing for xl
  };

  const subtitleSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-xs sm:text-sm md:text-lg" // Smaller on mobile for xl size
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 36
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
      className={`flex flex-col transition-transform duration-200 ease-out ${sizeClasses[size]} ${className}`}
    >
      <div className="flex items-center flex-nowrap whitespace-nowrap overflow-visible">
        <div className="mr-2 text-drill-600 flex-shrink-0">
          <Drill size={iconSizes[size]} className="animate-float" />
        </div>
        <div className="flex flex-col items-start min-w-0">
          <div className="flex">
            <span className="text-gradient font-cyber font-bold whitespace-nowrap">DRILL BABY DRILL</span>
          </div>
          <div className="flex items-center -mt-1">
            <span className={`text-energy-700 ${subtitleSizes[size]} font-normal whitespace-nowrap`}>
              AI TOOLS SUITE FOR THE OIL AND GAS INDUSTRY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
