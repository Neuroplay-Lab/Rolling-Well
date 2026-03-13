"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const pillars = [
    { icon: "🎤", title: "Research Talks", body: "Presentations from academics exploring the evidence base for TTRPGs in therapeutic, educational and community settings." },
    { icon: "📋", title: "Case Studies", body: "Practitioners sharing real-world applications — from NHS settings to neurodiversity support programmes." },
    { icon: "🛠️", title: "Hands-on Workshops", body: "Active sessions designing, playing and reflecting on TTRPG experiences for wellbeing-focused contexts." },
    { icon: "🤝", title: "Networking", body: "Structured opportunities to build partnerships across the UK TTRPG academic and social care communities." },
    { icon: "📖", title: "Delphi Study", body: "Contribute to a peer-reviewed publication and open-access toolkit on best practices in TTRPG wellbeing work." },
    { icon: "🏛️", title: "UKRI Groundwork", body: "Help lay the foundation for a large-scale funding application to advance structured research in this field." },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 topo-bg" style={{ background: "#faf6ee" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="section-label reveal mb-5">About the Conference</div>
            <h2
              className="reveal reveal-delay-1 font-display font-black mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}
            >
              Where research meets<br />
              <span style={{ color: "#29abe2" }}>practice at the table.</span>
            </h2>
            <div className="space-y-4">
              {[
                "Tabletop role-playing games (TTRPGs) are gaining recognition as meaningful tools for supporting wellbeing, social connection, and personal growth. This event brings together practitioners, researchers, and community organisers to explore how TTRPGs can be used effectively in wellbeing-focused contexts.",
                "Join us for a two-day workshop on July 29–30, 2026 where you will engage in talks, case studies, and hands-on activities to share expertise and foster collaboration across the UK TTRPG academic and social care communities.",
                "Participants will contribute to a Delphi study on current benefits, challenges, and best practices — to be published in a peer-reviewed journal alongside an open-access white paper and practical guidance toolkit.",
                "The event will also support preparation of a large-scale UKRI grant application to fund further structured research into TTRPGs' potential to enhance wellbeing, creativity, and social engagement in diverse care settings.",
              ].map((p, i) => (
                <p key={i} className={`reveal reveal-delay-${i + 1} font-body text-base leading-relaxed`} style={{ color: "#3d3020" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Event quick-info card */}
          <div className="reveal reveal-delay-2 space-y-4">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "2px solid rgba(41,171,226,0.25)", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)" }}
            >
              <div style={{ background: "#29abe2" }} className="px-6 py-4 flex items-center justify-between">
                <span className="font-display font-black text-white text-lg">Event at a Glance</span>
                <span className="text-white text-xl">🎲</span>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Dates", value: "29–30 July 2026 (Wed–Thu)", icon: "📅" },
                  { label: "Venue", value: "The Amelia Scott, Royal Tunbridge Wells", icon: "📍" },
                  { label: "Fee", value: "£10 per day — lunch & refreshments included", icon: "🎟️" },
                  { label: "Who", value: "Educators, researchers, clinicians & community organisers", icon: "👥" },
                  { label: "Contact", value: "event@rollingwell.org.uk", icon: "✉️" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg w-7 shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-body text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#7a6a50" }}>{item.label}</div>
                      <div className="font-body text-sm font-medium" style={{ color: "#1a1a1a" }}>
                        {item.label === "Contact" ? (
                          <a href={`mailto:${item.value}`} className="text-[#29abe2] hover:underline">{item.value}</a>
                        ) : item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <a href="#registration" className="btn-primary block text-center">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Six pillars */}
        <div className="reveal mb-6">
          <div className="section-label">What to expect</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${(i % 3) + 1} rw-card p-5`}
            >
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="font-display font-black text-base mb-2" style={{ color: "#1a1a1a" }}>{p.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#6a5a40" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
