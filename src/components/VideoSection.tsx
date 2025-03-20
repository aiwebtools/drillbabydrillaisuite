
import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import { Button } from "./ui/button";

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-energy-950 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl" data-animate="true">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          <span className="text-gradient">AI-Powered Drilling Insights</span>
        </h2>
        <p className="text-lg text-energy-300 max-w-2xl mx-auto mb-8 text-center">
          See how our AI tools revolutionize well planning and production optimization
        </p>
        <YouTubeEmbed 
          videoId="dQw4w9WgXcQ" 
          title="DRILL BABY DRILL AI SUITE Demo" 
          className="shadow-lg shadow-drill-600/20"
        />
        
        <div className="mt-8 text-center">
          <a 
            href="#tools" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Compare Oil & Gas AI Tools
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-drill-600/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-drill-600/5 rounded-full -ml-40 -mb-40" />
    </section>
  );
};

export default VideoSection;
