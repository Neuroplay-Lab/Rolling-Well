"use client";
import { useEffect, useRef } from "react";
import Partners from "./Partners";

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
          <div className="lg:row-span-2">
            <div className="section-label reveal mb-5">About the Conference</div>
            <h2
              className="reveal reveal-delay-1 font-display font-black mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}
            >
              Rolling Well Conference<br />
              <span style={{ color: "#29abe2" }}>2026</span>
            </h2>
            <div className="space-y-4">
              {[
                "Hosted by the University of Plymouth, Manchester Metropolitan University and The Amelia Scott Centre, and funded by Game in Lab, Rolling Well is a two-day conference bringing together practitioners, researchers, clinicians and community organisers to explore how tabletop role-playing games can support wellbeing, creativity and social connection.",
                "While the primary function of tabletop roleplaying games [TTRPGs] is to provide entertainment and engagement, there is growing interest amongst members of the educational and therapeutic communities to expand its offerings to those who may benefit cognitively and emotionally from roleplay.",
                "Despite this growing interest in using TTRPGs for educational and therapeutic purposes, there is limited information about how they can be used in such settings. Sardon and Devlin-Scherer (2016), for instance, discuss the ways in which game-based curriculums could be beneficial in educational settings while also noting how there may be resistance from educators who may not see them as pertinent or worth the extra time and cost for implementation. Similarly, a scoping review on TTRPGs for therapeutic purposes (Yuliawati et al., 2024) showed that while there were numerous qualitative studies on the mental health benefits of TTRPGs, there was a distinct lack of controlled studies detailing its effects. In line with this, Ben-Ezra et al., (2018) found that while many mental health practitioners were interested in incorporating TTRPGs into their formal practice, they did not feel confident in their ability to learn ways to do this effectively.  As such, while TTRPGs show great promise for improving outcomes for students and those in therapy, there is a gap in how to collate and disseminate best practice in tangible, easily adoptable ways.",
                "At Rolling Well we aim to tackle these questions and begin to close evidence gaps. Therefore, we welcome proposals from academics, practitioners and game designers that address (but are not limited to) the following themes:",
              ].map((p, i) => (
                <p key={i} className={`reveal reveal-delay-${i + 1} font-body text-base leading-relaxed`} style={{ color: "#3d3020" }}>
                  {p}
                </p>
              ))}
              <ul className="list-disc list-outside pl-5">
                {[
                  "RPGs and social connection",
                  "RPG design for wellbeing.",
                  "Therapeutic applications of roleplaying games, including their use in mental health, social work, or community practice.",
                  "Wellbeing in RPG communities.",
                  "RPGs in educational settings",
                  "RPGs and neurodivergence",
                  "RPGs and identity exploration",
                ].map((p, i) => (
                  <li key={i} className={`reveal reveal-delay-${i + 1} font-body text-base leading-relaxed`} style={{ color: "#3d3020" }}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Event quick-info card */}
          <div className="reveal reveal-delay-2 space-y-4 mt-8">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "2px solid rgba(41,171,226,0.25)", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)" }}
            >
              <div style={{ background: "#29abe2" }} className="px-6 py-4 flex items-center justify-between">
                <span className="font-display font-black text-white text-lg">Event at a Glance</span>
                <span className="text-white text-xl">🎲</span>
              </div>
              <div className="p-6 space-y-6">
                {[
                  { label: "Dates", value: "29–30 July 2026 (Wed–Thu)", icon: "📅" },
                  { label: "Venue", value: "The Amelia Scott, Royal Tunbridge Wells", icon: "📍" },
                  { label: "Fee", value: "£12 per day — lunch & refreshments included", icon: "🎟️" },
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
              {/* TODO: Uncomment when registration opens */}
              {/* <div className="px-6 pb-6">
                <a href="#registration" className="btn-primary block text-center">
                  Register Now
                </a>
              </div> */}
            </div>
          </div>

          {/* Six pillars */}
          <div className="mb-20 lg:col-start-2">
            <div className="reveal mb-6">
              <div className="section-label">What to expect</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-1 gap-4">
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
        </div>

        {/* Partner Orgs */}
      <div className="my-10">
        <div className="reveal mb-6">
          <div className="section-label">Brought to you by</div>
        </div>
        <Partners />
      </div>
      </div>
    </section>
  );
}
