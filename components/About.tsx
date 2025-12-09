import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../constants';
import { SectionId } from '../types';
import { GraduationCap, MapPin, Code2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Col: Narrative */}
        <RevealOnScroll>
          <div>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering scalable solutions for complex problems.
            </h3>
            
            <div className="prose prose-invert text-text-secondary text-lg leading-relaxed space-y-6">
              <p>
                I am a Software Developer based in <span className="text-white font-medium">Calgary, AB</span>, driven by a passion for building robust back-end systems and intuitive user interfaces.
              </p>
              <p>
                With deep expertise in <span className="text-white">Go, C#/.NET, and Python</span>, I focus on creating production-grade APIs and microservices that stand the test of time. My approach combines clean architecture principles with pragmatic problem-solving.
              </p>
              <p>
                Currently, I'm leveraging cloud-native technologies to build multi-tenant platforms and real-time data pipelines.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
               <div className="flex items-center text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  {PERSONAL_INFO.location}
               </div>
               <div className="h-4 w-[1px] bg-white/10"></div>
               <div className="flex items-center text-sm text-text-secondary">
                  <Code2 className="w-4 h-4 mr-2 text-accent" />
                  Full Stack Developer
               </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Col: Education & Stats */}
        <RevealOnScroll delay={200}>
            <div className="space-y-6">
                {/* Education Card */}
                <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <GraduationCap className="w-32 h-32" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-1">Education</h4>
                    <p className="text-sm text-text-secondary mb-6">Academic Background</p>

                    <div className="space-y-4 relative z-10">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h5 className="font-semibold text-white">{EDUCATION.degree}</h5>
                                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">{EDUCATION.period}</span>
                            </div>
                            <p className="text-text-secondary">{EDUCATION.institution}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-sm text-gray-400 mb-3">Key Coursework</p>
                            <div className="flex flex-wrap gap-2">
                                {EDUCATION.courses.map((course, i) => (
                                    <span key={i} className="text-xs text-text-secondary bg-white/5 px-2 py-1 rounded border border-white/5">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default About;