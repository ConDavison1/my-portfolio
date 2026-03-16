import React from 'react';
import { SKILL_CATEGORIES, SKILL_ICONS } from '../constants';
import { SectionId } from '../types';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  // Bento grid sizing: first two cards are larger
  const getGridClass = (idx: number) => {
    if (idx < 2) return 'md:col-span-1';
    return 'md:col-span-1';
  };

  return (
    <section id={SectionId.SKILLS} className="py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16 md:mb-28" />

        <RevealOnScroll>
          <div className="mb-14">
            <span className="text-sm font-medium text-accent tracking-wide uppercase">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3">
              Tech Stack
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (SKILL_ICONS as any)[cat.category] || null;

            return (
              <RevealOnScroll key={idx} delay={idx * 80} className={`${getGridClass(idx)} h-full`}>
                <div className="glass-card card-shine rounded-2xl p-6 h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                    </div>
                    <h3 className="font-semibold text-text-primary">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="skill-badge px-3 py-1.5 text-xs font-medium text-text-secondary bg-white/[0.04] rounded-lg border border-white/[0.06] cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
