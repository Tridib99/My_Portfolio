import React from 'react';
import { Code, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/60 to-primary/30 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-primary transition-colors capitalize cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:text-primary hover:border-primary/40 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:text-primary hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(141,255,105,0.3)] ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Designed & Built with React & Express.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
