import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
}

export const ReactLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
    <g stroke="#00D8FE" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 180 180" className={className} fill="none">
    <circle cx="90" cy="90" r="90" fill="#111827" />
    <path
      d="M149.5 157.5L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.6 9.5-7.3z"
      fill="url(#next-grad)"
    />
    <path d="M115 54h12v72h-12z" fill="url(#next-grad-2)" />
    <defs>
      <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next-grad-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TypescriptLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path
      fill="#ffffff"
      d="M68.7 78.4c1.9 3.5 4.5 6.3 7.8 8.4 3.3 2.1 7.2 3.2 11.7 3.2 3.6 0 6.6-.7 9-2.1 2.4-1.4 4.2-3.3 5.4-5.7 1.2-2.4 1.8-5.1 1.8-8.1 0-3-.6-5.5-1.8-7.7-1.2-2.2-3.1-4-5.6-5.4-2.5-1.4-6-2.8-10.3-4.1-5.1-1.6-9.1-3.2-12-4.9-2.9-1.7-5-3.8-6.3-6.4-1.3-2.6-2-5.7-2-9.3 0-4.3 1.1-8.1 3.4-11.4 2.3-3.3 5.5-5.9 9.8-7.8s9.3-2.9 15.2-2.9c5.9 0 11.1 1.1 15.6 3.4s8.1 5.5 10.8 9.6l-13.6 8.5c-1.8-2.7-4-4.7-6.5-6.1s-5.6-2.1-9.2-2.1c-3.1 0-5.7.6-7.8 1.9-2.1 1.2-3.1 3-3.1 5.4 0 2.1.8 3.8 2.3 5 1.5 1.2 4.3 2.4 8.4 3.7 5.6 1.7 10 3.5 13.1 5.3 3.1 1.8 5.4 4.1 6.9 6.8 1.5 2.7 2.3 6.1 2.3 10 0 4.6-1.2 8.7-3.6 12.3-2.4 3.6-5.9 6.5-10.4 8.6-4.5 2.1-9.9 3.2-16.2 3.2-6.9 0-13-1.4-18.3-4.2-5.3-2.8-9.4-7-12.3-12.5l14.1-8.5zM21.1 34.6h47.2v14.1H48.1v64.7H31.3V48.7H21.1V34.6z"
    />
  </svg>
);

export const JavascriptLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 630 630" className={className}>
    <rect width="630" height="630" rx="90" fill="#F7DF1E" />
    <path
      fill="#000000"
      d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.34 0-28.33 11-28.33 25.4 0 17.8 11 24.9 36.4 35.9l14.8 6.34c50.3 21.57 78.7 43.57 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
    />
  </svg>
);

export const TailwindLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

export const ReduxLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#764ABC">
    <path d="M15.42 14.16c-.36.21-.76.36-1.18.44-.09-.27-.2-.55-.33-.82.35-.07.68-.19.98-.36.68-.38 1.07-.94 1.07-1.53 0-.64-.45-1.24-1.25-1.63-.81-.4-1.92-.61-3.08-.61s-2.27.21-3.08.61c-.8.39-1.25.99-1.25 1.63 0 .59.39 1.15 1.07 1.53.3.17.63.29.98.36-.13.27-.24.55-.33.82-.42-.08-.82-.23-1.18-.44-1.07-.61-1.69-1.49-1.69-2.43 0-.96.64-1.85 1.74-2.45 1.1-.6 2.58-.93 4.14-.93s3.04.33 4.14.93c1.1.6 1.74 1.49 1.74 2.45 0 .94-.62 1.82-1.69 2.43zM6.9 17.58c.27-.47.6-.88.98-1.23-.23-.17-.46-.35-.67-.55-.26.24-.48.51-.66.81-.42.72-.44 1.43-.05 1.96.39.53 1.14.77 2.06.67.92-.1 1.94-.52 2.82-1.17.88-.65 1.57-1.47 1.93-2.3.26-.6.33-1.19.2-1.72-.12-.49-.44-.9-.91-1.18-.24.18-.49.34-.76.47.27.16.45.39.52.67.07.28.02.6-.13.92-.25.56-.74 1.14-1.39 1.62-.64.48-1.4.8-2.12.89-.72.08-1.26-.06-1.52-.41-.26-.35-.25-.83.05-1.34l-.35-.12zm10.2 0c.3.51.31.99.05 1.34-.26.35-.8.49-1.52.41-.72-.09-1.48-.41-2.12-.89-.65-.48-1.14-1.06-1.39-1.62-.15-.32-.2-.64-.13-.92.07-.28.25-.51.52-.67-.27-.13-.52-.29-.76-.47-.47.28-.79.69-.91 1.18-.13.53-.06 1.12.2 1.72.36.83 1.05 1.65 1.93 2.3.88.65 1.9 1.07 2.82 1.17.92.1 1.67-.14 2.06-.67.39-.53.37-1.24-.05-1.96-.18-.3-.4-.57-.66-.81-.21.2-.44.38-.67.55.38.35.71.76.98 1.23l.07.12z" />
  </svg>
);

export const FramerMotionLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
    <path d="M12 8l8 8H4z" fill="#EA00D9" opacity="0.8" />
  </svg>
);

export const ViteLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none">
    <path
      d="M29.5 5.5L16.8 28.5c-.3.6-1.3.6-1.6 0L2.5 5.5c-.4-.7.1-1.5.9-1.5h25.2c.8 0 1.3.8.9 1.5z"
      fill="url(#vite-grad-1)"
    />
    <path
      d="M21.5 3.5L11.8 17.2c-.3.4 0 1 .5 1h4.2l-3.2 8.3c-.3.7.6 1.2 1.1.7l10.2-11.8c.4-.4.1-1.1-.4-1.1h-4.2l4.1-9.6c.4-.8-.5-1.5-1.2-.9z"
      fill="url(#vite-grad-2)"
    />
    <defs>
      <linearGradient id="vite-grad-1" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="vite-grad-2" x1="12" y1="4" x2="22" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFEA83" />
        <stop offset=".5" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);

export const Html5Logo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#E34F26" />
    <path d="M12 3.8v16.9l5.8-1.8L19.3 3.8H12z" fill="#EF652A" />
    <path d="M12 7.7H7.7l.3 3.2H12v-3.2zm0 6.4h-2.1l-.1-1.6H7.7l.3 3.6 4 .9v-2.9zm0-9.6H7.4L7 4.5h5V4.5z" fill="#ffffff" />
    <path d="M12 7.7h4.3l-.4 4.8H12v-3.2zm0 6.4v2.9l3.9-.9.4-4.8H12v2.8z" fill="#EBEBEB" />
  </svg>
);

export const Css3Logo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#1572B6" />
    <path d="M12 3.8v16.9l5.8-1.8L19.3 3.8H12z" fill="#33A9DC" />
    <path d="M12 7.7H7.7l.3 3.2H12v-3.2zm0 6.4h-2.1l-.1-1.6H7.7l.3 3.6 4 .9v-2.9z" fill="#ffffff" />
    <path d="M12 7.7h4.3l-.4 4.8H12v-3.2zm0 6.4v2.9l3.9-.9.4-4.8H12v2.8z" fill="#EBEBEB" />
  </svg>
);

export const NodejsLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#5FA04E">
    <path d="M11.998 0a1.603 1.603 0 0 0-.807.221L1.936 5.578A1.602 1.602 0 0 0 1.13 6.97v10.06a1.602 1.602 0 0 0 .806 1.392l9.255 5.357a1.604 1.604 0 0 0 1.614 0l9.256-5.357a1.603 1.603 0 0 0 .807-1.392V6.97a1.603 1.603 0 0 0-.807-1.392L12.806.221A1.604 1.604 0 0 0 11.998 0zm.012 3.123 7.828 4.52-3.195 1.845-4.633-2.678v5.356l-3.195 1.845v-7.2l3.195-1.844v-1.844zm-4.792 6.368 3.195 1.845v7.2l-3.195-1.845zm9.584 0v7.2l-3.195 1.845v-7.2z" />
  </svg>
);

export const GitLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M23.6 10.9L13.1.4c-.6-.5-1.5-.5-2.1 0L8.6 2.8l3.1 3.1c.6-.2 1.3 0 1.7.5.5.5.6 1.2.4 1.8l3 3c.6-.2 1.3 0 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.4-1.9l-2.8-2.8v5.5c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4V8.4c-.6-.2-1-.8-1-1.4 0-.4.2-.8.5-1.1L7.5 3.9.4 11c-.6.6-.6 1.5 0 2.1l10.5 10.5c.6.6 1.5.6 2.1 0l10.6-10.6c.6-.6.6-1.5 0-2.1z"
      fill="#F05032"
    />
  </svg>
);

export const GithubLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#181717">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const FigmaLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 38 57" className={className} fill="none">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

export const GraphqlLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#E10098">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.7L12 19.69l6.66-3.84v-7.7L12 4.31zM12 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4.33 7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8.66 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

export const RestApiLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#0284C7" />
    {/* Request / Response bi-directional HTTP transfer arrows & endpoint nodes */}
    <path
      d="M5.5 8.5h9M12 5.5l3.5 3-3.5 3"
      stroke="#FFFFFF"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 15.5h-9M12 18.5l-3.5-3 3.5-3"
      stroke="#7DD3FC"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="5.5" cy="8.5" r="1.5" fill="#7DD3FC" />
    <circle cx="18.5" cy="15.5" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const LinkedinLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const WebsocketLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#010101" />
    {/* Official Socket.io / WebSocket duplex connection symbol */}
    <path
      fill="#FFFFFF"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-4.5-5h3V7.5l4.5 5h-3v4z"
    />
  </svg>
);

export const StripeLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#635BFF" />
    <path
      fill="#FFFFFF"
      d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.743-.653 6.26-1.871 1.578-1.246 2.384-3.09 2.384-5.496 0-4.14-2.586-5.836-6.382-7.483z"
      transform="translate(4, 4) scale(0.667)"
    />
  </svg>
);

export const JwtLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#000000" />
    {/* Official JSON Web Token brand identity */}
    <g transform="translate(3, 3) scale(0.75)">
      <path d="M12 0a1.2 1.2 0 0 0-.6.17l-9.6 5.54a1.2 1.2 0 0 0-.6 1.04v10.5a1.2 1.2 0 0 0 .6 1.04l9.6 5.54a1.2 1.2 0 0 0 1.2 0l9.6-5.54a1.2 1.2 0 0 0 .6-1.04V6.75a1.2 1.2 0 0 0-.6-1.04L12.6.17A1.2 1.2 0 0 0 12 0z" fill="#0B0F19" />
      <path d="M12 2.5l7.5 4.3v8.6L12 19.7 4.5 15.4V6.8L12 2.5z" stroke="#FB005A" strokeWidth="2" fill="none" />
      <circle cx="12" cy="11.1" r="3" fill="#00B9F1" />
      <circle cx="12" cy="4.5" r="1.6" fill="#FB005A" />
      <circle cx="17.7" cy="14.4" r="1.6" fill="#D63AFF" />
      <circle cx="6.3" cy="14.4" r="1.6" fill="#D63AFF" />
    </g>
  </svg>
);

export const ReactRouterLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="5" fill="#CA4245" />
    {/* Official React Router logo */}
    <path
      fill="#FFFFFF"
      d="M20.24 15.54a5.05 5.05 0 0 0-2.3-4.27 4.97 4.97 0 0 0 1.58-3.73 5.04 5.04 0 0 0-5.04-5.04H6.38v18.99h3.76v-5.69h3.29l3.52 5.69h4.37l-4.13-6.19a4.97 4.97 0 0 0 3.05-1.76zM10.14 6.26h4.34a1.28 1.28 0 0 1 1.28 1.28 1.28 1.28 0 0 1-1.28 1.28h-4.34V6.26z"
      transform="translate(3.5, 3.5) scale(0.71)"
    />
  </svg>
);

export const ShieldLockLogo: React.FC<LogoProps> = ReactRouterLogo;

