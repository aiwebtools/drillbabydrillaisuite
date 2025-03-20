
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
          className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center"
          onClick={onLinkClick}
        >
          {link.name}
          {link.external && <ExternalLink className="ml-1.5 h-3.5 w-3.5" />}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
