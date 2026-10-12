import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Frontend Engineering Inquiry'
    )}&body=${encodeURIComponent(message || 'Hi Muhammad,\n\nI reviewed your portfolio and would like to discuss a frontend role/project.')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-sage relative bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-light border border-sage text-xs font-semibold text-olive uppercase tracking-wider">
              Get In Touch
            </div>

            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
              Let's engineer something exceptional together.
            </h2>

            <p className="text-base text-muted leading-relaxed">
              Whether you are hiring for a <strong>Senior Frontend / React Engineer</strong> role, rebuilding a design system, or architecting a high-performance web product, my inbox is open.
            </p>

            {/* Quick 1-Click Copy Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-sage shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-olive-light border border-sage flex items-center justify-center text-olive">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-charcoal hover:text-olive transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-olive-light text-charcoal hover:bg-olive hover:text-offwhite transition-all border border-sage"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-olive" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Socials & Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-sage hover:border-olive flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-olive-light flex items-center justify-center text-olive">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">LinkedIn</p>
                    <p className="text-[11px] text-muted">Connect Professionally</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-olive transition-colors" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-xl bg-white border border-sage hover:border-olive flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-olive-light flex items-center justify-center text-olive">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">Phone / WhatsApp</p>
                    <p className="text-[11px] text-muted">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-olive transition-colors" />
              </a>
            </div>

            {/* Availability and Timezone Card */}
            <div className="p-4 rounded-xl bg-olive-light border border-sage space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-charcoal">
                <Clock className="w-4 h-4 text-olive" />
                <span>Asynchronous & Global Timezone Availability</span>
              </div>
              <p className="text-muted leading-relaxed">
                {PERSONAL_INFO.timezoneNotice}
              </p>
            </div>
          </div>

          {/* Right Column: Direct Pre-formatted Email Launcher */}
          <div className="lg:col-span-6 bg-white border border-sage rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-sage mb-6">
              <div>
                <h3 className="text-lg font-bold text-charcoal">Send a Direct Message</h3>
                <p className="text-xs text-muted">
                  Opens directly in your preferred email client with pre-filled context.
                </p>
              </div>
              <span className="p-2 rounded-xl bg-olive-light text-olive">
                <MessageSquare className="w-4 h-4" />
              </span>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Frontend Engineering Role at [Company]"
                  className="w-full px-4 py-3 rounded-xl border border-sage bg-offwhite text-xs text-charcoal placeholder-muted/60 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your tech stack, timeline, project scope, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-sage bg-offwhite text-xs text-charcoal placeholder-muted/60 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-olive text-offwhite hover:bg-olive-dark transition-all duration-200 shadow-sm hover:shadow-md active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Client</span>
                </button>
                <p className="text-[11px] text-muted text-center mt-2.5">
                  No mock backends or fake forms — triggers a real verified transmission to <strong className="text-charcoal">{PERSONAL_INFO.email}</strong>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

