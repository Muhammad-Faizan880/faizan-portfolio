import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

/**
 * Animated Number Counter that increments smoothly when scrolled into view
 */
export const AnimatedCounter: React.FC<{ value: number; suffix?: string; prefix?: string; duration?: number }> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.8,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * (end - start) + start);
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(end);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

/**
 * TextCycler rotates smoothly between specialty strings with staggered character or word slides
 */
export const TextCycler: React.FC<{ phrases: string[]; interval?: number }> = ({
  phrases,
  interval = 3200,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <div className="inline-block relative overflow-hidden align-top min-w-[280px] sm:min-w-[420px] h-[1.3em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block font-extrabold text-[#687548] whitespace-nowrap"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

/**
 * 3D Interactive Tilt Card responding to cursor coordinates
 */
export const TiltContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}> = ({ children, className = '', maxTilt = 12 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 220, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltY = ((x - centerX) / centerX) * maxTilt;
    const tiltX = -((y - centerY) / centerY) * maxTilt;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`perspective-[1200px] transition-transform duration-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

