import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { SectionId } from '../types';
import { GraduationCap, MapPin, Briefcase, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-16 md:py-28 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="section-divider mb-16 md:mb-28" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* Left: Narrative (3 cols) */}
        <div className="lg:col-span-3">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-accent tracking-wide uppercase">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-8">
              Engineering scalable solutions<br />
              <span className="gradient-text">for complex problems.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
              <p>
                I'm a Software Developer based in <span className="text-text-primary font-medium">Calgary, AB</span>, driven by a passion for building robust back-end systems, AI-powered platforms, and intuitive user interfaces.
              </p>
              <p>
                With deep expertise in <span className="text-text-primary font-medium">Go, C#/.NET, and Python</span>, I architect production-grade microservices and APIs — from multi-tenant SaaS platforms to self-hosted AI systems with local LLMs, RAG pipelines, and real-time transcription.
              </p>
              <p>
                Currently building <span className="text-text-primary font-medium">EncapsulAI</span>, a privacy-first AI meeting intelligence platform with 10 Dockerized microservices across four languages, and leading backend development at Havenz Tech.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-text-secondary">
                <Briefcase className="w-3.5 h-3.5 text-accent" />
                Lead Backend Developer
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right: Education Card (2 cols) */}
        <div className="lg:col-span-2">
          <RevealOnScroll delay={200} direction="right">
            <div className="glass-card card-shine rounded-2xl p-8 relative">
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, #818cf8, transparent 70%)' }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent/10">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Education</h3>
                  <p className="text-xs text-text-muted">Academic Background</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">{EDUCATION.degree}</h4>
                  <p className="text-sm text-text-secondary mb-2">{EDUCATION.institution}</p>
                  <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {EDUCATION.period}
                  </span>
                </div>

                <div className="pt-5 border-t border-white/[0.06]">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-3 font-medium">Key Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-xs text-text-secondary bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
