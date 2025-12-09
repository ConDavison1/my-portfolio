import React from 'react';
import { SKILL_CATEGORIES, SKILL_ICONS } from '../constants';
import { SectionId } from '../types';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Expertise</h2>
            <h3 className="text-3xl font-bold text-white">Tech Stack</h3>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (SKILL_ICONS as any)[cat.category] || null;
            
            return (
              <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
                <div 
                  className="bg-bg-dark border border-white/5 p-6 rounded-lg hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-white/5 rounded-md text-accent">
                       {IconComponent && <IconComponent className="w-5 h-5" />}
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-white">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1 text-xs font-medium text-text-secondary bg-white/5 rounded border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
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