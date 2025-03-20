
import React from "react";
import { GlassCard } from "./ui-custom/GlassCard";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What is DRILL BABY DRILL AI SUITE?",
      answer: "DRILL BABY DRILL AI SUITE is a comprehensive collection of 10 specialized AI tools designed for the oil and gas industry. These tools help optimize operations, ensure safety compliance, improve financial performance, and enable sustainable practices across all aspects of oil and gas exploration, drilling, and production."
    },
    {
      question: "How does SafetyGuard GPT help prevent accidents?",
      answer: "SafetyGuard GPT uses predictive analytics and real-time monitoring to identify potential safety hazards before they lead to accidents. It analyzes historical incident data, current operational conditions, and regulatory requirements to provide early warning alerts and proactive safety recommendations."
    },
    {
      question: "Are these AI tools compatible with existing oil and gas systems?",
      answer: "Yes, our AI tools are designed to integrate seamlessly with existing operational systems, data sources, and workflows in the oil and gas industry. They can connect to SCADA systems, IoT sensors, and enterprise management software to provide real-time insights and recommendations."
    },
    {
      question: "Do I need technical expertise to use these tools?",
      answer: "While our tools leverage sophisticated AI technology, they're designed with user-friendly interfaces that require minimal technical expertise. Our support team also provides onboarding assistance to ensure smooth implementation within your organization."
    },
    {
      question: "How secure is my operational data when using these tools?",
      answer: "Data security is our top priority. All tools in the DRILL BABY DRILL AI SUITE implement industry-leading encryption standards, secure authentication protocols, and strict data handling procedures to protect your sensitive operational information."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-energy-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-energy-300 max-w-2xl mx-auto">
            Find answers to common questions about our AI tools and how they can transform your oil and gas operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard 
              key={index} 
              variant="dark" 
              className="p-6" 
              data-animate="true"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
              <p className="text-energy-300">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-drill-600/5 rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-drill-600/5 rounded-full -ml-32 -mb-32" />
    </section>
  );
};

export default FaqSection;
