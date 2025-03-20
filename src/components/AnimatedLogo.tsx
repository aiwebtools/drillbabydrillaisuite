
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
    sm: "text-3xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl"
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
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
      className={`flex items-center font-bold transition-transform duration-200 ease-out ${sizeClasses[size]} ${className}`}
    >
      <div className="mr-2 text-drill-600">
        <Drill size={iconSizes[size]} className="animate-float" />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex">
          <span className="text-gradient">DRILL</span>
          <span className="ml-1 text-energy-800">BABY</span>
        </div>
        <div className="flex items-center -mt-1">
          <span className="text-gradient">DRILL</span>
          <span className="ml-1 text-energy-700 text-sm font-normal">AI SUITE</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
