
import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./ui-custom/GlassCard";
import { tools } from "@/lib/tools";
import CyberpunkLogo from "./CyberpunkLogo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
  ];

  const toolLinks = tools.map(tool => ({
    name: tool.name,
    href: tool.link
  }));

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 backdrop-blur-md bg-energy-950/80" : "py-4",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <GlassCard
          variant="dark"
          intensity={scrolled ? "medium" : "low"}
          className={cn(
            "flex items-center justify-between py-2 px-2 sm:px-4 transition-all duration-300 border-cyber-light/20",
            scrolled ? "shadow-[0_0_15px_rgba(0,255,255,0.15)]" : ""
          )}
        >
          <div className="flex items-center overflow-hidden">
            <div className="ml-1 sm:ml-0 flex-shrink-0">
              <CyberpunkLogo size="sm" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {/* Oil & Gas AI Tools dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center">
                Select Oil & Gas AI
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <GlassCard variant="dark" intensity="high" className="py-2 px-1 border border-cyan-500/20">
                  <div className="flex flex-col space-y-1">
                    {toolLinks.map((tool, index) => (
                      <a
                        key={index}
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-energy-200 hover:text-cyan-400 transition-colors text-sm px-3 py-1.5 flex items-center"
                      >
                        {tool.name}
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
            
            {/* More AI Tools link */}
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center"
            >
              More AI Tools
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
            
            {/* Compare Tools button */}
            <a 
              href="#tools" 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2 rounded-full font-medium transition-colors shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/40"
            >
              Compare Oil & Gas AI Tools
            </a>
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-white focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[85%] max-w-xs bg-energy-950/95 backdrop-blur-lg border-energy-800">
              <div className="py-4 px-4 border-b border-energy-800 flex items-center justify-between">
                <CyberpunkLogo size="sm" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white focus:outline-none"
                >
                  <X size={20} />
                </button>
              </div>
              
              <ScrollArea className="h-[calc(100vh-80px)]">
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-cyan-400 transition-colors font-medium py-3 border-b border-energy-800 flex items-center"
                      onClick={handleNavLinkClick}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="py-4">
                    <div className="font-medium text-white mb-3">Select Oil & Gas AI:</div>
                    <div className="grid grid-cols-1 gap-y-3 pl-2">
                      {toolLinks.map((tool, index) => (
                        <a
                          key={index}
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-energy-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                          onClick={handleNavLinkClick}
                        >
                          {tool.name}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-energy-800">
                      <a
                        href="https://www.aiwebtools.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-energy-200 hover:text-cyan-400 transition-colors font-medium flex items-center"
                        onClick={handleNavLinkClick}
                      >
                        More AI Tools
                        <ExternalLink className="ml-1.5 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pb-6">
                    <a
                      href="#tools"
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-3 px-4 rounded-full font-medium block"
                      onClick={handleNavLinkClick}
                    >
                      Compare Oil & Gas AI Tools
                    </a>
                  </div>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </GlassCard>
      </div>
    </header>
  );
};

export default Navbar;
