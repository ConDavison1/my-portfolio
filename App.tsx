import React from 'react';
import Navbar from './components/Navbar';
import GradientBackground from './components/GradientBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary font-sans selection:bg-accent/30 selection:text-white">
      <GradientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Terminal />
    </div>
  );
};

export default App;
