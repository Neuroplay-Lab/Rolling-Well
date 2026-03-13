"use client";
import Image from "next/image";

// Each corner is a fully hand-drawn SVG — no CSS transforms at all.
// TL = arrows pointing RIGHT and DOWN
// TR = arrows pointing LEFT and DOWN  
// BL = arrows pointing RIGHT and UP
// BR = arrows pointing LEFT and UP
function CornerTL() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 16, left: 16, pointerEvents: "none" }}>
      {/* Arrow pointing RIGHT (primary) */}
      <line x1="4" y1="14" x2="30" y2="14" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="23,8 30,14 23,20" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing RIGHT (secondary, offset) */}
      <line x1="4" y1="22" x2="30" y2="22" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="23,16 30,22 23,28" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
      {/* Arrow pointing DOWN (primary) */}
      <line x1="14" y1="4" x2="14" y2="30" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="8,23 14,30 20,23" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing DOWN (secondary, offset) */}
      <line x1="22" y1="4" x2="22" y2="30" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="16,23 22,30 28,23" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
    </svg>
  );
}

function CornerTR() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 16, right: 16, pointerEvents: "none" }}>
      {/* Arrow pointing LEFT (primary) */}
      <line x1="52" y1="14" x2="26" y2="14" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="33,8 26,14 33,20" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing LEFT (secondary) */}
      <line x1="52" y1="22" x2="26" y2="22" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="33,16 26,22 33,28" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
      {/* Arrow pointing DOWN (primary) */}
      <line x1="42" y1="4" x2="42" y2="30" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="36,23 42,30 48,23" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing DOWN (secondary) */}
      <line x1="34" y1="4" x2="34" y2="30" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="28,23 34,30 40,23" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
    </svg>
  );
}

function CornerBL() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", bottom: 16, left: 16, pointerEvents: "none" }}>
      {/* Arrow pointing RIGHT (primary) */}
      <line x1="4" y1="42" x2="30" y2="42" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="23,36 30,42 23,48" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing RIGHT (secondary) */}
      <line x1="4" y1="34" x2="30" y2="34" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="23,28 30,34 23,40" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
      {/* Arrow pointing UP (primary) */}
      <line x1="14" y1="52" x2="14" y2="26" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="8,33 14,26 20,33" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing UP (secondary) */}
      <line x1="22" y1="52" x2="22" y2="26" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="16,33 22,26 28,33" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
    </svg>
  );
}

function CornerBR() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", bottom: 16, right: 16, pointerEvents: "none" }}>
      {/* Arrow pointing LEFT (primary) */}
      <line x1="52" y1="42" x2="26" y2="42" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="33,36 26,42 33,48" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing LEFT (secondary) */}
      <line x1="52" y1="34" x2="26" y2="34" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="33,28 26,34 33,40" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
      {/* Arrow pointing UP (primary) */}
      <line x1="42" y1="52" x2="42" y2="26" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="36,33 42,26 48,33" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing UP (secondary) */}
      <line x1="34" y1="52" x2="34" y2="26" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="28,33 34,26 40,33" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden topo-bg"
      style={{ paddingTop: "72px" }}
    >
      {/* Corner decorations — absolutely positioned, zero layout impact */}
      <CornerTL />
      <CornerTR />
      <CornerBL />
      <CornerBR />

      {/* Dashed border frame */}
      <div style={{
        position: "absolute", inset: 16,
        border: "1px dashed rgba(232,115,26,0.18)",
        borderRadius: 4,
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* ── HERO BANNER IMAGE — full width, tall ── */}
      <div className="relative w-full" style={{ zIndex: 2 }}>
        <Image
          src="/banner.png"
          alt="Rolling Well — Gaming for Health and Wellbeing"
          width={1200}
          height={400}
          className="w-full object-cover"
          style={{ maxHeight: "480px", objectPosition: "center" }}
          priority
        />
      </div>

      {/* ── TEXT + INFO below the image ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-14">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: intro text */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-body font-semibold"
              style={{ background: "rgba(41,171,226,0.12)", border: "1px solid rgba(41,171,226,0.3)", color: "#1a8fc2" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#29abe2] animate-pulse" />
              29–30 July 2026 · Tunbridge Wells
            </div>

            <h1 className="font-display font-black mb-3" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", lineHeight: 1.1, color: "#1a1a1a" }}>
              Gaming for Health<br />and Wellbeing
            </h1>

            <p className="font-body text-base leading-relaxed mb-7 max-w-lg" style={{ color: "#4a4030" }}>
              A two-day conference bringing together practitioners, researchers, clinicians and community organisers to explore how tabletop role-playing games can support wellbeing, creativity and social connection.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#registration" className="btn-primary">
                Register Now — £10/day
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#about" className="btn-outline">Learn more</a>
            </div>
          </div>

          {/* Right: key info card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(41,171,226,0.25)", background: "rgba(255,255,255,0.65)", backdropFilter: "blur(8px)" }}
          >
            <div style={{ background: "#29abe2" }} className="px-6 py-3.5">
              <span className="font-display font-black text-white">Event at a Glance</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { icon: "📅", label: "Dates", value: "29–30 July 2026" },
                { icon: "📍", label: "Venue", value: "The Amelia Scott, Royal Tunbridge Wells" },
                { icon: "🎟️", label: "Fee", value: "£10 per day — lunch & refreshments included" },
                { icon: "👥", label: "For", value: "Educators, researchers, clinicians & community organisers" },
                { icon: "✉️", label: "Contact", value: "event@rollingwell.org.uk", isEmail: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg w-7 shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-body text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#7a6a50" }}>{item.label}</div>
                    <div className="font-body text-sm font-medium" style={{ color: "#1a1a1a" }}>
                      {"isEmail" in item && item.isEmail
                        ? <a href={`mailto:${item.value}`} className="text-[#29abe2] hover:underline">{item.value}</a>
                        : item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          {[
            { value: "2", label: "Conference days" },
            { value: "£10", label: "Per day (incl. lunch)" },
            { value: "4", label: "Lead organisers" },
            { value: "5", label: "Partner organisations" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-black text-3xl text-[#29abe2]">{s.value}</div>
              <div className="font-body text-xs text-[#7a6a50] mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
