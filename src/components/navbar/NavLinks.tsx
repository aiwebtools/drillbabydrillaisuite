
import React from "react";
import { ExternalLink } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

interface NavLinksProps {
  links: NavLink[];
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, onLinkClick }) => {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group relative text-white hover:text-cyan-400 transition-all duration-300 font-medium flex items-center px-3 py-2 rounded-lg hover:bg-white/5"
          onClick={onLinkClick}
        >
          <span className="relative z-10">{link.name}</span>
          {link.external && <ExternalLink className="ml-1.5 h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
        </a>
      ))}
    </>
  );
};

export default NavLinks;
