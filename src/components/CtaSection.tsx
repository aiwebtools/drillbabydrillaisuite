
import React from "react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-energy-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Oil & Gas Operations?
          </h2>
          <p className="text-xl text-energy-300 mb-8">
            Join the growing number of energy companies leveraging AI to optimize their workflows,
            reduce costs, and drive sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tools" className="btn-primary">
              Compare Oil & Gas AI Tools
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              Explore More AI Tools
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-drill-600/10 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-drill-600/10 rounded-full -mr-48 -mb-48" />
    </section>
  );
};

export default CtaSection;
