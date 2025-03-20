
import React, { useState, useEffect } from "react";
import { GlassCard } from "./ui-custom/GlassCard";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const ConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("drillBabyDrillConsent");
    
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("drillBabyDrillConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <GlassCard 
        variant="dark" 
        intensity="high" 
        className="w-full max-w-md p-6 border border-drill-400/30 shadow-lg animate-fadeIn"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">Important Notice</h3>
          <button 
            onClick={handleAccept} 
            className="text-energy-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <p className="text-energy-200 mb-6">
          By using DRILL BABY DRILL AI SUITE, you agree to our Terms of Service and acknowledge that 
          these AI tools are provided for informational purposes only. 
          The accuracy of results cannot be guaranteed, and you should always consult with qualified professionals 
          before making operational decisions in the oil and gas industry.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleAccept}
            className="bg-drill-600 hover:bg-drill-500 text-white font-semibold px-8"
          >
            I Agree
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default ConsentPopup;
