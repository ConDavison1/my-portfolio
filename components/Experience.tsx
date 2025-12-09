import React from 'react';
import { EXPERIENCE, PROJECTS } from '../constants';
import { SectionId } from '../types';
import { ArrowUpRight, Calendar } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <div>
        {/* Work Experience */}
        <section id={SectionId.EXPERIENCE} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Career Path</h2>
                <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
              </div>
            </RevealOnScroll>

            <div className="space-y-12">
            {EXPERIENCE.map((job, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div className="group grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                      {/* Left: Date */}
                      <div className="md:col-span-1 text-sm text-text-secondary font-mono pt-1">
                          <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {job.period}</span>
                          <div className="mt-1 text-white/40 text-xs">{job.location}</div>
                      </div>

                      {/* Right: Content */}
                      <div className="md:col-span-3">
                          <div className="mb-4">
                              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{job.title}</h3>
                              <div className="text-lg text-white/80">{job.company}</div>
                          </div>

                          <div className="text-text-secondary space-y-3 mb-6 leading-relaxed">
                              {job.details.map((point, pIdx) => (
                                  <p key={pIdx} className="text-sm md:text-base flex items-start">
                                    <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0"></span>
                                    {point}
                                  </p>
                              ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, tIdx) => (
                                  <span key={tIdx} className="text-xs font-medium text-accent bg-accent/5 px-2.5 py-1 rounded-full border border-accent/10 hover:bg-accent/10 transition-colors cursor-default">
                                      {tech}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>
                </RevealOnScroll>
            ))}
            </div>
        </section>

        {/* Projects / Capstone */}
        <section id={SectionId.PROJECTS} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
            <RevealOnScroll>
              <div className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Featured Work</h2>
                <h3 className="text-3xl font-bold text-white">Selected Projects</h3>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-6">
                {PROJECTS.map((project, idx) => (
                    <RevealOnScroll key={idx} delay={idx * 100}>
                      <div className="glass-panel p-8 rounded-xl hover:border-accent/20 transition-all duration-300 group hover:-translate-y-1">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                              <div>
                                  <h3 className="text-2xl font-bold text-white mb-1">
                                    {project.link ? (
                                      <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                                      >
                                        {project.title}
                                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors" />
                                      </a>
                                    ) : (
                                      <span className="flex items-center gap-2">
                                        {project.title}
                                      </span>
                                    )}
                                  </h3>
                                  <p className="text-accent text-sm font-medium">{project.role}</p>
                              </div>
                              <span className="text-xs font-mono text-text-secondary bg-white/5 px-3 py-1 rounded border border-white/5 whitespace-nowrap">
                                  {project.period}
                              </span>
                          </div>
                          
                          <div className="grid md:grid-cols-3 gap-8">
                              <div className="md:col-span-2 space-y-3 text-text-secondary text-sm leading-relaxed">
                                  {project.description.map((desc, dIdx) => (
                                      <p key={dIdx}>{desc}</p>
                                  ))}
                              </div>
                              
                              <div className="md:col-span-1">
                                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                                  <div className="flex flex-wrap gap-2">
                                      {project.tech.map((t, i) => (
                                          <span key={i} className="px-2.5 py-1 text-xs text-text-secondary bg-white/5 border border-white/5 rounded-md hover:text-white transition-colors cursor-default">
                                              {t}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    </div>
  );
};

export default Experience;