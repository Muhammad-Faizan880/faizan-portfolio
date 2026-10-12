import React, { useEffect, useRef } from 'react';

interface IsometricCubeCanvasProps {
  mousePos: { x: number; y: number };
  className?: string;
}

export const IsometricCubeCanvas: React.FC<IsometricCubeCanvasProps> = ({
  mousePos,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Smooth spotlight interpolation coordinates
  const currentSpotlightRef = useRef<{ x: number; y: number }>({ x: 500, y: 350 });
  const mousePosRef = useRef<{ x: number; y: number }>(mousePos);

  // Update mouse pos ref
  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Cube size parameters
    const s = 42; // Side length of hexagon
    const sqrt3 = Math.sqrt(3);
    const w = s * sqrt3; // Horizontal column spacing
    const h = s * 1.5; // Vertical row step
    const halfW = w / 2;
    const halfS = s / 2;

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smoothly interpolate spotlight towards mouse
      const targetX = mousePosRef.current.x >= 0 ? mousePosRef.current.x : width * 0.7;
      const targetY = mousePosRef.current.y >= 0 ? mousePosRef.current.y : height * 0.45;

      currentSpotlightRef.current.x += (targetX - currentSpotlightRef.current.x) * 0.08;
      currentSpotlightRef.current.y += (targetY - currentSpotlightRef.current.y) * 0.08;

      const spotX = currentSpotlightRef.current.x;
      const spotY = currentSpotlightRef.current.y;
      const spotRadius = 420;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Base background vignette
      ctx.fillStyle = '#090B07';
      ctx.fillRect(0, 0, width, height);

      // Radial spotlight back-glow
      const radialGlow = ctx.createRadialGradient(spotX, spotY, 20, spotX, spotY, spotRadius * 1.2);
      radialGlow.addColorStop(0, 'rgba(110, 138, 62, 0.24)');
      radialGlow.addColorStop(0.4, 'rgba(85, 108, 48, 0.12)');
      radialGlow.addColorStop(1, 'rgba(9, 11, 7, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Determine grid range
      const cols = Math.ceil(width / w) + 2;
      const rows = Math.ceil(height / h) + 2;

      ctx.lineWidth = 1;

      // Draw all cubes
      for (let r = -1; r <= rows; r++) {
        const isOdd = Math.abs(r) % 2 === 1;
        const xOffset = isOdd ? halfW : 0;
        const cy = r * h;

        for (let c = -1; c <= cols; c++) {
          const cx = c * w + xOffset;

          // Distance to spotlight
          const dx = cx - spotX;
          const dy = cy - spotY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Calculate illumination ratio
          let glow = 0;
          if (dist < spotRadius) {
            glow = Math.pow(1 - dist / spotRadius, 1.6);
          }

          // Subtle ambient pulse for idle funky vibe
          const wave = Math.sin(time + (cx * 0.015) + (cy * 0.015)) * 0.08;
          const totalIntensity = Math.min(1, Math.max(0, glow + wave));

          // Stroke styling based on spotlight
          if (totalIntensity > 0.05) {
            // Illuminated glowing line
            const rVal = Math.round(75 + totalIntensity * 115);
            const gVal = Math.round(95 + totalIntensity * 125);
            const bVal = Math.round(45 + totalIntensity * 65);
            const alpha = 0.2 + totalIntensity * 0.75;
            ctx.strokeStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${alpha})`;
            ctx.lineWidth = 1 + totalIntensity * 0.8;
          } else {
            // Deep subtle ambient line
            ctx.strokeStyle = 'rgba(42, 54, 28, 0.28)';
            ctx.lineWidth = 1;
          }

          // --- 1. Outer Hexagon ---
          ctx.beginPath();
          // Top vertex
          ctx.moveTo(cx, cy - s);
          // Top-right
          ctx.lineTo(cx + halfW, cy - halfS);
          // Bottom-right
          ctx.lineTo(cx + halfW, cy + halfS);
          // Bottom
          ctx.lineTo(cx, cy + s);
          // Bottom-left
          ctx.lineTo(cx - halfW, cy + halfS);
          // Top-left
          ctx.lineTo(cx - halfW, cy - halfS);
          ctx.closePath();
          ctx.stroke();

          // --- 2. Inner 3D Y-Joint (Creates the Cube Illusion) ---
          ctx.beginPath();
          // Center to Bottom
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx, cy + s);
          // Center to Top-Left
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx - halfW, cy - halfS);
          // Center to Top-Right
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + halfW, cy - halfS);
          ctx.stroke();

          // Optional glowing vertex node on high intensity centers
          if (totalIntensity > 0.45) {
            ctx.fillStyle = `rgba(195, 235, 120, ${totalIntensity * 0.9})`;
            ctx.beginPath();
            ctx.arc(cx, cy, 1.8 * totalIntensity, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
    />
  );
};

