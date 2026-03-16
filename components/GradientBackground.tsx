import React from 'react';

const GradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }} />

      {/* Primary orb - indigo */}
      <div
        className="absolute -top-[150px] -left-[100px] w-[400px] h-[400px] md:-top-[300px] md:-left-[200px] md:w-[800px] md:h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
          animation: 'float-slow 20s ease-in-out infinite',
        }}
      />

      {/* Secondary orb - violet */}
      <div
        className="absolute top-[40%] -right-[150px] w-[350px] h-[350px] md:-right-[300px] md:w-[700px] md:h-[700px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
          animation: 'float-slow-reverse 25s ease-in-out infinite',
        }}
      />

      {/* Tertiary orb - cyan */}
      <div
        className="absolute -bottom-[100px] left-[20%] w-[300px] h-[300px] md:-bottom-[200px] md:left-[30%] md:w-[600px] md:h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
          animation: 'float-slow 30s ease-in-out infinite',
        }}
      />

      {/* Subtle grid - hidden on mobile for perf */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block" style={{
        backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />
    </div>
  );
};

export default GradientBackground;
