"use client";
import { useEffect, useRef } from "react";

const sessionTypes = [
  { icon: "🎤", label: "Keynote Talks", desc: "Leading voices in TTRPG research and applied practice" },
  { icon: "📊", label: "Research Presentations", desc: "Peer-reviewed findings from academic teams across the UK" },
  { icon: "🏥", label: "Applied Case Studies", desc: "Real-world deployments in clinical, community and education settings" },
  { icon: "🎲", label: "Interactive Workshops", desc: "Hands-on sessions — come ready to roll dice and reflect" },
  { icon: "💬", label: "Panel Discussions", desc: "Cross-sector dialogue on challenges and emerging best practices" },
  { icon: "🤝", label: "Networking", desc: "Structured meet-and-greet opportunities to forge new collaborations" },
];

export default function Speakers() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="speakers" ref={ref} className="py-24 px-6 topo-bg" style={{ background: "#f5efe0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label reveal mb-5">Speakers &amp; Schedule</div>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-14">
          <h2
            className="reveal reveal-delay-1 font-display font-black"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}
          >
            Programme announced<br />
            <span style={{ color: "#29abe2" }}>in May 2026.</span>
          </h2>
          <div
            className="reveal reveal-delay-2 rounded-2xl px-5 py-4 max-w-sm"
            style={{ border: "1px solid rgba(232,115,26,0.35)", background: "rgba(232,115,26,0.08)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e8731a] animate-pulse" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#e8731a]">Coming Soon</span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "#5a4a30" }}>
              Full speaker lineup and schedule will be published in May 2026. Email us if you'd like to present or run a workshop.
            </p>
            <a
              href="mailto:event@rollingwell.org.uk?subject=Interest in presenting at Rolling Well 2026"
              className="inline-flex items-center gap-1.5 mt-3 font-body text-sm font-semibold text-[#29abe2] hover:underline"
            >
              Propose a session →
            </a>
          </div>
        </div>

        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#7a6a50" }}>What the programme will include</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessionTypes.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${(i % 3) + 1} rw-card p-5`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-display font-black text-sm mb-1.5" style={{ color: "#1a1a1a" }}>{s.label}</h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: "#6a5a40" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
