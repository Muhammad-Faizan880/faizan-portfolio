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
import { AnimatedCounter } from "./MotionHelper";
import { TechMarquee } from "./TechMarquee";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // Spotlight ref for zero-rerender GPU-friendly cursor glow
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Normalized motion values (-1 to 1) for 3D tilt
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(normX, springConfig);
  const smoothY = useSpring(normY, springConfig);

  // 3D rotations for the video mockup card
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);

  // Handle Mouse movement with zero React re-renders for buttery 60fps performance
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const pixelX = e.clientX - rect.left;
    const pixelY = e.clientY - rect.top;

    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${pixelX}px ${pixelY}px, rgba(175, 219, 98, 0.22), rgba(142, 168, 88, 0.08) 45%, transparent 75%)`;
      spotlightRef.current.style.opacity = '1';
    }

    const normalizedX = ((pixelX / rect.width) - 0.5) * 2;
    const normalizedY = ((pixelY / rect.height) - 0.5) * 2;

    normX.set(normalizedX);
    normY.set(normalizedY);
  }, [normX, normY]);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '0.4';
    }
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
      className="relative min-h-screen lg:h-screen lg:max-h-[900px] pt-14 sm:pt-16 lg:pt-18 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f7faf3] via-[#ebf3df] to-[#dde8cd] text-olive-900 selection:bg-olive-600/20 selection:text-olive-900"
    >
      {/* 1. Base Subtle Ambient Radial Canvas Glow */}
   

<div
  className="pointer-events-none absolute inset-0 z-0 opacity-100"
  style={{
    background: `
      radial-gradient(
        ellipse 600px 550px at 8% 12%,
        rgba(145, 185, 75, 0.38) 0%,
        rgba(145, 185, 75, 0.16) 90%,
        transparent 72%
      ),
      radial-gradient(
        ellipse 350px 450px at 95% 18%,
        rgba(112, 148, 67, 0.34) 0%,
        rgba(112, 148, 67, 0.13) 52%,
        transparent 75%
      ),
      radial-gradient(
        ellipse 250px 500px at 48% 100%,
        rgba(132, 166, 68, 0.30) 0%,
        rgba(132, 166, 68, 0.12) 45%,
        transparent 78%
      ),
      radial-gradient(
        ellipse 420px 360px at 72% 58%,
        rgba(177, 207, 113, 0.18) 0%,
        transparent 72%
      ),
      linear-gradient(
        135deg,
        #f0f3e5 0%,
        #e8edd9 88%,
        #f2f4e9 100%
      )
    `,
  }}
/>


      {/* 2. Interactive Soft Cursor Spotlight Glow (DOM-driven, zero React re-renders) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-1 opacity-40"
      />

      {/* 3. Smooth Living Organic Aurora Mesh System (Zero Banding, No Dots) */}
      <div className="absolute inset-0 pointer-events-none select-none z-1 overflow-hidden">
        {/* Aurora Layer A: Left Floating Soft Aura */}
        <div
          className="absolute -top-[10%] -left-[5%] w-[600px] sm:w-[800px] lg:w-[950px] h-[600px] sm:h-[800px] lg:h-[950px] rounded-full [background:radial-gradient(circle,rgba(192,230,117,0.24)_0%,rgba(163,198,99,0.12)_45%,transparent_70%)] blur-2xl lg:blur-3xl"
        />

        {/* Aurora Layer B: Right Video Ambient Halo */}
        <div
          className="absolute top-[5%] -right-[8%] w-[650px] sm:w-[850px] lg:w-[1050px] h-[650px] sm:h-[850px] lg:h-[1050px] rounded-full [background:radial-gradient(circle,rgba(151,184,99,0.28)_0%,rgba(142,168,88,0.14)_45%,transparent_70%)] blur-2xl lg:blur-3xl"
        />

        {/* Aurora Layer C: Center Connecting Horizon Wave */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1300px] h-[340px] sm:h-[420px] rounded-[100%] [background:radial-gradient(ellipse,rgba(192,230,117,0.18)_0%,rgba(175,219,98,0.2)_40%,transparent_70%)] blur-xl lg:blur-2xl opacity-45"
        />

        {/* Aurora Layer D: Bottom Gradient Transition to Marquee */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-olive-200/40 via-olive-100/15 to-transparent" />
      </div>

      {/* Main Hero Content Area - Centered and Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center py-2 sm:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* LEFT COLUMN: Title, Description, Pills, CTAs, Metrics (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {/* Top Status & Role Pill */}
           

            {/* Bold Enhanced Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1.5 mt-9 sm:mt-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-olive-950 leading-[1.08] font-sans">
                FRONTEND ENGINEER
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
                <p className="text-xs text-olive-700 font-medium mt-1 leading-snug">
                  Years Exp
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-600 font-mono tracking-tight">
                  <AnimatedCounter value={10} suffix="+" />
                </p>
                <p className="text-xs text-olive-700 font-medium mt-1 leading-snug">
                  Shipped Works
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-950 font-mono tracking-tight">
                  <AnimatedCounter value={92} suffix="/100" />
                </p>
                <p className="text-xs text-olive-700 font-medium mt-1 leading-snug">
                  Lighthouse
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-olive-600 font-mono tracking-tight">
                  Fast
                </p>
                <p className="text-xs text-olive-700 font-medium mt-1 leading-snug">
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
              className="mb-7 sm:mb-2 relative w-full max-w-[700px] rounded-2xl sm:rounded-3xl backdrop-blur-md p-1.5 sm:p-2.5 shadow-2xl shadow-olive-600/20 transition-all duration-300 group"
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
