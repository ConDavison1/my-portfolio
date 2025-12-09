import React, { useEffect, useState, useRef } from 'react';

interface Rocket {
  id: number;
  baseX: number;
  x: number;
  y: number;
  targetY: number;
  color: string;
  swirl: number;
  time: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  size: number;
}

interface FireworksProps {
  wizardX: number;
}

const colors = ['#22c55e', '#4ade80', '#86efac', '#16a34a', '#15803d', '#bbf7d0'];

const Fireworks: React.FC<FireworksProps> = ({ wizardX }) => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);
  const wizardXRef = useRef(wizardX);
  const lastLaunchRef = useRef(Date.now());
  const lastFrameRef = useRef(Date.now());

  useEffect(() => {
    wizardXRef.current = wizardX;
  }, [wizardX]);

  // Single animation loop using requestAnimationFrame
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const now = Date.now();
      const delta = now - lastFrameRef.current;
      lastFrameRef.current = now;

      // If we were away for more than 100ms, skip the launch check this frame
      // This prevents stacking when tabbing back
      if (delta > 100) {
        lastLaunchRef.current = now;
        animationId = requestAnimationFrame(animate);
        return;
      }

      // Check if we should launch a new rocket (every 2 seconds)
      if (now - lastLaunchRef.current >= 2000) {
        lastLaunchRef.current = now;

        const currentX = wizardXRef.current;
        if (currentX >= 0 && currentX <= window.innerWidth) {
          idRef.current++;
          const startX = currentX + 75;
          const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
          const startY = heroHeight - 145;
          const targetY = 100 + Math.random() * 200;

          setRockets(r => [...r, {
            id: idRef.current,
            baseX: startX,
            x: startX,
            y: startY,
            targetY,
            color: colors[Math.floor(Math.random() * colors.length)],
            swirl: (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 4),
            time: 0,
          }]);
        }
      }

      // Update rockets
      setRockets(prev => {
        const remaining: Rocket[] = [];
        const newParticles: Particle[] = [];

        prev.forEach(rocket => {
          const newTime = rocket.time + 1;
          const swirlOffset = Math.sin(newTime * 0.08) * 15 * (rocket.swirl > 0 ? 1 : -1);
          const newX = rocket.baseX + swirlOffset;
          const newY = rocket.y - 5;

          if (newY <= rocket.targetY) {
            // EXPLODE!
            for (let i = 0; i < 25; i++) {
              const angle = (Math.PI * 2 * i) / 25 + Math.random() * 0.3;
              const speed = 2 + Math.random() * 4;
              idRef.current++;
              newParticles.push({
                id: idRef.current,
                x: newX,
                y: newY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 50 + Math.random() * 30,
                size: 10 + Math.random() * 15,
              });
            }
          } else {
            remaining.push({
              ...rocket,
              x: newX,
              y: newY,
              baseX: rocket.baseX,
              time: newTime
            });
          }
        });

        if (newParticles.length > 0) {
          setParticles(p => [...p, ...newParticles]);
        }

        return remaining;
      });

      // Update particles
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy + 0.15,
            vx: p.vx * 0.97,
            vy: p.vy * 0.97,
            life: p.life - 1,
            size: p.size * 0.98,
          }))
          .filter(p => p.life > 0)
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 40, overflow: 'hidden' }}>
      {rockets.map(r => (
        <div
          key={r.id}
          style={{
            position: 'absolute',
            left: r.x - 8,
            top: r.y - 8,
            width: 16,
            height: 20,
            background: 'radial-gradient(ellipse at center bottom, #bbf7d0 0%, #4ade80 40%, #22c55e 70%, transparent 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: '0 0 20px #4ade80, 0 0 40px #22c55e, 0 8px 30px #16a34a',
          }}
        />
      ))}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size * 1.5,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            background: `radial-gradient(ellipse at center bottom, #bbf7d0 0%, ${p.color} 50%, transparent 100%)`,
            opacity: p.life / 80,
            boxShadow: `0 0 ${p.size}px ${p.color}, 0 0 ${p.size * 2}px ${p.color}`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
