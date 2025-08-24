import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 illiyin-transition ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-stone-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer hover:opacity-80 illiyin-transition magnetic"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_tech-portfolio-74/artifacts/ghfq15rz_image.png"
              alt="Ayan Mohamed Logo"
              className="h-10 w-auto illiyin-transition"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg illiyin-transition font-medium magnetic reveal-up visible stagger-${index + 1} ${
                  activeSection === item.id
                    ? "text-stone-800 bg-stone-200 shadow-sm"
                    : "text-stone-600 hover:text-stone-800 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-800 hover:text-stone-600 illiyin-transition magnetic p-2"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute illiyin-transition ${
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`} 
              />
              <X 
                size={24} 
                className={`absolute illiyin-transition ${
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden illiyin-transition ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100 mt-4" 
            : "max-h-0 opacity-0 mt-0"
        }`}>
          <div className="py-4 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg border border-stone-200/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 illiyin-transition font-medium illiyin-hover stagger-${index + 1} ${
                  activeSection === item.id
                    ? "text-stone-800 bg-stone-100"
                    : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;