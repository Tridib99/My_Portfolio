import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import {useScrollSpy} from "../../hooks/useScrollSpy";



// console.log("NAV_LINKS:", NAV_LINKS);
// console.log("PERSONAL_INFO:", PERSONAL_INFO);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

   const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    
    <nav
    
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-primary/60 bg-gradient-to-br from-primary/25 via-black to-primary/10 text-xl font-black italic tracking-[-0.18em] text-primary shadow-[0_0_22px_rgba(141,255,105,0.24)] transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:border-primary group-hover:text-white">
              <span className="absolute left-[9px] top-[7px]">T</span>
              <span className="absolute bottom-[7px] right-[8px] text-[13px] text-white">M</span>
            </span>
            <span className="text-2xl font-black tracking-[0.22em] bg-gradient-to-r from-primary via-primary/70 to-white/80 bg-clip-text text-transparent">
              TRI
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    :
                  "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-4 text-white hover:white/80 transition-colors"
            aria-label='menu'
            aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              
              
          </button>

        </div>
      </div>

      <div 
      className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5 rounded-lg"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2">
              Hire Me
            </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;