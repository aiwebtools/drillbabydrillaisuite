
import React, { useState, useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./ui-custom/GlassCard";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Tools", href: "#tools" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <GlassCard
          className={cn(
            "flex items-center justify-between py-2 px-4 transition-all duration-300",
            scrolled ? "shadow-md" : ""
          )}
          intensity={scrolled ? "medium" : "low"}
        >
          <div className="flex items-center">
            <AnimatedLogo size="sm" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-energy-800 hover:text-drill-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-2 px-4">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-energy-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </GlassCard>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <GlassCard className="md:hidden mt-2 py-4 px-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-energy-800 hover:text-drill-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </GlassCard>
        )}
      </div>
    </header>
  );
};

export default Navbar;
