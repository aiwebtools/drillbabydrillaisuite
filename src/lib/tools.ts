
import { Drill, Database, TrendingUp, FileCode, Users, Search, Settings, FileText, AlertTriangle, Info } from "lucide-react";

export interface Tool {
  id: number;
  name: string;
  shortDescription: string;
  icon: any;
  iconBg: string;
  description: string;
  features: string[];
  primaryColor: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "PetroMaster AI",
    shortDescription: "Advanced workforce training & operational management",
    icon: Users,
    iconBg: "bg-blue-50",
    primaryColor: "text-blue-600",
    description: "A comprehensive AI solution that revolutionizes the oil & gas industry through workforce training, energy transition strategy, automated reporting, & global operational management.",
    features: [
      "Advanced Workforce Training & Certification",
      "Strategic Energy Transition Insights",
      "Automated Industry Documentation & Reporting",
      "Global Operational Management & Advisory"
    ]
  },
  {
    id: 2,
    name: "PetroTech Innovator",
    shortDescription: "Cutting-edge technology integration for operations",
    icon: Settings,
    iconBg: "bg-purple-50",
    primaryColor: "text-purple-600",
    description: "Guides the integration of cutting-edge technologies into oil & gas operations, focusing on rig automation, robotics, drones, digital twin creation, & AI-driven predictive analytics.",
    features: [
      "Automation Solutions Integration",
      "Robotics & Remote Operation Advice",
      "Digital Twin Scenario Simulation",
      "AI-Driven Predictive Analytics"
    ]
  },
  {
    id: 3,
    name: "OilLogistics GPT",
    shortDescription: "Full-service logistical planning & optimization",
    icon: TrendingUp,
    iconBg: "bg-amber-50",
    primaryColor: "text-amber-600",
    description: "Provides full-service logistical planning for oil & gas companies, covering supply chains, cross-border logistics, asset tracking, & crew management.",
    features: [
      "Supply Chain Optimization",
      "Automated Crew Scheduling & Management",
      "Cross-Border Logistics & Compliance",
      "Fleet & Cargo Management"
    ]
  },
  {
    id: 4,
    name: "GreenDrill GPT",
    shortDescription: "Sustainable drilling practices & environmental management",
    icon: Info,
    iconBg: "bg-green-50",
    primaryColor: "text-green-600",
    description: "Assists in sustainable drilling practices, carbon footprint management, renewable integration, water conservation, & environmental impact reduction.",
    features: [
      "Environmental Impact Assessments",
      "Emission Monitoring & Reduction Strategies",
      "Sustainable Drilling Techniques",
      "Water Conservation & Management"
    ]
  },
  {
    id: 5,
    name: "PetroCompliance GPT",
    shortDescription: "Regulatory & legal compliance solutions",
    icon: FileText,
    iconBg: "bg-red-50",
    primaryColor: "text-red-600",
    description: "Provides AI-powered regulatory & legal compliance solutions, managing permitting, global regulatory changes, ESG metrics, & automated reporting.",
    features: [
      "RealTime Regulation Updates",
      "Permit Acquisition Guidance",
      "ESG & Sustainability Compliance Tracking",
      "Automated Compliance Reporting"
    ]
  },
  {
    id: 6,
    name: "PetroFinancial GPT",
    shortDescription: "Financial analysis & investment strategies",
    icon: Database,
    iconBg: "bg-indigo-50",
    primaryColor: "text-indigo-600",
    description: "Provides comprehensive financial analysis, investment strategies, real-time market predictions, & profitability assessments for oil & gas projects.",
    features: [
      "Oil Futures & Commodity Trading Signals",
      "Asset & Project Valuation",
      "Economic Forecasting & Budgeting Tools",
      "Investment Risk Assessment"
    ]
  },
  {
    id: 7,
    name: "RigMaster GPT",
    shortDescription: "Efficient oil rig operations & maintenance",
    icon: Drill,
    iconBg: "bg-orange-50",
    primaryColor: "text-orange-600",
    description: "Assists users in ensuring efficient oil rig operations by providing predictive maintenance, corrosion control strategies, equipment tracking, & automated inspections.",
    features: [
      "Predictive Equipment Failure Alerts",
      "Maintenance Scheduling & Resource Optimization",
      "Rig Performance Analytics",
      "Safety Protocol Compliance"
    ]
  },
  {
    id: 8,
    name: "DrillAnalytics Pro",
    shortDescription: "Data-driven drilling optimization & analysis",
    icon: FileCode,
    iconBg: "bg-cyan-50",
    primaryColor: "text-cyan-600",
    description: "Sophisticated analytics platform for drilling operations, providing real-time data analysis and optimization recommendations.",
    features: [
      "Real-time Drilling Data Analysis",
      "Performance Benchmarking",
      "Drilling Parameter Optimization",
      "Cost Efficiency Tracking"
    ]
  },
  {
    id: 9,
    name: "ReservoirInsight AI",
    shortDescription: "Reservoir modeling & production forecasting",
    icon: Search,
    iconBg: "bg-emerald-50",
    primaryColor: "text-emerald-600",
    description: "Advanced AI for reservoir modeling, simulation, and production forecasting to maximize recovery and efficiency.",
    features: [
      "3D Reservoir Visualization",
      "Production Decline Analysis",
      "Enhanced Oil Recovery Planning",
      "Geological Feature Recognition"
    ]
  },
  {
    id: 10,
    name: "SafetyGuardian AI",
    shortDescription: "Risk mitigation & safety management",
    icon: AlertTriangle,
    iconBg: "bg-rose-50",
    primaryColor: "text-rose-600",
    description: "Comprehensive safety management system for identifying risks, preventing incidents, and ensuring regulatory compliance.",
    features: [
      "Real-time Safety Risk Detection",
      "Incident Prevention Analytics",
      "Safety Training Management",
      "Hazard Identification & Mitigation"
    ]
  }
];
