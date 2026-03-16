import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: boolean;
  scale?: boolean;
}

const RevealOnScroll: React.FC<Props> = ({
  children,
  delay = 0,
  className = "",
  direction = 'up',
  blur = true,
  scale = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    const translations: Record<string, string> = {
      up: 'translate3d(0, 40px, 0)',
      down: 'translate3d(0, -40px, 0)',
      left: 'translate3d(40px, 0, 0)',
      right: 'translate3d(-40px, 0, 0)',
    };
    const scaleVal = scale ? ' scale(0.95)' : ' scale(1)';
    return translations[direction] + scaleVal;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: blur ? (isVisible ? 'blur(0px)' : 'blur(8px)') : 'none',
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
