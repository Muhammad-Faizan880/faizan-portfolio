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
import { GithubLogo, LinkedinLogo } from "./TechLogos";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // Mouse spotlight coords
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 600,
    y: 300,
  });
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
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const pixelX = e.clientX - rect.left;
      const pixelY = e.clientY - rect.top;

      setMousePos({ x: pixelX, y: pixelY });
      setIsHovered(true);

      const normalizedX = (pixelX / rect.width - 0.5) * 2;
      const normalizedY = (pixelY / rect.height - 0.5) * 2;

      normX.set(normalizedX);
      normY.set(normalizedY);
    },
    [normX, normY],
  );

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
      className="relative min-h-screen lg:h-screen lg:max-h-[900px] pt-14 sm:pt-16 lg:pt-18 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#F5F8F0] via-[#EBF2E2] to-[#DFE9D3] text-[#222A16] selection:bg-[#687548]/20 selection:text-[#222A16]"
    >
      {/* Dynamic Cursor Spotlight Glow (Smooth, no wall grid) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-1"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(138, 168, 88, 0.22), transparent 60%)`,
          opacity: isHovered ? 1 : 0.6,
        }}
      />

      {/* Atmospheric Ambient Light Olive Gradient Spheres */}
      <div className="absolute -top-10 -left-10 w-[550px] h-[550px] bg-gradient-to-br from-[#A5C869]/25 via-[#82A24F]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-[#687548]/30 via-[#97B863]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-[500px] h-[350px] bg-gradient-to-t from-[#B0CD88]/25 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Main Hero Content Area - Centered and Compact */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center py-2 sm:py-3 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* LEFT COLUMN: Title, Description, Pills, CTAs, Metrics (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {/* Top Status & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#CAD6BA] shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#687548] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#687548]" />
              </span>
              <span className="text-[11px] font-mono font-bold text-[#455230] uppercase tracking-wider">
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
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight text-[#182011] leading-[1.08] font-sans">
                FRONTEND DEVELOPER
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#687548] via-[#526036] to-[#364223]">
                  &amp; UI SPECIALIST
                </span>
              </h1>

              {/* Engaging Description */}
              <p className="text-sm sm:text-base text-[#4E5B3D] max-w-xl leading-relaxed font-normal pt-0.5">
                Crafting responsive, high-performance web applications with
                obsessive attention to UI craft. Turning complex Figma designs
                into pixel-perfect, accessible code.
              </p>
            </motion.div>

            {/* Core Tech Stack Quick Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex flex-wrap items-center gap-1.5 pt-0.5"
            >
              <span className="text-[11px] font-mono font-bold text-[#687548] mr-1 uppercase">
                Core Stack:
              </span>
              {[
                "React 19",
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS v4",
                "Framer Motion",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-white/85 border border-[#CAD6BA] text-[#343F24] hover:border-[#687548] hover:text-[#182011] hover:bg-white transition-all cursor-default shadow-2xs"
                >
                  {tech}
                </span>
              ))}
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
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-[#687548] text-[#FFFFFF] hover:bg-[#58643C] transition-all duration-300 shadow-md shadow-[#687548]/30 hover:shadow-lg hover:shadow-[#687548]/40 hover:-translate-y-0.5 active:translate-y-0 border border-[#8FA858]/40 cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Clean Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-white/90 text-[#2B351F] hover:text-[#182011] hover:bg-white hover:border-[#687548] border border-[#CCD7BD] transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#687548] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/85 border border-[#CAD6BA] text-[#4A5734] hover:text-[#182011] hover:border-[#687548] hover:bg-white transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <GithubLogo className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/85 border border-[#CAD6BA] text-[#4A5734] hover:text-[#182011] hover:border-[#687548] hover:bg-white transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Stats Metrics Counter Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 border-t border-[#CAD6BA] grid grid-cols-4 gap-2 sm:gap-4 max-w-lg"
            >
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#182011] font-mono tracking-tight">
                  <AnimatedCounter value={3} suffix="+" />
                </p>
                <p className="text-[10.5px] text-[#637050] font-medium mt-0.5 leading-tight">
                  Years Exp
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#687548] font-mono tracking-tight">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-[10.5px] text-[#637050] font-medium mt-0.5 leading-tight">
                  Shipped Works
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#182011] font-mono tracking-tight">
                  <AnimatedCounter value={99} suffix="/100" />
                </p>
                <p className="text-[10.5px] text-[#637050] font-medium mt-0.5 leading-tight">
                  Lighthouse
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#687548] font-mono tracking-tight">
                  &lt; 0.8s
                </p>
                <p className="text-[10.5px] text-[#637050] font-medium mt-0.5 leading-tight">
                  Sub-Sec LCP
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
              className="relative w-full max-w-[700px] rounded-2xl sm:rounded-3xl backdrop-blur-md p-1.5 sm:p-2.5 shadow-2xl shadow-[#687548]/20 transition-all duration-300 group"
            >
              {/* The Video Container - 700px x 500px Responsive (aspect-[7/5]) */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#12170E] aspect-[7/5] w-full max-w-[700px] max-h-[500px] flex items-center justify-center">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#151B10] text-[#8FA858] z-10">
                    <Repeat className="w-16 h-16 animate-spin text-[#8FA858]" />
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
