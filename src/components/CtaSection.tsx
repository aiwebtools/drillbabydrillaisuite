
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
          <a href="#tools" className="btn-primary inline-flex">
            Compare Tools
          </a>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-drill-600/10 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-drill-600/10 rounded-full -mr-48 -mb-48" />
    </section>
  );
};

export default CtaSection;
