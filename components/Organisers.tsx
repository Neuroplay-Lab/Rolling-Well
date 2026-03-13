"use client";
import { useEffect, useRef } from "react";

const mainOrganisers = [
  {
    initials: "GA", name: "Dr Gray Atherton", role: "Assistant Professor in Psychology", institution: "University of Plymouth",
    bio: "Gray's research explores how games, play, and embodied interaction can be used to understand social cognition, especially among neurodivergent individuals. Their work investigates the intersection of games and neurodiversity — particularly autism — and how games can bolster skills and social interaction. Published in Autism, JADD, The American Journal of Play, and Simulation and Gaming. Keynotes at Essen Spiel, UK Games Expo, Airecon and the NHS.",
    link: "https://www.neuroplaylab.com",
  },
  {
    initials: "LC", name: "Dr Liam Cross", role: "Assistant Professor in Psychology", institution: "University of Plymouth",
    bio: "Liam co-leads the Neuroplay Lab alongside Dr Atherton, researching how gamified and playful approaches can support therapeutic and educational processes. They have been commissioned to produce reviews of gamification for autism interventions for the French Institute for Applied Disability Research, and co-designed an accessible version of Dixit for Asmodee's Access Plus disability-friendly games line.",
    link: "https://www.neuroplaylab.com",
  },
  {
    initials: "CG", name: "Dr Chloé Germaine", role: "Reader, Department of English", institution: "Manchester Metropolitan University",
    bio: "Chloé is a game designer, RPG writer, and academic. Her RPG credits include co-authoring The Cthulhu Hack: Mother's Love and contributing to The Between: Season 3. She is developing Rooted in Crisis, an eco-horror tabletop anthology built with climate scientists as a space for processing environmental grief. She co-authored Material Game Studies: A Philosophy of Analogue Play (Bloomsbury, 2022) and co-directs the Manchester Game Centre.",
    link: null,
  },
  {
    initials: "PW", name: "Professor Paul Wake", role: "Professor of Game Studies", institution: "Manchester Metropolitan University",
    bio: "Paul is Professor of Game Studies at Manchester Metropolitan University and co-director of the Manchester Game Centre. His research interests include game-making as a research method, games and communication, and game theory in literary texts. Recent work includes Carbon City Zero: World Edition (with climate charity Possible) and a global warming scenario for Catan. Current project: Death Occurs Abroad, an archive-building game set during WWII.",
    link: null,
  },
];

const venueOrganisers = [
  {
    initials: "DH", name: "Daniel Huckfield", role: "Creative Health Projects Officer", institution: "The Amelia Scott, Tunbridge Wells",
    bio: "Daniel has developed a successful, creative and engaging programme over three and a half years, exploring museum objects, creative writing, exhibition writing, and Dungeons & Dragons for wellbeing and mental health. With over seven years in wellbeing and creative health interventions, he brings lived experience of mental health struggles to his facilitation work, focusing on social isolation and neurodivergent individuals.",
  },
  {
    initials: "JK", name: "Jeremy Kimmel", role: "Arts, Heritage & Engagement Director", institution: "The Amelia Scott, Tunbridge Wells",
    bio: "A disruptive collaborator with a passion for improving places and strengthening communities, Jeremy's work sits at the crossroads of culture, health, engagement and strategy. At The Amelia Scott he leads a complex, multi-service operation: building partnerships, securing funding, and shaping programmes that support wellbeing, learning and a stronger sense of place. Currently part of the Solace Springboard programme.",
  },
];

const partners = [
  { abbr: "UoP", name: "University of Plymouth" },
  { abbr: "MGC", name: "Manchester Game Centre" },
  { abbr: "GiL", name: "Game in Lab" },
  { abbr: "TAS", name: "The Amelia Scott" },
  { abbr: "MMU", name: "Manchester Metropolitan University" },
];

type OrgType = { initials: string; name: string; role: string; institution: string; bio: string; link?: string | null };
function OrgCard({ org, delay = 1 }: { org: OrgType; delay?: number }) {
  return (
    <div className={`reveal reveal-delay-${delay} rw-card p-6`} style={{ background: "rgba(255,255,255,0.65)" }}>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-display font-black text-sm"
        style={{ background: "#29abe2", color: "white" }}
      >
        {org.initials}
      </div>
      <h3 className="font-display font-black text-base" style={{ color: "#1a1a1a" }}>{org.name}</h3>
      <p className="font-body text-sm font-semibold mt-0.5" style={{ color: "#29abe2" }}>{org.role}</p>
      <p className="font-body text-xs font-medium uppercase tracking-wide mb-3" style={{ color: "#7a6a50" }}>{org.institution}</p>
      <p className="font-body text-sm leading-relaxed" style={{ color: "#5a4a30" }}>{org.bio}</p>
      {"link" in org && org.link && (
        <a href={org.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 font-body text-xs font-semibold text-[#29abe2] hover:underline">
          Visit neuroplaylab.com →
        </a>
      )}
    </div>
  );
}

export default function Organisers() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="organisers" ref={ref} className="py-24 px-6 topo-bg" style={{ background: "#eee4c8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label reveal mb-5">Organisers</div>
        <h2 className="reveal reveal-delay-1 font-display font-black mb-4"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}>
          The team behind<br />
          <span style={{ color: "#29abe2" }}>Rolling Well.</span>
        </h2>
        <p className="reveal reveal-delay-2 font-body text-base max-w-2xl mb-12 leading-relaxed" style={{ color: "#5a4a30" }}>
          Drs Gray Atherton and Liam Cross (University of Plymouth) together with Dr Chloé Germaine and Professor Paul Wake (Manchester Metropolitan University) bring this two-day workshop to UK-based professionals.
        </p>

        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#7a6a50" }}>Academic Organisers</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {mainOrganisers.map((o, i) => <OrgCard key={o.name} org={o} delay={(i % 2) + 1} />)}
        </div>

        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#7a6a50" }}>Venue &amp; Programme Team</p>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {venueOrganisers.map((o, i) => <OrgCard key={o.name} org={o} delay={(i % 2) + 1} />)}
        </div>

        {/* Partners */}
        <div className="reveal rw-card p-8" style={{ background: "rgba(255,255,255,0.55)" }}>
          <p className="font-body text-xs font-bold uppercase tracking-widest text-center mb-7" style={{ color: "#7a6a50" }}>Partner Organisations</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 group cursor-default">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-black text-sm transition-all group-hover:scale-105"
                  style={{ background: "rgba(41,171,226,0.12)", border: "1.5px solid rgba(41,171,226,0.25)", color: "#29abe2" }}
                >
                  {p.abbr}
                </div>
                <span className="font-body text-[10px] text-center max-w-[80px] leading-tight" style={{ color: "#7a6a50" }}>{p.name}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-center mt-7" style={{ color: "#7a6a50" }}>
            This workshop has been made possible by the generous support of{" "}
            <strong style={{ color: "#1a1a1a" }}>Game in Lab</strong>, an international research initiative dedicated to advancing rigorous, multidisciplinary study of games and play.
          </p>
        </div>
      </div>
    </section>
  );
}
