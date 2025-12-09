import React, { useEffect, useState } from 'react';
import Fireworks from './Fireworks';

const Wizard: React.FC = () => {
  const [position, setPosition] = useState(-150);

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        const screenWidth = window.innerWidth;
        if (prev > screenWidth + 150) {
          return -150;
        }
        return prev + 1.8;
      });
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Fireworks wizardX={position} />

      <div
        className="absolute bottom-4 z-50 pointer-events-none"
        style={{ left: position }}
      >
        <svg width="120" height="160" viewBox="-15 -15 120 160" className="wizard-body">
          <defs>
            <linearGradient id="robeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="50%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>

            <radialGradient id="orbGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="30%" stopColor="#4ade80" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#22c55e" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.4" />
            </radialGradient>

            <radialGradient id="faceGradient" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#fce7d6" />
              <stop offset="70%" stopColor="#fcd9b8" />
              <stop offset="100%" stopColor="#f5c89b" />
            </radialGradient>

            <linearGradient id="beardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>

            <linearGradient id="staffGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a0522d" />
              <stop offset="50%" stopColor="#8b4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>

            <filter id="shadowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodOpacity="0.3"/>
            </filter>

            <filter id="orbGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="45" cy="125" rx="25" ry="5" fill="rgba(0,0,0,0.2)" className="ground-shadow"/>

          <g className="back-arm">
            <path d="M55,68 Q65,80 60,92" stroke="#0d0d0d" strokeWidth="6" strokeLinecap="round" fill="none"/>
            <circle cx="60" cy="92" r="4" fill="url(#faceGradient)"/>
          </g>

          <g className="staff-group">
            <line x1="68" y1="38" x2="72" y2="118" stroke="url(#staffGradient)" strokeWidth="5" strokeLinecap="round"/>
            <ellipse cx="69" cy="75" rx="3.5" ry="2" fill="#654321"/>
            <ellipse cx="69" cy="79" rx="3.5" ry="2" fill="#8b4513"/>
            <ellipse cx="69" cy="83" rx="3.5" ry="2" fill="#654321"/>
            <path d="M63,42 Q68,38 73,42" stroke="#8b4513" strokeWidth="2" fill="none"/>

            <g filter="url(#orbGlow)">
              <circle cx="68" cy="34" r="10" fill="url(#orbGradient)" className="orb">
                <animate attributeName="r" values="10;11;10" dur="2s" repeatCount="indefinite"/>
              </circle>
              <ellipse cx="65" cy="31" rx="3" ry="4" fill="rgba(255,255,255,0.6)"/>
            </g>

            <g className="particles">
              <circle cx="68" cy="28" r="2" fill="#ffffff">
                <animate attributeName="cy" values="28;12;-5" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="cx" values="68;65;62" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="72" cy="30" r="1.5" fill="#4ade80">
                <animate attributeName="cy" values="30;15;0" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" begin="0.3s"/>
              </circle>
              <circle cx="65" cy="32" r="1" fill="#86efac">
                <animate attributeName="cy" values="32;18;5" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
                <animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
            </g>
          </g>

          <g filter="url(#shadowFilter)">
            <path d="M28,68 L24,112 L45,118 L66,112 L62,68 Q45,73 28,68" fill="url(#robeGradient)" stroke="#333333" strokeWidth="1" className="robe"/>
            <path d="M32,72 Q34,90 32,105" stroke="#000000" strokeWidth="0.8" opacity="0.5" fill="none"/>
            <path d="M38,74 Q40,92 38,108" stroke="#000000" strokeWidth="0.6" opacity="0.3" fill="none"/>
            <path d="M52,74 Q50,92 52,108" stroke="#222222" strokeWidth="0.6" opacity="0.25" fill="none"/>
            <path d="M58,72 Q56,90 58,105" stroke="#222222" strokeWidth="0.8" opacity="0.4" fill="none"/>
            <path d="M28,68 Q45,72 62,68" stroke="#22c55e" strokeWidth="2" fill="none"/>
            <path d="M45,73 L45,112" stroke="#333333" strokeWidth="1"/>
            <circle cx="45" cy="80" r="2.5" fill="#22c55e"/>
            <circle cx="45" cy="90" r="2.5" fill="#22c55e"/>
            <circle cx="45" cy="100" r="2.5" fill="#22c55e"/>
          </g>

          <g className="front-arm">
            <path d="M35,68 Q25,78 30,88" stroke="#0d0d0d" strokeWidth="6" strokeLinecap="round" fill="none"/>
            <circle cx="30" cy="88" r="4" fill="url(#faceGradient)"/>
          </g>

          <rect x="41" y="58" width="8" height="12" fill="url(#faceGradient)" rx="2"/>
          <circle cx="45" cy="52" r="14" fill="url(#faceGradient)"/>
          <ellipse cx="31" cy="52" rx="2.5" ry="4" fill="#f5c89b"/>
          <ellipse cx="59" cy="52" rx="2.5" ry="4" fill="#f5c89b"/>
          <path d="M37,46 Q40,44 43,46" stroke="#7c6f64" strokeWidth="1.5" fill="none"/>
          <path d="M47,46 Q50,44 53,46" stroke="#7c6f64" strokeWidth="1.5" fill="none"/>
          <ellipse cx="40" cy="50" rx="3" ry="3.5" fill="#1e293b"/>
          <ellipse cx="50" cy="50" rx="3" ry="3.5" fill="#1e293b"/>
          <circle cx="41" cy="49" r="1.2" fill="#ffffff"/>
          <circle cx="51" cy="49" r="1.2" fill="#ffffff"/>
          <ellipse cx="45" cy="55" rx="2" ry="2.5" fill="#f0c9a0"/>
          <path d="M41,58 Q45,60 49,58" stroke="#8b7355" strokeWidth="1" fill="none"/>

          <g className="beard">
            <path d="M31,55 Q33,80 45,88 Q57,80 59,55" fill="url(#beardGradient)"/>
            <path d="M36,60 Q38,72 42,80" stroke="#b4b8bb" strokeWidth="0.5" opacity="0.5" fill="none"/>
            <path d="M45,62 L45,85" stroke="#b4b8bb" strokeWidth="0.5" opacity="0.4" fill="none"/>
            <path d="M54,60 Q52,72 48,80" stroke="#b4b8bb" strokeWidth="0.5" opacity="0.5" fill="none"/>
            <path d="M38,56 Q42,58 45,56 Q48,58 52,56" fill="#d1d5db"/>
          </g>

          <g className="hat">
            <ellipse cx="45" cy="40" rx="20" ry="6" fill="url(#hatGradient)" stroke="#333333" strokeWidth="1"/>
            <polygon points="45,2 62,40 28,40" fill="url(#hatGradient)" stroke="#333333" strokeWidth="1"/>
            <path d="M30,38 Q45,42 60,38" stroke="#22c55e" strokeWidth="3" fill="none"/>
            <polygon points="45,12 47,18 53,18 48,22 50,28 45,24 40,28 42,22 37,18 43,18" fill="#22c55e"/>
            <circle cx="45" cy="4" r="3" fill="#0a0a0a" stroke="#333333" strokeWidth="0.5"/>
          </g>

          <ellipse cx="36" cy="122" rx="10" ry="5" fill="#0a0a0a" className="left-foot"/>
          <ellipse cx="54" cy="122" rx="10" ry="5" fill="#0a0a0a" className="right-foot"/>
        </svg>
      </div>

      <style>{`
        .wizard-body {
          animation: wizardBob 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes wizardBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(2px) rotate(-0.5deg); }
          50% { transform: translateY(-3px) rotate(0deg); }
          75% { transform: translateY(2px) rotate(0.5deg); }
        }

        .left-foot {
          animation: stepLeft 0.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .right-foot {
          animation: stepRight 0.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        @keyframes stepLeft {
          0%, 100% { transform: translateX(4px); }
          50% { transform: translateX(-5px); }
        }

        @keyframes stepRight {
          0%, 100% { transform: translateX(-4px); }
          50% { transform: translateX(5px); }
        }

        .front-arm {
          animation: armSwingFront 0.5s ease-in-out infinite;
          transform-origin: 35px 68px;
        }

        .back-arm {
          animation: armSwingBack 0.5s ease-in-out infinite;
          transform-origin: 55px 68px;
        }

        @keyframes armSwingFront {
          0%, 100% { transform: rotate(8deg); }
          50% { transform: rotate(-8deg); }
        }

        @keyframes armSwingBack {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }

        .staff-group {
          animation: staffSway 0.5s ease-in-out infinite;
          transform-origin: 72px 118px;
        }

        @keyframes staffSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        .hat {
          animation: hatWobble 0.5s ease-in-out infinite;
          transform-origin: 45px 40px;
        }

        @keyframes hatWobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }

        .beard {
          animation: beardSway 0.6s ease-in-out infinite;
          transform-origin: 45px 55px;
        }

        @keyframes beardSway {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(2deg); }
        }
      `}</style>
    </>
  );
};

export default Wizard;
