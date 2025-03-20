
import React from "react";

const FeaturedImageSection: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-energy-950 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl" data-animate="true">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          <span className="text-gradient">Advanced Reservoir Visualization</span>
        </h2>
        <p className="text-lg text-energy-300 max-w-2xl mx-auto mb-6 text-center">
          AI-generated field mapping and subsurface analysis for enhanced decision making
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg shadow-drill-600/20 mx-auto">
          <img 
            src="https://ideogram.ai/assets/image/lossless/response/lmQ_XQgaTge4ZGsQnt1UWg" 
            alt="Oil and gas industry visualization" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-drill-600/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-drill-600/5 rounded-full -ml-40 -mb-40" />
    </section>
  );
};

export default FeaturedImageSection;
