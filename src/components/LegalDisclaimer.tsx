
import React from "react";
import { GlassCard } from "./ui-custom/GlassCard";

const LegalDisclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 bg-energy-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Legal <span className="text-gradient">Disclaimer</span>
          </h2>
          <p className="text-lg text-energy-300 max-w-2xl mx-auto">
            Important information about using our AI tools and services.
          </p>
        </div>

        <GlassCard 
          variant="dark" 
          className="p-8 max-w-4xl mx-auto" 
          data-animate="true"
        >
          <div className="space-y-6 text-energy-200">
            <p>
              <strong className="text-white">No Professional Advice:</strong> DRILL BABY DRILL AI SUITE and its associated tools provide information for general purposes only. They do not constitute professional advice, recommendations, or services. Users should always consult with qualified professionals before making any operational, safety, financial, or legal decisions in the oil and gas industry.
            </p>
            
            <p>
              <strong className="text-white">No Warranties:</strong> The tools are provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or reliability of the information provided by our AI tools. Results may vary based on the quality of input data and changing operational conditions.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use our AI tools, even if advised of the possibility of such damages.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> Users are solely responsible for decisions made and actions taken based on information provided by our AI tools. Users should independently verify all information before implementation in actual operational environments.
            </p>
            
            <p>
              <strong className="text-white">Compliance with Laws:</strong> Users must ensure that their use of our AI tools complies with all applicable laws, regulations, and industry standards. Our tools are not designed to replace mandatory safety procedures, regulatory requirements, or compliance obligations.
            </p>
            
            <p>
              <strong className="text-white">Third-Party Content:</strong> References to third-party websites, services, or content are for informational purposes only and do not constitute endorsement or recommendation.
            </p>
            
            <p className="text-energy-300 text-sm mt-8">
              By accessing and using the DRILL BABY DRILL AI SUITE, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, you should not use our AI tools.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-drill-600/5 rounded-full -ml-36 -mt-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-drill-600/5 rounded-full -mr-48 -mb-48" />
    </section>
  );
};

export default LegalDisclaimer;
