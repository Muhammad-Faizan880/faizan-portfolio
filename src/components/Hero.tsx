import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Repeat,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { AnimatedCounter } from "./MotionHelper";
import { TechMarquee } from "./TechMarquee";
import { LinkedinLogo } from "./TechLogos";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // Mouse spotlight coords
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 600, y: 300 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Normalized motion values (-1 to 1) for 3D tilt
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(normX, springConfig);
  const smoothY = useSpring(normY, springConfig);

  // 3D rotations for the video mockup card
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);

  // Handle Mouse movement for gradient glow and 3D card tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const pixelX = e.clientX - rect.left;
    const pixelY = e.clientY - rect.top;

    setMousePos({ x: pixelX, y: pixelY });
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
  }, [normX, normY]);

  // Video Play/Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Video Mute/Unmute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Ensure video autoplays in an infinite loop
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen lg:h-screen lg:max-h-[900px] pt-14 sm:pt-16 lg:pt-18 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-olive-50 via-olive-100 to-olive-200 text-olive-900 selection:bg-olive-600/20 selection:text-olive-900"
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-1"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(142, 168, 88, 0.22), transparent 60%)`,
          opacity: isHovered ? 1 : 0.6,
        }}
      />

      {/* Enhanced Radiant Olive Green Center Surf Glow & Living Wave Aurora */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-1 flex items-center justify-center">
        {/* 1. Slowly Rotating Liquid Olive Aurora Beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="w-[750px] sm:w-[980px] lg:w-[1200px] h-[750px] sm:h-[980px] lg:h-[1200px] rounded-full opacity-60 blur-[110px]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, rgba(104,117,72,0.08) 0deg, rgba(142,168,88,0.45) 75deg, rgba(82,94,55,0.12) 150deg, rgba(163,198,99,0.5) 230deg, rgba(104,117,72,0.12) 310deg, rgba(104,117,72,0.08) 360deg)`,
          }}
        />

        {/* 2. Pulsing Luminous Wave Surge Core */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute w-[620px] sm:w-[840px] lg:w-[1020px] h-[270px] sm:h-[360px] lg:h-[420px] rounded-[100%] bg-gradient-to-r from-olive-600/45 via-olive-glow/65 to-olive-600/45 blur-[80px]"
        />

        {/* 3. Intense Luminous Surf Crest Center Highlight */}
        <div className="absolute w-[360px] sm:w-[520px] lg:w-[680px] h-[130px] sm:h-[180px] lg:h-[220px] rounded-full bg-gradient-to-r from-olive-500/40 via-olive-500 to-olive-500/40 blur-[45px]" />

        {/* 4. Subtle Floating Ambient Light Embers in Olive Palette */}
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -top-16 left-1/4 w-2 h-2 rounded-full bg-olive-900 blur-[1px] shadow-[0_0_12px_var(--color-olive-400)]"
        />
        <motion.div
          animate={{ y: [8, -8, 8], opacity: [0.35, 0.85, 0.35] }}
          transition={{ repeat: Infinity, duration: 5.5, delay: 1, ease: "easeInOut" }}
          className="absolute top-16 right-1/4 w-2.5 h-2.5 rounded-full bg-olive-900 blur-[1px] shadow-[0_0_14px_var(--color-olive-500)]"
        />
        <motion.div
          animate={{ y: [-6, 6, -6], opacity: [0.3, 0.75, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, delay: 2, ease: "easeInOut" }}
          className="absolute -bottom-12 left-1/3 w-2 h-2 rounded-full bg-olive-900 blur-[1px] shadow-[0_0_10px_var(--color-olive-400)]"
        />
      </div>

      {/* Main Hero Content Area - Centered and Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center py-2 sm:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* LEFT COLUMN: Title, Description, Pills, CTAs, Metrics (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {/* Top Status & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mt-2 sm:mt-0 bg-white/90 backdrop-blur-md border border-olive-300 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-600" />
              </span>
              <span className="text-[11px] font-mono font-bold text-olive-800 uppercase tracking-wider">
                {PERSONAL_INFO.name} • Available for Projects
              </span>
            </motion.div>

            {/* Bold Enhanced Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1.5"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight text-olive-950 leading-[1.08] font-sans">
                FRONTEND DEVELOPER
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-600 via-olive-700 to-olive-800">
                  &amp; UI SPECIALIST
                </span>
              </h1>

              {/* Engaging Description */}
              <p className="text-sm sm:text-base text-olive-900 max-w-xl leading-relaxed font-normal pt-0.5">
                Crafting responsive, high-performance web applications with
                obsessive attention to UI craft. Turning complex Figma designs
                into pixel-perfect, accessible code.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {/* Primary Glowing Button */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-olive-600 text-white hover:bg-olive-700 transition-all duration-300 shadow-md shadow-olive-600/30 hover:shadow-lg hover:shadow-olive-600/40 hover:-translate-y-0.5 active:translate-y-0 border border-olive-500/40 cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Clean Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-white/90 text-olive-900 hover:text-olive-950 hover:bg-white hover:border-olive-600 border border-olive-200 transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-olive-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/85 border border-olive-300 text-olive-700 hover:text-olive-950 hover:border-olive-600 hover:bg-white transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Stats Metrics Counter Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 border-t border-olive-300 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-lg"
            >
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-950 font-mono tracking-tight">
                  <AnimatedCounter value={3} suffix="+" />
                </p>
                <p className="text-[10.5px] text-olive-700 font-medium mt-0.5 leading-tight">
                  Years Exp
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-600 font-mono tracking-tight">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-[10.5px] text-olive-700 font-medium mt-0.5 leading-tight">
                  Shipped Works
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-950 font-mono tracking-tight">
                  <AnimatedCounter value={92} suffix="/100" />
                </p>
                <p className="text-[10.5px] text-olive-700 font-medium mt-0.5 leading-tight">
                  Lighthouse
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-600 font-mono tracking-tight">
                  Fast
                </p>
                <p className="text-[10.5px] text-olive-700 font-medium mt-0.5 leading-tight">
                  Optimized Performance
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 700px x 500px Responsive Video Player (lg:col-span-7) */}
          <div className="lg:col-span-7 relative w-full flex justify-center lg:justify-end items-center">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[700px] rounded-2xl sm:rounded-3xl backdrop-blur-md p-1.5 sm:p-2.5 shadow-2xl shadow-olive-600/20 transition-all duration-300 group"
            >
              {/* The Video Container - 700px x 500px Responsive (aspect-[7/5]) */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-olive-950 aspect-[7/5] w-full max-w-[700px] max-h-[500px] flex items-center justify-center">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-olive-950 text-olive-500 z-10">
                    <Repeat className="w-16 h-16 animate-spin text-olive-500" />
                  </div>
                )}
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className={`w-full h-full object-cover select-none pointer-events-auto transition-opacity duration-700 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  <source src="/hero-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Subtle dark gradient overlay at base for controls visibility */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                {/* Quick Video Controls Bar */}
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 z-20">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3" />
                    ) : (
                      <Play className="w-3 h-3" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3 h-3" />
                    ) : (
                      <Volume2 className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM OF HERO SECTION: Infinite Marquee with Real-Time Stack Logos */}
      <div className="w-full relative z-10 mt-auto">
        <TechMarquee />
      </div>
    </section>
  );
};
