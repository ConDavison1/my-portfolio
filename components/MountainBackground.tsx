import React from 'react';

const MountainBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #1a1a2e 100%)',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div
        className="absolute"
        style={{
          width: 60,
          height: 60,
          right: '15%',
          top: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #f5f5f5 0%, #d4d4d4 50%, #a3a3a3 100%)',
          boxShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.1)',
        }}
      />

      {/* Mountain silhouette image */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: '45%',
          backgroundImage: 'url(/mountains.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Ground */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: '5%',
          background: '#0a0a0a',
        }}
      />

      {/* Subtle mist/fog at the base */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: '20%',
          background: 'linear-gradient(to top, rgba(34,197,94,0.05) 0%, transparent 100%)',
        }}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default MountainBackground;
