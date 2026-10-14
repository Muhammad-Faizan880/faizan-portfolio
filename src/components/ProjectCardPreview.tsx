import React from 'react';
import { Bot, Activity, ShoppingBag, Home, SlidersHorizontal, Search, TrendingUp, Smartphone, Globe, Coffee, Sparkles } from 'lucide-react';

interface Props {
  projectId: string;
}

export const ProjectCardPreview: React.FC<Props> = ({ projectId }) => {
  if (projectId === 'betterweb-ai') {
    return (
      <div className="w-full h-full bg-[#fbfdfc] p-4 flex flex-col justify-between select-none">
        {/* Top App bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2ece7]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0d9488] flex items-center justify-center text-white shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#13211f]">BetterWeb AI Team</p>
              <p className="text-xs text-[#586966]">9 Specialists • Account Mgr Active</p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#e6fbf6] text-[#0d9488] border border-[#2de6c6]/40">
            Live Platform
          </span>
        </div>

        {/* Mock Analytics Cards with BetterWeb teal & lavender accents */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2.5 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
            <p className="text-xs text-[#586966]">AI Phone Calls</p>
            <p className="text-sm font-bold text-[#13211f]">148 Leads</p>
            <p className="text-xs text-[#0d9488] font-semibold">+34% booked</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
            <p className="text-xs text-[#586966]">Google Map Rank</p>
            <p className="text-sm font-bold text-[#7c3aed]">#1 Local</p>
            <p className="text-xs text-[#7c3aed] font-semibold">4.9 ★ Rating</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
            <p className="text-xs text-[#586966]">Web Audit Grade</p>
            <p className="text-sm font-bold text-[#0284c7]">98 / 100</p>
            <p className="text-xs text-[#0284c7] font-semibold">Sub-sec LCP</p>
          </div>
        </div>

        {/* Embedded Widget Simulator */}
        <div className="p-2.5 rounded-xl bg-[#e6fbf6] border border-[#2de6c6]/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-xs font-mono text-[#13211f]">WebSocket: Live Stream Connected</span>
          </div>
          <span className="text-xs font-bold px-2 py-0.5 bg-[#635BFF] text-white rounded-md shadow-xs">
            Stripe Active
          </span>
        </div>
      </div>
    );
  }

  if (projectId === 'rankology') {
    return (
      <div className="w-full h-full bg-[#fafbfc] p-4 flex flex-col justify-between select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e0e7ff]/70">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#4F46E5] flex items-center justify-center text-white shadow-xs">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Rankology Intelligence</p>
              <p className="text-xs text-muted">Search Console & Keyword Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#EEF2FF] text-[#4F46E5] border border-[#4F46E5]/20">
              GA4 + GSC Synced
            </span>
          </div>
        </div>

        {/* Simulated Keyword Intelligence Table / Metric Cards */}
        <div className="my-2 space-y-2">
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-white border border-[#E0E7FF] rounded-lg text-xs font-mono">
            <div className="flex items-center gap-1.5 text-charcoal truncate">
              <Search className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span className="truncate">kw: &quot;enterprise seo software&quot;</span>
            </div>
            <span className="font-bold text-[#10b981] shrink-0">Rank #1 (+4)</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
              <p className="text-[11px] text-muted">Monthly Vol</p>
              <p className="text-sm font-bold text-charcoal">48.5K</p>
              <p className="text-[10px] text-olive font-semibold">+18% MoM</p>
            </div>
            <div className="p-2 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
              <p className="text-[11px] text-muted">Avg CPC</p>
              <p className="text-sm font-bold text-[#4F46E5]">$4.80</p>
              <p className="text-[10px] text-[#4F46E5] font-semibold">High Intent</p>
            </div>
            <div className="p-2 rounded-xl bg-white border border-[#e2ece7] shadow-xs">
              <p className="text-[11px] text-muted">Tech Health</p>
              <p className="text-sm font-bold text-[#10b981]">99/100</p>
              <p className="text-[10px] text-[#10b981] font-semibold">0 Errors</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted pt-1 border-t border-[#e2ece7]/60">
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#4F46E5]" />
            <span>app.rankology.io Live Pipeline</span>
          </span>
          <span className="font-semibold text-olive">Zero CLS (Sub-sec)</span>
        </div>
      </div>
    );
  }

  if (projectId === 'ease-md') {
    return (
      <div className="w-full h-full bg-white p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-sage">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-olive-dark flex items-center justify-center text-white">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">Ease MD Telehealth</p>
              <p className="text-xs text-muted">Clinical Intake Funnel</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-olive font-semibold bg-olive-light px-2 py-0.5 rounded">
            Step 3 of 4 (75%)
          </div>
        </div>

        {/* Quiz Flow Card */}
        <div className="my-2 p-3 rounded-xl bg-offwhite border border-sage space-y-2.5">
          <p className="text-xs font-semibold text-charcoal">
            What primary health objective are you focusing on today?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-white border-2 border-olive text-xs font-medium text-charcoal flex items-center justify-between shadow-xs">
              <span>Metabolic Health</span>
              <span className="w-2 h-2 rounded-full bg-olive" />
            </div>
            <div className="p-2 rounded-lg bg-white border border-sage text-xs text-muted">
              Doctor Consultations
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted pt-1">
          <span>🔒 HIPAA-Compliant Encryption</span>
          <span className="font-semibold text-olive">+28% completion uplift</span>
        </div>
      </div>
    );
  }

  if (projectId === 'a-retro-tale') {
    return (
      <div className="w-full h-full bg-white p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-sage">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-olive flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">A Retro Tale</p>
              <p className="text-xs text-muted">Luxury Vintage Resale</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs px-2 py-0.5 rounded bg-offwhite border border-sage text-charcoal">
              Cart (3)
            </span>
          </div>
        </div>

        {/* Product Grid Mock */}
        <div className="grid grid-cols-2 gap-2.5 my-2">
          <div className="p-2 rounded-xl bg-offwhite border border-sage space-y-1">
            <div className="w-full h-14 rounded-lg bg-sage/60 flex items-center justify-center text-xs text-muted font-mono">
              [Chanel Flap Bag]
            </div>
            <p className="text-xs font-bold text-charcoal">Authenticated Vintage</p>
            <p className="text-xs text-olive font-bold">€3,850 • Verified</p>
          </div>
          <div className="p-2 rounded-xl bg-offwhite border border-sage space-y-1">
            <div className="w-full h-14 rounded-lg bg-sage/60 flex items-center justify-center text-xs text-muted font-mono">
              [Hermès Kelly 28]
            </div>
            <p className="text-xs font-bold text-charcoal">Pristine Condition</p>
            <p className="text-xs text-olive font-bold">€9,200 • Verified</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted">
          <span>Facets: Brand • Era • Condition</span>
          <span className="font-mono text-charcoal">LCP: 0.9s</span>
        </div>
      </div>
    );
  }

  if (projectId === 'codendcoffee') {
    return (
      <div className="w-full h-full bg-[#fdfcfa] p-4 flex flex-col justify-between select-none">
        {/* Top App bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#fef3c7]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#D97706] flex items-center justify-center text-white shadow-xs">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-charcoal">CodeNdCoffee Agency</p>
              <p className="text-xs text-muted">Custom WordPress Theme • Tailwind CSS</p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] border border-[#F59E0B]/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            Live Agency
          </span>
        </div>

        {/* Mock Feature Metrics */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2.5 rounded-xl bg-white border border-[#fef3c7] shadow-xs">
            <p className="text-xs text-muted">Frontend</p>
            <p className="text-sm font-bold text-charcoal">HTML5 + Tailwind</p>
            <p className="text-[10px] text-olive font-semibold">Pixel-Perfect UI</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#fef3c7] shadow-xs">
            <p className="text-xs text-muted">CMS Integration</p>
            <p className="text-sm font-bold text-[#D97706]">WordPress Theme</p>
            <p className="text-[10px] text-[#B45309] font-semibold">Zero Plugin Bloat</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#fef3c7] shadow-xs">
            <p className="text-xs text-muted">PageSpeed</p>
            <p className="text-sm font-bold text-[#10b981]">98 / 100</p>
            <p className="text-[10px] text-[#10b981] font-semibold">Sub-second FCP</p>
          </div>
        </div>

        {/* Live agency footer */}
        <div className="flex items-center justify-between text-xs text-muted pt-1 border-t border-[#fef3c7]">
          <span>Figma to High-Performance Theme Conversion</span>
          <span className="font-semibold text-olive">codendcoffee.com Live</span>
        </div>
      </div>
    );
  }

  // Darvesta - Cross-Platform React Native CLI Mobile App
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between pb-3 border-b border-sage">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-olive-dark flex items-center justify-center text-white shadow-xs">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal">Darvesta Living</p>
            <p className="text-xs text-muted">React Native CLI • iOS & Android</p>
          </div>
        </div>
        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-olive-light text-olive border border-olive/20">
          Native 60 FPS
        </span>
      </div>

      {/* Map simulator */}
      <div className="my-2 p-3 rounded-xl bg-olive-light/60 border border-sage relative overflow-hidden flex flex-col justify-between h-24">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-charcoal bg-white/95 px-2 py-0.5 rounded shadow-2xs border border-sage/40 flex items-center gap-1">
            <Home className="w-3 h-3 text-olive" />
            <span>Downtown Penthouse</span>
          </span>
          <span className="text-xs font-bold text-olive-dark bg-white px-2 py-0.5 rounded shadow-2xs border border-sage/40">
            $1.45M
          </span>
        </div>
        <div className="text-xs text-muted flex items-center justify-between bg-white/80 backdrop-blur-xs px-2 py-1 rounded">
          <div className="flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-olive" />
            <span className="font-mono text-[11px]">react-native-reanimated gestures</span>
          </div>
          <span className="text-[10px] font-bold text-olive">iOS + Android</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted pt-1 border-t border-sage/40">
        <span>Redux Toolkit Offline Cache</span>
        <span className="font-semibold text-olive">Mapbox Native Bridge</span>
      </div>
    </div>
  );
};
