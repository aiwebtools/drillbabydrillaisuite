
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { tools } from "@/lib/tools";
import CyberpunkLogo from "./CyberpunkLogo";
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarContainer from "./navbar/NavbarContainer";
import NavLinks from "./navbar/NavLinks";
import ToolsDropdown from "./navbar/ToolsDropdown";
import CompareToolsButton from "./navbar/CompareToolsButton";
import MobileMenu from "./navbar/MobileMenu";

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
    { 
      name: "More AI Tools", 
      href: "https://www.aiwebtools.ai",
      external: true 
    },
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
    <NavbarContainer scrolled={scrolled} className={className}>
      <div className="flex items-center overflow-hidden">
        <div className="ml-1 sm:ml-0 flex-shrink-0">
          <CyberpunkLogo size="sm" />
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        <NavLinks links={navLinks} />
        <ToolsDropdown toolLinks={toolLinks} />
        <CompareToolsButton />
      </nav>

      {/* Mobile menu trigger and content */}
      <div className="md:hidden">
        <MobileMenu
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          navLinks={navLinks}
          toolLinks={toolLinks}
          handleNavLinkClick={handleNavLinkClick}
        />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
