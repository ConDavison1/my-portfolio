import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay for initial page load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Hero-specific glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            filter: isLoaded ? 'blur(0)' : 'blur(8px)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 200ms',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-text-secondary">Available for collaboration</span>
        </div>

        {/* Name */}
        <h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            filter: isLoaded ? 'blur(0)' : 'blur(10px)',
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 400ms',
          }}
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed mb-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            filter: isLoaded ? 'blur(0)' : 'blur(8px)',
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 600ms',
          }}
        >
          Software Engineer building{' '}
          <span className="text-text-primary font-medium">distributed systems</span>,{' '}
          <span className="text-text-primary font-medium">APIs</span>, and{' '}
          <span className="text-text-primary font-medium">cloud-native</span> solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            filter: isLoaded ? 'blur(0)' : 'blur(8px)',
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 800ms',
          }}
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-glow px-8 py-3.5 text-white font-semibold rounded-xl text-sm w-full sm:w-auto"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 text-text-primary bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] font-medium rounded-xl transition-all duration-300 text-sm w-full sm:w-auto"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-4 justify-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 1000ms',
          }}
        >
          {[
            { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
            { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="p-3.5 md:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-text-secondary hover:text-text-primary hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 text-text-muted hover:text-text-secondary transition-colors"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease 1.4s',
          animation: isLoaded ? 'bounce 2s ease-in-out infinite 2s' : 'none',
        }}
      >
        <ArrowDown className="w-5 h-5" />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
