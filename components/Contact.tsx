import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';
import { Mail, Github, Linkedin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="border-t border-white/5 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-text-secondary mb-12 max-w-xl mx-auto text-lg">
            I am currently working full-time as a Lead Software Engineer at Havenz Tech. While I am not actively seeking new opportunities, I am always happy to connect with others in the industry. Feel free to reach out if you'd like to chat about technology or just say hi.
          </p>

          <div className="flex justify-center gap-6 mb-16">
              <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-all hover:scale-105"
              >
              <Mail className="w-5 h-5" />
              Say Hello
              </a>
              <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded font-semibold hover:bg-white/10 transition-all hover:scale-105"
              >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              </a>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
              <div className="mb-4 md:mb-0">
                  <span className="font-bold text-white">Connor Davison</span> © {new Date().getFullYear()}
              </div>
              
              <div className="flex gap-6">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">Email</a>
              </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Contact;