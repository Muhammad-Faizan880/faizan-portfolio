import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Unlock,
  Key,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Terminal,
  ShieldAlert,
  Play,
  Check,
} from 'lucide-react';

type TabMode = 'jwt' | 'routes';

export const InteractiveAuthSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabMode>('jwt');

  // JWT Simulator States
  const [tokenStatus, setTokenStatus] = useState<'valid' | 'expired' | 'refreshing'>('valid');
  const [requestLog, setRequestLog] = useState<string[]>(['Token active. Ready for API dispatch.']);
  const [isProcessing, setIsProcessing] = useState(false);

  // Protected Route Simulator States
  const [currentRole, setCurrentRole] = useState<'guest' | 'user' | 'admin'>('guest');
  const [targetRoute, setTargetRoute] = useState<'/dashboard' | '/admin/settings'>('/dashboard');

  // Simulate Normal Request
  const handleNormalRequest = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTokenStatus('valid');
    setRequestLog([
      'Dispatching GET /api/v1/metrics...',
      'Axios Request Interceptor: Injected Bearer eyJhbGciOi...',
      'Server Response: 200 OK [Payload Delivered]',
    ]);
    setTimeout(() => setIsProcessing(false), 800);
  };

  // Simulate 401 & Silent Refresh Flow
  const handleSimulateRefresh = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTokenStatus('expired');
    setRequestLog([
      'Dispatching GET /api/v1/protected-data...',
      'Token Expired: Server returned 401 Unauthorized!',
    ]);

    setTimeout(() => {
      setTokenStatus('refreshing');
      setRequestLog((prev) => [
        ...prev,
        'Axios Response Interceptor caught 401',
        'Silent Handshake: POST /auth/refresh with HttpOnly Cookie...',
      ]);

      setTimeout(() => {
        setTokenStatus('valid');
        setRequestLog((prev) => [
          ...prev,
          'New Access Token generated & cached in memory',
          'Original Request automatically re-dispatched -> 200 OK Success!',
        ]);
        setIsProcessing(false);
      }, 1000);
    }, 900);
  };

  // Route Evaluation logic
  const isRouteAllowed = () => {
    if (currentRole === 'guest') return false;
    if (targetRoute === '/admin/settings' && currentRole !== 'admin') return false;
    return true;
  };

  const getGuardReason = () => {
    if (currentRole === 'guest') {
      return {
        status: 'redirect',
        message: 'Unauthenticated -> navigate("/login", { replace: true })',
        icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
      };
    }
    if (targetRoute === '/admin/settings' && currentRole !== 'admin') {
      return {
        status: 'forbidden',
        message: '403 Forbidden -> Missing "admin" RBAC privilege',
        icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
      };
    }
    return {
      status: 'granted',
      message: 'Access Granted -> <Outlet /> rendered with verified session',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    };
  };

  const guardOutcome = getGuardReason();

  return (
    <div className="w-full rounded-3xl bg-charcoal text-offwhite border border-sage/20 shadow-xl overflow-hidden flex flex-col font-mono text-xs">
      {/* Simulator Header & Tab Switcher */}
      <div className="bg-charcoal/90 border-b border-white/10 px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
          <span className="font-bold text-white tracking-wide text-xs">
            Architecture Lab
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-sage font-medium">
            Live Interactive Simulator
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('jwt')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'jwt'
                ? 'bg-olive text-offwhite shadow-xs'
                : 'text-sage hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>JWT &amp; Refresh</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('routes')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'routes'
                ? 'bg-olive text-offwhite shadow-xs'
                : 'text-sage hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Protected Routes</span>
          </button>
        </div>
      </div>

      {/* Simulator Body */}
      <div className="p-4 sm:p-5 space-y-4">
        <AnimatePresence mode="wait">
          {activeTab === 'jwt' ? (
            <motion.div
              key="jwt-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Token State Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] text-sage/70 uppercase tracking-wider">
                    Access Token (Memory)
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        tokenStatus === 'valid'
                          ? 'bg-emerald-400 animate-pulse'
                          : tokenStatus === 'refreshing'
                          ? 'bg-amber-400 animate-spin'
                          : 'bg-rose-400'
                      }`}
                    />
                    <span className="text-white font-bold text-xs truncate">
                      {tokenStatus === 'valid'
                        ? 'Bearer eyJhbG...'
                        : tokenStatus === 'refreshing'
                        ? 'Refreshing...'
                        : 'Expired (401)'}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] text-sage/70 uppercase tracking-wider">
                    Refresh Mechanism
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-olive" />
                    <span>HttpOnly Cookie</span>
                  </div>
                </div>
              </div>

              {/* Live Terminal Log Stream */}
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2 min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-sage/60">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-olive" />
                    <span>Axios Interceptor Stream</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">
                    {isProcessing ? 'Processing handshake...' : 'Idle / Ready'}
                  </span>
                </div>

                <div className="space-y-1.5 py-1">
                  {requestLog.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-[11px] leading-relaxed"
                    >
                      <span className="text-olive select-none">&gt;</span>
                      <span
                        className={
                          log.includes('401')
                            ? 'text-rose-400 font-semibold'
                            : log.includes('Success') || log.includes('200 OK')
                            ? 'text-emerald-400 font-semibold'
                            : log.includes('Handshake')
                            ? 'text-amber-300'
                            : 'text-sage'
                        }
                      >
                        {log}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-[10px] text-sage/50 pt-2 border-t border-white/5">
                  Silent Refresh prevents session loss without forcing user to re-login.
                </p>
              </div>

              {/* Interactive Trigger Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleNormalRequest}
                  disabled={isProcessing}
                  className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 text-olive" />
                  <span>Send Valid Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleSimulateRefresh}
                  disabled={isProcessing}
                  className="px-3.5 py-2.5 rounded-xl bg-olive hover:bg-olive-dark text-offwhite font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs active:scale-98 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                  <span>Simulate 401 &amp; Refresh</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="routes-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Role & Route Selectors */}
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-sage/70 uppercase tracking-wider block mb-1.5">
                    1. Select Active User Auth State:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['guest', 'user', 'admin'] as const).map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setCurrentRole(role)}
                        className={`py-2 px-2.5 rounded-xl border text-center font-bold text-xs capitalize transition-all cursor-pointer ${
                          currentRole === role
                            ? 'bg-olive border-olive text-offwhite shadow-xs'
                            : 'bg-white/5 border-white/10 text-sage hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {role === 'guest' ? 'Guest (None)' : role === 'user' ? 'Member' : 'Admin'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-sage/70 uppercase tracking-wider block mb-1.5">
                    2. Select Target Protected Route:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetRoute('/dashboard')}
                      className={`py-2 px-3 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                        targetRoute === '/dashboard'
                          ? 'bg-white/15 border-olive text-white'
                          : 'bg-white/5 border-white/10 text-sage hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>/dashboard</span>
                      <span className="block text-[10px] text-sage/60 font-sans mt-0.5">
                        Requires Auth
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTargetRoute('/admin/settings')}
                      className={`py-2 px-3 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                        targetRoute === '/admin/settings'
                          ? 'bg-white/15 border-olive text-white'
                          : 'bg-white/5 border-white/10 text-sage hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>/admin/settings</span>
                      <span className="block text-[10px] text-sage/60 font-sans mt-0.5">
                        Requires RBAC: Admin
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Guard Evaluation Outcome Card */}
              <div
                className={`p-4 rounded-2xl border transition-all space-y-2.5 ${
                  guardOutcome.status === 'granted'
                    ? 'bg-emerald-950/40 border-emerald-500/40'
                    : guardOutcome.status === 'forbidden'
                    ? 'bg-amber-950/40 border-amber-500/40'
                    : 'bg-rose-950/40 border-rose-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {guardOutcome.status === 'granted' ? (
                      <Unlock className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Lock className="w-4 h-4 text-rose-400" />
                    )}
                    <span className="font-bold text-white text-xs">
                      Guard Evaluation: {guardOutcome.status.toUpperCase()}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      guardOutcome.status === 'granted'
                        ? 'bg-emerald-400/20 text-emerald-300'
                        : guardOutcome.status === 'forbidden'
                        ? 'bg-amber-400/20 text-amber-300'
                        : 'bg-rose-400/20 text-rose-300'
                    }`}
                  >
                    {isRouteAllowed() ? 'Route Unlocked' : 'Access Blocked'}
                  </span>
                </div>

                <p className="text-[11px] text-sage font-mono leading-relaxed">
                  {guardOutcome.message}
                </p>

                <div className="pt-2 border-t border-white/10 text-[10px] text-sage/70 flex items-center justify-between">
                  <span>Architecture: &lt;RequireAuth roles={'{'}[&apos;admin&apos;]{'}'} /&gt;</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    Zero flash of unauthed UI <Check className="w-3 h-3 text-emerald-400" />
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Simulator Footer Credentials / Spec Checklist */}
      <div className="bg-charcoal/80 border-t border-white/10 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-sage">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
          <span>CSRF &amp; XSS Protected Token Storage</span>
        </div>
        <div className="flex items-center gap-1 text-white font-semibold">
          <span>Axios + React Router 6 Guarded</span>
          <ArrowRight className="w-3 h-3 text-olive" />
        </div>
      </div>
    </div>
  );
};

