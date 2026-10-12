import React from 'react';
import { Bot, Activity, ShoppingBag, Home, SlidersHorizontal } from 'lucide-react';

interface Props {
  projectId: string;
}

export const ProjectCardPreview: React.FC<Props> = ({ projectId }) => {
  if (projectId === 'betterweb-ai') {
    return (
      <div className="w-full h-full bg-[#FFFFFF] p-4 flex flex-col justify-between select-none">
        {/* Top App bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#687548] flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#252820]">Betterweb AI Suite</p>
              <p className="text-[10px] text-[#5E6455]">Autonomous Widget Studio</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#F0F3E8] text-[#687548]">
            Active Plan: Pro
          </span>
        </div>

        {/* Mock Analytics Cards */}
        <div className="grid grid-cols-3 gap-2 my-3">
          <div className="p-2.5 rounded-lg bg-[#F8F8F4] border border-[#E5E6DC]">
            <p className="text-[10px] text-[#5E6455]">Conversations</p>
            <p className="text-sm font-bold text-[#252820]">14,290</p>
            <p className="text-[9px] text-[#687548] font-semibold">+18.4% this mo</p>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F8F8F4] border border-[#E5E6DC]">
            <p className="text-[10px] text-[#5E6455]">Latency Avg</p>
            <p className="text-sm font-bold text-[#687548]">182ms</p>
            <p className="text-[9px] text-[#5E6455]">Edge Cached</p>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F8F8F4] border border-[#E5E6DC]">
            <p className="text-[10px] text-[#5E6455]">MRR Generated</p>
            <p className="text-sm font-bold text-[#252820]">$3,480</p>
            <p className="text-[9px] text-[#687548] font-semibold">Stripe Live</p>
          </div>
        </div>

        {/* Embedded Widget Simulator */}
        <div className="p-3 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#687548] animate-pulse" />
            <span className="text-xs font-mono text-[#252820]">Client Embed: &lt;script src="/widget.js"&gt;</span>
          </div>
          <span className="text-[10px] font-semibold px-2 py-1 bg-[#687548] text-white rounded">
            Connected
          </span>
        </div>
      </div>
    );
  }

  if (projectId === 'ease-md') {
    return (
      <div className="w-full h-full bg-[#FFFFFF] p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#525E37] flex items-center justify-center text-white">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#252820]">Ease MD Telehealth</p>
              <p className="text-[10px] text-[#5E6455]">Clinical Intake Funnel</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#687548] font-semibold bg-[#F0F3E8] px-2 py-0.5 rounded">
            Step 3 of 4 (75%)
          </div>
        </div>

        {/* Quiz Flow Card */}
        <div className="my-2 p-3 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] space-y-2.5">
          <p className="text-xs font-semibold text-[#252820]">
            What primary health objective are you focusing on today?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-[#FFFFFF] border-2 border-[#687548] text-[11px] font-medium text-[#252820] flex items-center justify-between shadow-xs">
              <span>Metabolic Health</span>
              <span className="w-2 h-2 rounded-full bg-[#687548]" />
            </div>
            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E5E6DC] text-[11px] text-[#5E6455]">
              Doctor Consultations
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#5E6455] pt-1">
          <span>🔒 HIPAA-Compliant Encryption</span>
          <span className="font-semibold text-[#687548]">+28% completion uplift</span>
        </div>
      </div>
    );
  }

  if (projectId === 'a-retro-tale') {
    return (
      <div className="w-full h-full bg-[#FFFFFF] p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#687548] flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#252820]">A Retro Tale</p>
              <p className="text-[10px] text-[#5E6455]">Luxury Vintage Resale</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#F8F8F4] border border-[#E5E6DC] text-[#252820]">
              Cart (3)
            </span>
          </div>
        </div>

        {/* Product Grid Mock */}
        <div className="grid grid-cols-2 gap-2.5 my-2">
          <div className="p-2 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] space-y-1">
            <div className="w-full h-14 rounded-lg bg-[#E5E6DC]/60 flex items-center justify-center text-[10px] text-[#5E6455] font-mono">
              [Chanel Flap Bag]
            </div>
            <p className="text-[11px] font-bold text-[#252820]">Authenticated Vintage</p>
            <p className="text-[10px] text-[#687548] font-bold">€3,850 • Verified</p>
          </div>
          <div className="p-2 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] space-y-1">
            <div className="w-full h-14 rounded-lg bg-[#E5E6DC]/60 flex items-center justify-center text-[10px] text-[#5E6455] font-mono">
              [Hermès Kelly 28]
            </div>
            <p className="text-[11px] font-bold text-[#252820]">Pristine Condition</p>
            <p className="text-[10px] text-[#687548] font-bold">€9,200 • Verified</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#5E6455]">
          <span>Facets: Brand • Era • Condition</span>
          <span className="font-mono text-[#252820]">LCP: 0.9s</span>
        </div>
      </div>
    );
  }

  // Darvesta
  return (
    <div className="w-full h-full bg-[#FFFFFF] p-4 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#525E37] flex items-center justify-center text-white">
            <Home className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#252820]">Darvesta Living</p>
            <p className="text-[10px] text-[#5E6455]">Geospatial Real Estate</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0F3E8] text-[#687548]">
          Map View Active
        </span>
      </div>

      {/* Map simulator */}
      <div className="my-2 p-3 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] relative overflow-hidden flex flex-col justify-between h-24">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-[#252820] bg-white/90 px-2 py-0.5 rounded shadow-2xs">
            📍 Downtown Penthouse
          </span>
          <span className="text-[10px] font-bold text-[#687548] bg-white px-2 py-0.5 rounded shadow-2xs">
            $1.45M
          </span>
        </div>
        <div className="text-[10px] text-[#5E6455] flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3 text-[#687548]" />
          <span>Interactive 60 FPS gesture viewport</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#5E6455]">
        <span>Responsive 320px — 4K Ready</span>
        <span className="font-semibold text-[#687548]">Mapbox GL Synced</span>
      </div>
    </div>
  );
};

