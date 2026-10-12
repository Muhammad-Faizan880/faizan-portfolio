import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Move3d,
  Code2
} from 'lucide-react';
import faizanCutoutImg from '../assets/faizan_cutout.png';
import faizanImg from '../assets/faizan.png';
import { IsometricCubeCanvas } from './IsometricCubeCanvas';
import { AnimatedCounter } from './MotionHelper';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePixels, setMousePixels] = useState<{ x: number; y: number }>({ x: -1, y: -1 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [rotationDegrees, setRotationDegrees] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Normalized motion values (-1 to 1)
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  // Smooth springs for fluid inertia
  const springConfig = { damping: 20, stiffness: 130, mass: 0.7 };
  const smoothX = useSpring(normX, springConfig);
  const smoothY = useSpring(normY, springConfig);

  // 3D rotations & parallax translations
  const rotateY = useTransform(smoothX, [-1, 1], [-26, 26]);
  const rotateX = useTransform(smoothY, [-1, 1], [20, -20]);
  const translateX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const translateY = useTransform(smoothY, [-1, 1], [-14, 14]);

  // Live telemetry degrees
  useEffect(() => {
    const unsubX = rotateX.on('change', (latestX) => {
      setRotationDegrees((prev) => ({ ...prev, x: Math.round(latestX * 10) / 10 }));
    });
    const unsubY = rotateY.on('change', (latestY) => {
      setRotationDegrees((prev) => ({ ...prev, y: Math.round(latestY * 10) / 10 }));
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [rotateX, rotateY]);

  // Mouse move on hero
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const pixelX = e.clientX - rect.left;
    const pixelY = e.clientY - rect.top;

    setMousePixels({ x: pixelX, y: pixelY });
    setIsHovered(true);

    const normalizedX = ((pixelX / rect.width) - 0.5) * 2;
    const normalizedY = ((pixelY / rect.height) - 0.5) * 2;

    normX.set(normalizedX);
    normY.set(normalizedY);
  }, [normX, normY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    normX.set(0);
    normY.set(0);
    setMousePixels({ x: -1, y: -1 });
  }, [normX, normY]);

  // Idle floating sway when mouse is not moving
  useEffect(() => {
    if (isHovered) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.035;
      const swayX = Math.sin(angle) * 0.35;
      const swayY = Math.cos(angle * 0.8) * 0.25;
      normX.set(swayX);
      normY.set(swayY);
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered, normX, normY]);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] pt-32 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-[#090B07] border-b border-[#222B18] text-[#F8F8F4]"
    >
      {/* 3D Isometric Cube Grid Canvas with Mouse Spotlight */}
      <IsometricCubeCanvas mousePos={mousePixels} />

      {/* Ambient Radial Spotlight Halo */}
      <div className="absolute inset-0 pointer-events-none select-none z-1">
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#687548]/25 via-[#364223]/15 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#1E2614] via-transparent to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Creative Editorial Typography matching Reference */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Brand Wordmark: withfaizan_._ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <div className="inline-flex items-center">
                <span className="font-mono text-3xl sm:text-5xl lg:text-[56px] font-extralight tracking-tight text-[#F8F8F4] select-none">
                  withfaizan
                </span>
                <span className="font-mono text-3xl sm:text-5xl lg:text-[56px] font-light text-[#A3C663] animate-pulse">
                  _._
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-[#A7B496] max-w-xl leading-relaxed">
                Frontend Developer &amp; UI Specialist who brings ideas to life using design and code.
              </p>
            </motion.div>

            {/* Large Bold Uppercase Headline */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-[#FFFFFF] leading-[1.04] uppercase font-sans">
                FRONTEND DEVELOPER
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#D2E6A8] to-[#8FA858]">
                  &amp; UI SPECIALIST
                </span>
              </h1>

              {/* Bio Paragraph */}
              <p className="text-sm sm:text-base text-[#95A586] max-w-xl leading-relaxed">
                I design user-friendly, visually appealing, and functional websites and applications. From wireframes to responsive code and fluid micro-interactions, I bring digital ideas to life.
              </p>
            </motion.div>

            {/* Core Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="text-xs font-mono font-bold text-[#A3C663] mr-1 uppercase">
                Core Stack:
              </span>
              {[
                'React.js',
                'Next.js 15',
                'TypeScript',
                'Tailwind CSS v4',
                'Component Systems',
                'REST APIs',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#141A0E]/80 border border-[#313E1F] text-[#D8E6C4] hover:border-[#8FA858] hover:text-[#FFFFFF] transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons matching Reference Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {/* Primary Glowing Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-[#687548] text-[#F8F8F4] hover:bg-[#7D8F54] transition-all duration-300 shadow-[0_0_25px_rgba(142,168,88,0.45)] hover:shadow-[0_0_35px_rgba(163,198,99,0.7)] hover:-translate-y-0.5 border border-[#8FA858]/80 cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>

              {/* Secondary Clean Link */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm text-[#F8F8F4] hover:text-[#C5D998] transition-colors cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8FA858]" />
              </a>
            </motion.div>

            {/* Stats Metrics Counter Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-[#222B18] grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div>
                <p className="text-3xl font-extrabold text-[#FFFFFF] font-mono tracking-tight">
                  <AnimatedCounter value={3} suffix="+" />
                </p>
                <p className="text-xs text-[#8E9B7E] font-semibold mt-0.5">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#A3C663] font-mono tracking-tight">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-xs text-[#8E9B7E] font-semibold mt-0.5">Production Works</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#FFFFFF] font-mono tracking-tight">
                  <AnimatedCounter value={99} suffix="/100" />
                </p>
                <p className="text-xs text-[#8E9B7E] font-semibold mt-0.5">Lighthouse Score</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#A3C663] font-mono tracking-tight">
                  &lt; 0.8s
                </p>
                <p className="text-xs text-[#8E9B7E] font-semibold mt-0.5">Sub-Second LCP</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Mouse Rotating Portrait Entity */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[540px] sm:h-[620px] flex items-center justify-center perspective-[1200px]">
              
              {/* Soft Ambient Radial Halo behind the cutout */}
              <div className="absolute inset-0 m-auto w-[340px] h-[460px] rounded-full bg-gradient-to-tr from-[#687548]/35 via-[#A3C663]/20 to-transparent blur-3xl pointer-events-none" />

              {/* The Rotating Portrait Entity (Directly Driven by Mouse Movement) */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  x: translateX,
                  y: translateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative flex items-center justify-center select-none"
              >
                {/* Floating Available Status Pill (Z-depth 65px) */}
                <div
                  style={{ transform: 'translateZ(65px)' }}
                  className="absolute -top-3 -left-4 sm:-left-8 z-20 px-3.5 py-1.5 rounded-full bg-[#141A0E]/90 backdrop-blur-md border border-[#415228] text-xs font-mono font-bold text-[#E2EDCE] flex items-center gap-2 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-[#8FA858] animate-ping" />
                  <span>Available for Projects</span>
                </div>

                {/* Floating Tech Chip (Z-depth 75px) */}
                <div
                  style={{ transform: 'translateZ(75px)' }}
                  className="absolute top-14 -right-4 sm:-right-8 z-20 px-3.5 py-1.5 rounded-xl bg-[#141A0E]/90 backdrop-blur-md border border-[#415228] text-xs font-mono font-semibold text-[#D0E0B8] flex items-center gap-2 shadow-lg"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#8FA858]" />
                  <span>React &amp; Next.js 15</span>
                </div>

                {/* Real Portrait Cutout of Muhammad Faizan */}
                <div className="relative group">
                  <img
                    src={faizanCutoutImg || faizanImg}
                    alt="Muhammad Faizan - Frontend Developer"
                    className="w-auto max-h-[460px] sm:max-h-[520px] md:max-h-[560px] max-w-[300px] sm:max-w-[360px] md:max-w-[400px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter contrast-[1.06] brightness-[1.02] pointer-events-none select-none transition-transform duration-300"
                    style={{ transform: 'translateZ(25px)' }}
                  />

                  {/* Elegant bottom gradient fade seamlessly blending into dark background */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090B07] via-[#090B07]/70 to-transparent pointer-events-none" />
                </div>

                {/* Floating Credentials Pill (Z-depth 60px) */}
                <div
                  style={{ transform: 'translateZ(60px)' }}
                  className="absolute bottom-8 -right-2 sm:right-2 z-20 px-4 py-2 rounded-2xl bg-[#141A0E]/90 backdrop-blur-md border border-[#415228] text-xs font-medium text-[#F8F8F4] shadow-lg flex items-center gap-2"
                >
                  <span className="font-mono font-bold text-[#8FA858]">3 YOE</span>
                  <span className="text-[#364223]">|</span>
                  <span className="text-[#A7B496] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8FA858]" />
                    Lahore, PK • Remote
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Interactive Mouse Telemetry HUD */}
            <div className="mt-3 text-center flex items-center justify-center gap-2 text-xs font-mono text-[#7D8F66]">
              <Move3d className="w-3.5 h-3.5 text-[#8FA858] animate-spin" style={{ animationDuration: '6s' }} />
              <span>
                3D MOUSE ROTATION: Y: {rotationDegrees.y > 0 ? `+${rotationDegrees.y}` : rotationDegrees.y}° | X: {rotationDegrees.x > 0 ? `+${rotationDegrees.x}` : rotationDegrees.x}°
              </span>
              <span className="text-[#364223]">•</span>
              <span className="text-[#A3C663] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA858] animate-ping" />
                Mouse Tracking Active
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Down Guide */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-2">
          <a
            href="#tech-marquee"
            className="group flex flex-col items-center gap-2 text-[#7D8F66] hover:text-[#FFFFFF] transition-colors"
            aria-label="Scroll to tech stack marquee"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
              Explore Tech Stack
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-[#313E1F] group-hover:border-[#8FA858] p-1 flex justify-center transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 rounded-full bg-[#8FA858]"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
