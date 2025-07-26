
import React from "react";
import { X, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { tools } from "@/lib/tools";
import CyberpunkLogo from "../CyberpunkLogo";

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

interface ToolLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navLinks: NavLink[];
  toolLinks: ToolLink[];
  handleNavLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  navLinks,
  toolLinks,
  handleNavLinkClick,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden text-white focus:outline-none p-2 touch-manipulation"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[85%] max-w-xs bg-energy-950/95 backdrop-blur-lg border-energy-800">
        <div className="py-3 px-4 border-b border-energy-800 flex items-center justify-between">
          <div className="flex-grow flex justify-start">
            <CyberpunkLogo size="sm" />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none p-2 touch-manipulation"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-70px)]">
          <nav className="flex flex-col p-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white hover:text-cyan-400 active:bg-energy-800/40 transition-colors font-medium py-4 border-b border-energy-800 flex items-center px-1"
                onClick={handleNavLinkClick}
              >
                {link.name}
                {link.external && <ExternalLink className="ml-1 h-3.5 w-3.5" />}
              </a>
            ))}
            <div className="py-4">
              <div className="font-medium text-white mb-3">AI Tools:</div>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries({
                  "Training & Management": [1],
                  "Technology & Innovation": [2],
                  "Logistics & Operations": [3, 7, 9],
                  "Sustainability & Environment": [4, 11],
                  "Compliance & Finance": [5, 6],
                  "Safety & Exploration": [8, 10],
                }).map(([category, toolIds]) => (
                  <AccordionItem key={category} value={category} className="border-energy-800">
                    <AccordionTrigger className="text-energy-200 hover:text-cyan-400 py-2 text-sm font-medium hover:no-underline">
                      {category}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="space-y-2 pl-2">
                        {toolIds.map((toolId) => {
                          const tool = tools.find(t => t.id === toolId);
                          if (!tool) return null;
                          
                          return (
                            <a
                              key={tool.id}
                              href={tool.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between text-energy-300 hover:text-cyan-400 transition-colors text-xs py-2"
                              onClick={handleNavLinkClick}
                            >
                              <div className="flex items-center gap-2">
                                <tool.icon className="w-3 h-3" />
                                <span>{tool.name}</span>
                              </div>
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-6 pb-10">
              <a
                href="#tools"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-3 px-6 rounded-full font-medium block active:opacity-90"
                onClick={handleNavLinkClick}
              >
                Compare
              </a>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
