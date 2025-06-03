
import React from "react";

const FeaturedImageSection: React.FC = () => {
  return (
    <section className="py-0 px-4 -mt-12 relative overflow-hidden" id="featured-image">
      <div className="container mx-auto max-w-5xl" data-animate="true">
        <div className="rounded-xl overflow-hidden shadow-lg shadow-drill-600/20 mx-auto">
          <img 
            src="https://ideogram.ai/assets/image/lossless/response/lmQ_XQgaTge4ZGsQnt1UWg" 
            alt="AI tools for oil and gas industry - drilling optimization and energy sector automation by AIWEBTOOLS.AI" 
            className="w-full h-auto" 
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-center text-white">
          <span className="text-gradient">Leading AI Web Tools Provider for Oil & Gas Since 2025</span>
        </h2>
        <p className="text-lg text-energy-300 max-w-3xl mx-auto text-center">
          AIWEBTOOLS.AI has been revolutionizing the energy sector with cutting-edge AI tools designed specifically 
          for oil & gas operations, safety management, and drilling optimization.
        </p>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-drill-600/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-drill-600/5 rounded-full -ml-40 -mb-40" />
    </section>
  );
};

export default FeaturedImageSection;
