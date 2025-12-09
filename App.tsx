import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/MatrixBackground'; // Imported as Background from the existing file we modified
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import FloatingParticles from './components/FloatingParticles';

const App: React.FC = () => {
  return (
    <div className="bg-bg-dark min-h-screen text-text-primary font-sans selection:bg-accent selection:text-white">
      <Background />
      <FloatingParticles />
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