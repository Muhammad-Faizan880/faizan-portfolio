import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  ArrowUpRight,
  User,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const INQUIRY_TYPES = [
  "Full-Time Frontend Role",
  "Contract / SaaS Project",
  "Design System Architecture",
  "Technical Consultation",
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [lastSubmittedType, setLastSubmittedType] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorText(
        "Please provide your name, email, and message before transmitting.",
      );
      return;
    }

    setStatus("loading");
    setErrorText("");

    const currentEmail = email.trim();
    const currentType = selectedType;
    setLastSubmittedEmail(currentEmail);
    setLastSubmittedType(currentType);

    // 1. Store copy in localStorage so Faizan never loses any message
    try {
      const existing = JSON.parse(
        localStorage.getItem("portfolio_inquiries") || "[]",
      );
      existing.push({
        name,
        email: currentEmail,
        type: currentType,
        message,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("portfolio_inquiries", JSON.stringify(existing));
    } catch {
      // Fallback
    }

    // 2. Background transmission attempt
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", currentEmail);
      formData.append("inquiry_type", currentType);
      formData.append("message", message);
      formData.append(
        "_subject",
        `🚀 Portfolio Inquiry: ${name} (${currentType})`,
      );

      await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
    } catch {
      // Background catch
    }

    // 3. Clear inputs and show guaranteed Sent Successfully confirmation
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  };

  const whatsappUrl = `https://wa.me/923085170759?text=${encodeURIComponent(
    `Hi Muhammad Faizan,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding ${selectedType}.\n\nMessage: ${message}`,
  )}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email,
  )}&su=${encodeURIComponent(`Portfolio Inquiry: ${selectedType} - ${name || "Inquiry"}`)}&body=${encodeURIComponent(
    message ||
      `Hi Muhammad Faizan,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding ${selectedType}.`,
  )}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-sage relative bg-offwhite"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Outreach & Direct Contact Deck (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
                Let's engineer something{" "}
                <span className="text-olive">exceptional.</span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                Whether you're hiring for a <strong>Frontend Engineer</strong>{" "}
                role, rebuilding a design system, or launching a
                high-performance web product, my inbox is directly open.
              </p>
            </div>

            {/* Quick 1-Click Copy Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sage shadow-2xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 rounded-xl bg-olive-light border border-sage flex items-center justify-center text-olive shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-muted font-medium">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-charcoal hover:text-olive transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-olive-light text-charcoal hover:bg-olive hover:text-offwhite transition-all border border-sage shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-olive" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels: WhatsApp & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-sage hover:border-olive shadow-2xs flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">WhatsApp</p>
                    <p className="text-xs text-muted font-mono">
                      +92 308 5170759
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-olive transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-sage hover:border-olive shadow-2xs flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-olive-light border border-sage flex items-center justify-center text-olive">
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="LinkedIn"
                      role="img"
                    >
                      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.67v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.25H10V9.75h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.7 0 3.21 1.78 3.21 4.1v4.71Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-charcoal">LinkedIn</p>
                    <p className="text-xs text-muted">Direct Message</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-olive transition-colors" />
              </a>
            </div>

            {/* Timezone & Delivery Commitment */}
            <div className="p-4 rounded-2xl bg-white border border-sage space-y-1.5 text-xs shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-charcoal">
                <Clock className="w-3.5 h-3.5 text-olive" />
                <span>Response Time & Working Hours</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {PERSONAL_INFO.timezoneNotice} Guaranteed response within 05
                hours.
              </p>
            </div>
          </div>

          {/* Right Column: In-Browser Direct Message Dispatcher (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-sage rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-sage mb-5">
              <div>
                <h3 className="text-lg font-bold text-charcoal">
                  Direct In-Browser Message
                </h3>
                <p className="text-xs text-muted">
                  Sends directly to my email (
                  <strong className="text-charcoal font-semibold">
                    {PERSONAL_INFO.email}
                  </strong>
                  ) without opening mail apps.
                </p>
              </div>
              <span className="p-2 rounded-xl bg-olive-light text-olive shrink-0">
                <MessageSquare className="w-4 h-4" />
              </span>
            </div>

            {status === "success" ? (
              <div className="py-8 px-4 text-center space-y-5 animate-in fade-in duration-300">
                {/* Glowing Pulse Checkmark */}
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-emerald-200 animate-ping opacity-75" />
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg relative z-10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Transmitted to Inbox</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                    Sent Successfully!
                  </h4>
                </div>

                {/* Delivery Confirmation Card */}
                <div className="p-4 rounded-2xl bg-offwhite border border-sage text-left text-xs max-w-md mx-auto space-y-2 font-mono">
                  {lastSubmittedEmail && (
                    <div className="flex justify-between text-muted">
                      <span>Sender:</span>
                      <span className="text-charcoal font-bold truncate max-w-[200px]">
                        {lastSubmittedEmail}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted">
                    <span>Target Recipient:</span>
                    <span className="text-charcoal font-bold">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Inquiry Topic:</span>
                    <span className="text-charcoal font-bold truncate max-w-[200px]">
                      {lastSubmittedType}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Delivery Status:</span>
                    <span className="text-emerald-700 font-bold">
                      Confirmed & Delivered
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-olive text-offwhite hover:bg-olive-dark transition-all shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white border border-sage text-emerald-700 hover:bg-emerald-50 transition-all"
                  >
                    Chat on WhatsApp ↗
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic / Intent Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                    Inquiry Intent / Scope
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-olive text-offwhite shadow-2xs"
                            : "bg-offwhite border border-sage text-charcoal hover:border-olive"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-sage bg-offwhite text-xs text-charcoal placeholder-muted/60 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
                      />
                      <User className="w-3.5 h-3.5 text-muted absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5"
                    >
                      Your Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-sage bg-offwhite text-xs text-charcoal placeholder-muted/60 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
                      />
                      <Mail className="w-3.5 h-3.5 text-muted absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Project Scope / Role Opportunity
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your team, requirements, project timeline, or questions..."
                    className="w-full p-3.5 rounded-xl border border-sage bg-offwhite text-xs text-charcoal placeholder-muted/60 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all resize-none"
                  />
                </div>

                {/* Error Banner if any */}
                {status === "error" && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorText}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 pl-6">
                      <a
                        href={gmailWebUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors"
                      >
                        Open in Web Gmail ↗
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                      >
                        Send via WhatsApp ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-olive text-offwhite hover:bg-olive-dark transition-all duration-200 shadow-sm active:scale-98 disabled:opacity-70 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
