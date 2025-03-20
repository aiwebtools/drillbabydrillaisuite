
import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../ui-custom/GlassCard";

interface NavbarContainerProps {
  scrolled: boolean;
  className?: string;
  children: React.ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ 
  scrolled, 
  className, 
  children 
}) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 backdrop-blur-md bg-energy-950/80" : "py-4",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <GlassCard
          variant="dark"
          intensity={scrolled ? "medium" : "low"}
          className={cn(
            "flex items-center justify-between py-2 px-2 sm:px-4 transition-all duration-300 border-cyber-light/20",
            scrolled ? "shadow-[0_0_15px_rgba(0,255,255,0.15)]" : ""
          )}
        >
          {children}
        </GlassCard>
      </div>
    </header>
  );
};

export default NavbarContainer;
