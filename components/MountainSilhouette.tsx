import React, { useMemo } from 'react';
import { createNoise2D } from 'simplex-noise';

interface MountainLayerProps {
  color: string;
  yOffset: number;
  scale: number;
  seed: number;
  zIndex: number;
}

const MountainLayer: React.FC<MountainLayerProps> = ({ color, yOffset, scale, seed, zIndex }) => {
  const pathD = useMemo(() => {
    const noise2D = createNoise2D(() => seed);
    const points: string[] = [];
    const segments = 150;
    const width = 100; // percentage

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const noiseX = (i / segments) * 10;

      // Layer multiple noise frequencies for realistic mountains
      const n1 = noise2D(noiseX * 0.3, seed) * 1;
      const n2 = noise2D(noiseX * 0.6, seed + 1) * 0.5;
      const n3 = noise2D(noiseX * 1.2, seed + 2) * 0.25;
      const n4 = noise2D(noiseX * 2.5, seed + 3) * 0.1;

      const height = (n1 + n2 + n3 + n4) * scale + yOffset;

      if (i === 0) {
        points.push(`M ${x} ${50 - height}`);
      } else {
        points.push(`L ${x} ${50 - height}`);
      }
    }

    // Close the path at the bottom
    points.push(`L 100 100`);
    points.push(`L 0 100`);
    points.push(`Z`);

    return points.join(' ');
  }, [yOffset, scale, seed]);

  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      style={{ height: '70%', zIndex }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d={pathD} fill={color} />
    </svg>
  );
};

const MountainSilhouette: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #05050a 0%, #0a0a12 40%, #10101a 70%, #08080f 100%)',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Mountain layers - back to front */}
      <MountainLayer color="#0a0a0f" yOffset={25} scale={18} seed={0.1} zIndex={2} />
      <MountainLayer color="#0d0d14" yOffset={20} scale={14} seed={0.5} zIndex={3} />
      <MountainLayer color="#111119" yOffset={15} scale={10} seed={0.9} zIndex={4} />
      <MountainLayer color="#15151f" yOffset={10} scale={6} seed={1.3} zIndex={5} />

      {/* Foreground hills - gentle rolling terrain */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ height: '15%', zIndex: 6 }}
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
      >
        {/* Back hill layer */}
        <path
          d="M0,30 L0,22
             C20,20 35,18 50,20
             C70,22 85,16 110,18
             C135,20 155,14 175,17
             C190,19 200,16 200,18
             L200,30 Z"
          fill="#0c0c14"
        />
        {/* Front hill layer */}
        <path
          d="M0,30 L0,25
             C15,24 30,22 45,24
             C65,26 80,20 100,22
             C125,24 145,18 165,21
             C180,23 195,20 200,22
             L200,30 Z"
          fill="#08080f"
        />
      </svg>

      {/* Glowing mushrooms */}
      <div className="absolute bottom-0 w-full" style={{ height: '15%', zIndex: 8 }}>
        {[
          { left: '5%', size: 12, delay: 0 },
          { left: '8%', size: 8, delay: 0.5 },
          { left: '15%', size: 10, delay: 1.2 },
          { left: '22%', size: 6, delay: 0.3 },
          { left: '35%', size: 14, delay: 0.8 },
          { left: '38%', size: 8, delay: 1.5 },
          { left: '52%', size: 10, delay: 0.2 },
          { left: '65%', size: 12, delay: 1.0 },
          { left: '68%', size: 7, delay: 0.6 },
          { left: '78%', size: 9, delay: 1.3 },
          { left: '85%', size: 11, delay: 0.4 },
          { left: '92%', size: 8, delay: 0.9 },
        ].map((mushroom, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: mushroom.left,
              bottom: `${10 + Math.random() * 15}px`,
            }}
          >
            {/* Stem */}
            <div
              style={{
                width: mushroom.size * 0.3,
                height: mushroom.size * 0.8,
                background: '#1a2a1a',
                borderRadius: '2px',
                margin: '0 auto',
              }}
            />
            {/* Cap */}
            <div
              style={{
                width: mushroom.size,
                height: mushroom.size * 0.6,
                background: 'radial-gradient(ellipse at center top, #22c55e 0%, #15803d 60%, #0f5132 100%)',
                borderRadius: '50% 50% 40% 40%',
                marginTop: -mushroom.size * 0.2,
                boxShadow: `0 0 ${mushroom.size}px rgba(34,197,94,0.5), 0 0 ${mushroom.size * 2}px rgba(34,197,94,0.3)`,
                animation: `mushroomGlow 2s ease-in-out infinite`,
                animationDelay: `${mushroom.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0" style={{ zIndex: 9 }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + Math.random() * 4,
              height: 3 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              bottom: `${5 + Math.random() * 25}%`,
              background: `radial-gradient(circle, rgba(134,239,172,0.8) 0%, rgba(34,197,94,0.4) 50%, transparent 100%)`,
              animation: `floatParticle ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Magical runes on ground */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ height: '10%', zIndex: 7, opacity: 0.4 }}
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        {[10, 25, 45, 60, 80, 95].map((x, i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={7}
              r={1.5}
              fill="none"
              stroke="#22c55e"
              strokeWidth="0.15"
              style={{
                animation: `runeGlow 3s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
            <circle
              cx={x}
              cy={7}
              r={0.8}
              fill="none"
              stroke="#4ade80"
              strokeWidth="0.1"
            />
          </g>
        ))}
      </svg>

      {/* Subtle green glow at horizon */}
      <div
        className="absolute w-full"
        style={{
          bottom: '5%',
          height: '25%',
          background: 'radial-gradient(ellipse at center bottom, rgba(34,197,94,0.08) 0%, transparent 60%)',
          zIndex: 7,
        }}
      />

      {/* Ground mist */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: '15%',
          background: 'linear-gradient(to top, rgba(34,197,94,0.05) 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes mushroomGlow {
          0%, 100% {
            filter: brightness(1);
            box-shadow: 0 0 8px rgba(34,197,94,0.5), 0 0 16px rgba(34,197,94,0.3);
          }
          50% {
            filter: brightness(1.3);
            box-shadow: 0 0 15px rgba(34,197,94,0.8), 0 0 30px rgba(34,197,94,0.5);
          }
        }
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(5px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-35px) translateX(-3px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.7;
          }
        }
        @keyframes runeGlow {
          0%, 100% {
            opacity: 0.3;
            stroke-width: 0.15;
          }
          50% {
            opacity: 0.8;
            stroke-width: 0.25;
          }
        }
      `}</style>
    </div>
  );
};

export default MountainSilhouette;
