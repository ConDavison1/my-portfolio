import React from 'react';
import { EXPERIENCE, PROJECTS } from '../constants';
import { SectionId } from '../types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <div>
      {/* Work Experience */}
      <section id={SectionId.EXPERIENCE} className="py-16 md:py-28 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="section-divider mb-16 md:mb-28" />

        <RevealOnScroll>
          <div className="mb-16">
            <span className="text-sm font-medium text-accent tracking-wide uppercase">Career Path</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3">
              Professional Experience
            </h2>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-accent-secondary/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, idx) => (
              <RevealOnScroll key={idx} delay={idx * 120}>
                <div className="relative pl-0 md:pl-14 group">
                  {/* Timeline dot - desktop only */}
                  <div className="absolute left-0 md:left-1 top-1.5 hidden md:block">
                    <div className={`w-[18px] h-[18px] rounded-full border-2 border-accent bg-bg-primary ${idx === 0 ? 'timeline-dot' : ''}`}>
                      <div className="absolute inset-1 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass-card card-shine rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                          {job.title}
                        </h3>
                        <p className="text-text-secondary font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-text-muted font-medium whitespace-nowrap">
                          {job.period}
                        </span>
                        <span className="text-text-muted/50 hidden md:inline">|</span>
                        <span className="text-text-muted/80 whitespace-nowrap hidden md:inline">{job.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {job.details.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium text-accent/80 bg-accent/[0.06] px-3 py-1 rounded-full border border-accent/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id={SectionId.PROJECTS} className="py-16 md:py-28 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="section-divider mb-16 md:mb-28" />

        <RevealOnScroll>
          <div className="mb-14">
            <span className="text-sm font-medium text-accent tracking-wide uppercase">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3">
              Selected Projects
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <RevealOnScroll key={idx} delay={idx * 120} scale>
              <div className="glass-card card-shine rounded-2xl p-8 h-full group relative">
                {/* Decorative gradient corner */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none rounded-tr-2xl"
                  style={{ background: 'radial-gradient(circle at top right, #818cf8, transparent 70%)' }}
                />

                {project.video && (
                  <div className="mb-5 rounded-xl overflow-hidden border border-white/[0.06]">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    />
                  </div>
                )}

                {project.image && !project.video && (
                  <div className="mb-5 rounded-xl overflow-hidden border border-white/[0.06]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-accent font-medium">{project.role}</p>
                  </div>
                  <span className="text-xs text-text-muted whitespace-nowrap mt-1">
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2 mt-5 mb-6">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx} className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="skill-badge px-3 py-1 text-xs font-medium text-text-secondary bg-white/[0.04] rounded-lg border border-white/[0.06] cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent font-medium mt-6 hover:gap-2.5 transition-all duration-300"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
