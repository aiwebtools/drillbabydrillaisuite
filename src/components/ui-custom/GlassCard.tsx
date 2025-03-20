
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  intensity?: "low" | "medium" | "high";
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({
  variant = "light",
  intensity = "medium",
  children,
  className,
  ...props
}: GlassCardProps) => {
  const getBackdropIntensity = () => {
    switch (intensity) {
      case "low":
        return variant === "light" ? "backdrop-blur-sm" : "backdrop-blur-sm";
      case "high":
        return variant === "light" ? "backdrop-blur-2xl" : "backdrop-blur-2xl";
      default:
        return variant === "light" ? "backdrop-blur-xl" : "backdrop-blur-lg";
    }
  };

  const getBackground = () => {
    switch (intensity) {
      case "low":
        return variant === "light" ? "bg-white/30" : "bg-black/10";
      case "high":
        return variant === "light" ? "bg-white/80" : "bg-black/40";
      default:
        return variant === "light" ? "bg-white/60" : "bg-black/20";
    }
  };

  const getBorder = () => {
    return variant === "light" ? "border-white/30" : "border-white/10";
  };

  return (
    <div
      className={cn(
        "rounded-2xl border shadow-sm transition-all duration-300",
        getBackdropIntensity(),
        getBackground(),
        getBorder(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
