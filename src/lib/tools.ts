
import { LucideIcon } from "lucide-react";
import { 
  GraduationCap, Cpu, Truck, Leaf, ShieldCheck, 
  BarChart3, Settings, ShieldAlert, Drill, Globe 
} from "lucide-react";

export interface Tool {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  features: string[];
  link: string;
  color: string;
  iconBg: string;
  primaryColor: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "PetroMaster AI",
    description: "Advanced, comprehensive AI solution that revolutionizes the oil & gas industry through workforce training, energy transition strategy, automated reporting, & global operational management.",
    shortDescription: "Advanced AI for workforce training, energy transition & global operations",
    icon: GraduationCap,
    features: [
      "Advanced Workforce Training & Certification",
      "Strategic Energy Transition Insights",
      "Automated Industry Documentation & Reporting",
      "Global Operational Management & Advisory",
    ],
    link: "https://chatgpt.com/g/g-67db8234c568819194e19bbc67c5801b-petromaster-ai",
    color: "drill-600",
    iconBg: "bg-drill-100",
    primaryColor: "text-drill-600",
  },
  {
    id: 2,
    name: "PetroTech Innovator",
    description: "Cutting-edge technology integration for oil & gas operations, focusing on rig automation, robotics, drones, digital twin creation, & AI-driven predictive analytics.",
    shortDescription: "Advanced technology integration for rig automation & predictive analytics",
    icon: Cpu,
    features: [
      "Automation Solutions Integration",
      "Robotics & Remote Operation Advice",
      "Digital Twin Scenario Simulation",
      "AI-Driven Predictive Analytics",
    ],
    link: "https://chatgpt.com/g/g-67db7f6195848191ae0c02dddfb3b1d9-petrotech-innovator-gpt",
    color: "amber-600",
    iconBg: "bg-amber-100",
    primaryColor: "text-amber-600",
  },
  {
    id: 3,
    name: "OilLogistics GPT",
    description: "Full-service logistical planning for oil & gas companies, covering supply chains, cross-border logistics, asset tracking, & crew management.",
    shortDescription: "Comprehensive logistical planning for the energy supply chain",
    icon: Truck,
    features: [
      "Supply Chain Optimization",
      "Cross-Border Logistics & Compliance",
      "Fleet & Cargo Management",
      "AI-Driven Logistics Intelligence",
    ],
    link: "https://chatgpt.com/g/g-67db7da1ea288191856f5c5a58362a62-oillogistics-gpt",
    color: "blue-600",
    iconBg: "bg-blue-100",
    primaryColor: "text-blue-600",
  },
  {
    id: 4,
    name: "GreenDrill GPT",
    description: "Sustainable drilling practices, carbon footprint management, renewable integration, water conservation, & environmental impact reduction solutions.",
    shortDescription: "Sustainable drilling practices for reduced environmental impact",
    icon: Leaf,
    features: [
      "Environmental Impact Assessments",
      "Emission Monitoring & Reduction Strategies",
      "Sustainable Drilling Techniques",
      "Water Conservation & Management",
    ],
    link: "https://chatgpt.com/g/g-67db7bcdb97481919a202f3ab2200e45-greendrill-gpt",
    color: "green-600",
    iconBg: "bg-green-100",
    primaryColor: "text-green-600",
  },
  {
    id: 5,
    name: "PetroCompliance GPT",
    description: "AI-powered regulatory & legal compliance solutions, managing permitting, global regulatory changes, ESG metrics, & automated reporting.",
    shortDescription: "Regulatory compliance solutions for the energy sector",
    icon: ShieldCheck,
    features: [
      "Real-Time Regulation Updates",
      "Permit Acquisition Guidance",
      "ESG & Sustainability Compliance Tracking",
      "Automated Compliance Reporting",
    ],
    link: "https://chatgpt.com/g/g-67db796e1664819193bb1fdda36c81e3-petrocompliance-gpt",
    color: "purple-600",
    iconBg: "bg-purple-100",
    primaryColor: "text-purple-600",
  },
  {
    id: 6,
    name: "PetroFinancial GPT",
    description: "Comprehensive financial analysis, investment strategies, real-time market predictions, & profitability assessments for oil & gas projects.",
    shortDescription: "Financial analysis and investment strategies for energy projects",
    icon: BarChart3,
    features: [
      "Oil Futures & Commodity Trading Signals",
      "Asset & Project Valuation",
      "Investment Risk Assessment",
      "Cost Optimization & Profitability Analysis",
    ],
    link: "https://chatgpt.com/g/g-67db7707cfbc8191ac34069dd0664e51-petrofinancial-gpt",
    color: "emerald-600",
    iconBg: "bg-emerald-100",
    primaryColor: "text-emerald-600",
  },
  {
    id: 7,
    name: "RigMaster GPT",
    description: "Efficient oil rig operations solution providing predictive maintenance, corrosion control strategies, equipment tracking, & automated inspections.",
    shortDescription: "Predictive maintenance & equipment tracking for rig operations",
    icon: Settings,
    features: [
      "Predictive Equipment Failure Alerts",
      "Corrosion Prevention & Control",
      "Automated Equipment Tracking",
      "Real-Time Performance Optimization",
    ],
    link: "https://chatgpt.com/g/g-67db7297b9ac8191a41e30599e0b5352-rigmaster-gpt",
    color: "orange-600",
    iconBg: "bg-orange-100",
    primaryColor: "text-orange-600",
  },
  {
    id: 8,
    name: "SafetyGuard GPT",
    description: "Comprehensive oil rig and refinery safety management providing risk assessments, predictive safety alerts, and emergency response training simulations.",
    shortDescription: "Safety management for oil rigs and refineries",
    icon: ShieldAlert,
    features: [
      "Risk Assessment & Hazard Identification",
      "Predictive Accident Modeling",
      "Virtual Incident Simulation Training",
      "Emergency Response Optimization",
    ],
    link: "https://chatgpt.com/g/g-67db6f806914819193737a13a26a7782-safetyguard-gpt",
    color: "red-600",
    iconBg: "bg-red-100",
    primaryColor: "text-red-600",
  },
  {
    id: 9,
    name: "DrillGenius GPT",
    description: "Comprehensive support for drilling operations utilizing predictive analytics, real-time drilling recommendations, mud engineering management, and rig performance monitoring.",
    shortDescription: "Real-time drilling optimization & performance monitoring",
    icon: Drill,
    features: [
      "AI-Driven Drilling Optimization",
      "Real-Time Performance Monitoring",
      "Intelligent Mud Engineering",
      "Automated Rig Performance Benchmarking",
    ],
    link: "https://chatgpt.com/g/g-67db6c15e7088191b80dc642b5d99765-drillgenius-gpt",
    color: "cyan-600",
    iconBg: "bg-cyan-100",
    primaryColor: "text-cyan-600",
  },
  {
    id: 10,
    name: "PetroExplorer GPT",
    description: "AI-powered seismic and geological exploration expert designed to identify prime drilling locations, assess geological risks, and predict resource availability and quality.",
    shortDescription: "Seismic & geological exploration for optimal drilling sites",
    icon: Globe,
    features: [
      "Geological Risk Assessments",
      "Exploration Mapping & Visualization",
      "Predictive Modeling of Resources",
      "Advanced Geospatial Analysis",
    ],
    link: "https://chatgpt.com/g/g-67db6a351af08191b5e8adf1d281bbc0-petroexplorer-gpt",
    color: "indigo-600",
    iconBg: "bg-indigo-100",
    primaryColor: "text-indigo-600",
  },
];
