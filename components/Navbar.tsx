import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HERO);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = Object.values(SectionId);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.EXPERIENCE, label: 'Experience' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      {/* Frosted glass background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/70 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`} />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo(SectionId.HERO)}
            className="relative group"
          >
            <span className="text-xl font-bold tracking-tight">
              <span className="text-text-primary">C</span>
              <span className="gradient-text">D</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-text-primary bg-white/[0.06]'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="bg-bg-primary/95 backdrop-blur-2xl border-b border-white/[0.04] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-3.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-text-primary bg-white/[0.06]'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
