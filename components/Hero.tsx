import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { SectionId } from '../types';
import Wizard from './Wizard';
import MountainSilhouette from './MountainSilhouette';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-16">
      <MountainSilhouette />
      <Wizard />
      
      {/* Content Container */}
      <div className="z-10 text-center max-w-4xl relative">
        
        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {PERSONAL_INFO.name}
        </h1>
        
        {/* Title */}
        <p 
          className={`text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto font-light transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {PERSONAL_INFO.title} specializing in distributed systems, API architecture, and cloud-native solutions.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
           <a 
             href={`mailto:${PERSONAL_INFO.email}`} 
             className="px-8 py-3.5 bg-white text-black hover:bg-gray-200 font-semibold rounded transition-colors w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
           >
             Get in Touch
           </a>
           <a 
             href="#projects"
             className="px-8 py-3.5 bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5 font-medium rounded transition-all w-full sm:w-auto backdrop-blur-sm"
           >
             View Projects
           </a>
        </div>

        {/* Social Links */}
        <div 
          className={`flex gap-6 justify-center transition-all duration-1000 delay-900 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
             <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
             </a>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
             </a>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="text-text-secondary hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
             </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 animate-bounce cursor-pointer text-text-secondary hover:text-accent transition-all duration-1000 delay-1000 transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  );
};

export default Hero;