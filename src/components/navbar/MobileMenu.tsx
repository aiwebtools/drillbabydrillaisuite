
import React from "react";
import { X, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
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
              <div className="font-medium text-white mb-3">Select Oil & Gas AI:</div>
              <div className="grid grid-cols-1 gap-y-4 pl-2">
                {toolLinks.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-energy-300 hover:text-cyan-400 active:text-cyan-500 transition-colors text-sm flex items-center"
                    onClick={handleNavLinkClick}
                  >
                    {tool.name}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 pb-10">
              <a
                href="#tools"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-3 px-6 rounded-full font-medium block active:opacity-90"
                onClick={handleNavLinkClick}
              >
                Compare Oil & Gas AI Tools
              </a>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
