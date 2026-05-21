"use client";
import { useEffect, useRef, useState } from "react";
import { sessionData, Session, Speaker, Sponsor } from "./SessionData";

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<
  Session["type"],
  { label: string; icon: string; colour: string; bg: string; border: string }
> = {
  talk: {
    label: "Talk",
    icon: "🎤",
    colour: "#29abe2",
    bg: "rgba(41,171,226,0.10)",
    border: "rgba(41,171,226,0.25)",
  },
  workshop: {
    label: "Workshop",
    icon: "🛠️",
    colour: "#e8731a",
    bg: "rgba(232,115,26,0.10)",
    border: "rgba(232,115,26,0.28)",
  },
  panel: {
    label: "Panel",
    icon: "💬",
    colour: "#6a5a40",
    bg: "rgba(106,90,64,0.10)",
    border: "rgba(106,90,64,0.28)",
  },
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SpeakerBio({ speaker }: { speaker: Speaker }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`w-fit ${speaker.bio ? "col-span-2 -order-1" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 font-body text-xs font-semibold ${speaker.bio ? "hover:underline" : ""} transition-colors`}
        style={{ color: "#29abe2" }}
        disabled={!speaker.bio}
      >
        {speaker.name}
        {speaker.bio && (
          <svg
            className="w-3 h-3 transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <p className="font-body text-xs" style={{ color: "#7a6a50" }}>
        {speaker.affiliation}
      </p>
      {open && (
        <p
          className="font-body text-xs leading-relaxed mt-2 pt-2"
          style={{ color: "#5a4a30", borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          {speaker.bio}
        </p>
      )}
    </div>
  );
}

function SponsorLink({ sponsor }: { sponsor: Sponsor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`w-fit`}>
      <a
        href={sponsor.url}
        className={`flex items-center gap-1.5 font-body ml-2 text-sm font-semibold hover:underline transition-colors`}
        style={{ color: "#29abe2" }}
      >
        {sponsor.name}
      </a>
    </div>
  );
}

function SessionCard({ session, index }: { session: Session; index: number }) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const cfg = TYPE_CONFIG[session.type];

  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1} rw-card p-6 flex flex-col gap-4`}
      style={{ background: "rgba(255,255,255,0.7)" }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {/* Type badge */}
          <span
            className="inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
            style={{
              background: cfg.bg,
              border: `1px solid ${cfg.border}`,
              color: cfg.colour,
            }}
          >
            <span>{cfg.icon}</span>
            {cfg.label}
          </span>
          {/* Theme badge */}
          {session.theme && (
            <span
              className="inline-flex items-center font-body text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(106,90,64,0.08)", color: "#7a6a50" }}
            >
              {session.theme}
            </span>
          )}
        </div>
        {session.duration && (
          <span
            className="font-body text-xs shrink-0"
            style={{ color: "#a89878" }}
          >
            {session.duration}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="font-display font-black text-base leading-snug"
        style={{ color: "#1a1a1a" }}
      >
        {session.title}
      </h3>

      {/* Speakers */}
      {session.speakers && (
        <div
          className={`${session.speakers.length > 4 ? "grid grid-cols-2" : "flex flex-col"} gap-3`}
        >
          {session.speakers.map((s) => (
            <SpeakerBio key={s.name} speaker={s} />
          ))}
        </div>
      )}

      {/* Sponsors */}
      {session.sponsors && (
        <div>
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-[#e8731a] mb-2">Sponsored by:</h4>
          <div
            className={`${session.sponsors.length > 4 ? "grid grid-cols-2" : "flex flex-col"} gap-3`}
          >
            {session.sponsors.map((s) => (
              <SponsorLink key={s.name} sponsor={s} />
            ))}
          </div>
        </div>)}

      {/* Abstract toggle */}
      {session.abstract && (
        <div>
          <button
            onClick={() => setAbstractOpen(!abstractOpen)}
            className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide transition-colors"
            style={{ color: abstractOpen ? "#1a8fc2" : "#7a6a50" }}
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200"
              style={{
                transform: abstractOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {abstractOpen ? "Hide abstract" : "Read abstract"}
          </button>
          {abstractOpen && (
            <p
              className="font-body text-sm leading-relaxed mt-3 pt-3"
              style={{
                color: "#4a4030",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              {session.abstract}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

type Filter = "all" | Session["type"];

export default function Speakers() {
  const ref = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.06 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]); // re-run when filter changes so newly rendered cards get observed

  const filtered =
    filter === "all" ? sessionData : sessionData.filter((s) => s.type === filter);

  const counts = {
    all: sessionData.length,
    talk: sessionData.filter((s) => s.type === "talk").length,
    workshop: sessionData.filter((s) => s.type === "workshop").length,
    panel: sessionData.filter((s) => s.type === "panel").length,
  };

  const filters: { key: Filter; label: string; icon: string }[] = [
    { key: "all", label: "All sessions", icon: "🎲" },
    { key: "talk", label: "Talks", icon: "🎤" },
    { key: "workshop", label: "Workshops", icon: "🛠️" },
    { key: "panel", label: "Panels", icon: "💬" },
  ];

  return (
    <section
      id="speakers"
      ref={ref}
      className="py-24 px-6 topo-bg"
      style={{ background: "#f5efe0" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-label reveal mb-5">Speakers &amp; Schedule</div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2
            className="reveal reveal-delay-1 font-display font-black"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              color: "#1a1a1a",
            }}
          >
            Programme
            <br />
            <span style={{ color: "#29abe2" }}>2026.</span>
          </h2>
          <p
            className="reveal reveal-delay-2 font-body text-sm max-w-md leading-relaxed"
            style={{ color: "#5a4a30" }}
          >
            Click any speaker name to read their bio, or expand the abstract to
            learn more about each session.
          </p>
        </div>

        {/* Filter bar */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {filters.map(({ key, label, icon }) => {
            const count = counts[key];
            const active = filter === key;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`group inline-flex items-center gap-1.5 font-body text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:text-white hover:bg-[#e8731a] ${ active ? "bg-[#29abe2] text-white border border-[#29abe2]" : "bg-white/70 text-[#5a4a30] border border-black/10"}`}
                style={{
                  boxShadow: active
                    ? "0 2px 8px rgba(41,171,226,0.25)"
                    : "none",
                }}
              >
                <span>{icon}</span>
                {label}
                <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold group-hover:bg-white/25 group-hover:text-white ${active ? "bg-white/25 text-white" : "bg-[#29abe2]/12 text-[#29abe2]"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Session grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((session, i) => (
            <SessionCard
              key={`${session.type}-${session.title}`}
              session={session}
              index={i}
            />
          ))}
        </div>

        {/* More to come notice */}
        {/* <div
          className="reveal mt-8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ border: "1px solid rgba(232,115,26,0.3)", background: "rgba(232,115,26,0.07)" }}
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#e8731a] animate-pulse shrink-0" />
            <p className="font-body text-sm leading-relaxed" style={{ color: "#5a4a30" }}>
              <strong style={{ color: "#1a1a1a" }}>More sessions to be announced.</strong> The full programme will be published in May 2026. Interested in presenting or running a workshop?
            </p>
          </div>
          <a
            href="mailto:event@rollingwell.org.uk?subject=Interest in presenting at Rolling Well 2026"
            className="btn-primary !text-sm shrink-0 whitespace-nowrap"
          >
            Get in touch →
          </a>
        </div> */}
      </div>
    </section>
  );
}
