import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16 md:mb-28" />

        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-sm font-medium text-accent tracking-wide uppercase">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary mt-4 mb-6">
              Let's build something<br />
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-12">
              Currently working as a Lead Backend Developer at Havenz Tech. Always happy to connect, feel free to reach out about tech, projects, or just to say hi.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm"
              >
                <Mail className="w-4 h-4" />
                Say Hello
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-primary font-semibold hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="border-t border-white/[0.04] pt-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-muted gap-4">
                <span>
                  <span className="text-text-primary font-medium">Connor Davison</span> &copy; {new Date().getFullYear()}
                </span>

                <div className="flex gap-6">
                  {[
                    { href: PERSONAL_INFO.github, label: 'GitHub' },
                    { href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                    { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel={label !== 'Email' ? 'noreferrer' : undefined}
                      className="hover:text-text-primary transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
