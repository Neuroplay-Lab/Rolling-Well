"use client";
import Image from "next/image";

interface CornerArrowsProps {
  rotation?: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}
function CornerArrows({rotation = "0deg", top, left, bottom, right} : CornerArrowsProps) {
  // default rotation is for arrows facing right and down
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: top, left: left, bottom: bottom, right: right, pointerEvents: "none", rotate: rotation}}>
      {/* Arrow pointing RIGHT (primary) */}
      <line x1="4" y1="14" x2="35" y2="14" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="28,8 35,14 28,20" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing RIGHT (secondary, offset) */}
      <line x1="4" y1="14" x2="50" y2="14" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="43,8 50,14 43,20" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
      {/* Arrow pointing DOWN (primary) */}
      <line x1="14" y1="4" x2="14" y2="35" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round"/>
      <polyline points="8,28 14,35 20,28" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arrow pointing DOWN (secondary, offset) */}
      <line x1="14" y1="4" x2="14" y2="50" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"/>
      <polyline points="8,43 14,50 20,43" fill="none" stroke="#e8731a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden topo-bg p-12"
    >
      {/* Corner decorations — absolutely positioned, zero layout impact */}
      <CornerArrows top={16} left={16}/>
      <CornerArrows top={16} right={16} rotation="90deg"/>
      <CornerArrows bottom={16} left={16} rotation="-90deg"/>
      <CornerArrows bottom={16} right={16} rotation="180deg"/>

      {/* Dashed border frame */}
      <div style={{
        position: "absolute",
        inset: 14,
        border: "1px dashed rgba(232,115,26,0.18)",
        borderRadius: 4,
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* ── HERO BANNER IMAGE — full width, tall ── */}
      <div className="relative w-full max-w-screen-xl mx-auto" style={{ zIndex: 2 }}>
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
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 pb-2">
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
            <div style={{ background: "#29abe2" }} className="px-6 py-4 flex items-center justify-between">
              <span className="font-display font-black text-white">Event at a Glance</span>
              <span className="text-white text-lg">🎲</span>
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
