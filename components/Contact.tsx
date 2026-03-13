"use client";
import { useEffect, useRef } from "react";

const reasons = [
  { subject: "Registration enquiry", label: "Registration", icon: "🎟️", desc: "Questions about booking or the £10/day fee" },
  { subject: "Abstract submission", label: "Present a Talk", icon: "🎤", desc: "Propose a research or applied presentation" },
  { subject: "Workshop proposal", label: "Run a Workshop", icon: "🛠️", desc: "Pitch a hands-on or interactive session" },
  { subject: "Partnership enquiry", label: "Partnership", icon: "🤝", desc: "Organisations interested in supporting the event" },
  { subject: "Accessibility enquiry", label: "Accessibility", icon: "♿", desc: "Access, support or accommodation questions" },
  { subject: "General enquiry", label: "General", icon: "💬", desc: "Anything else related to Rolling Well" },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-24 px-6 topo-bg" style={{ background: "#f5efe0" }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-label reveal mb-5">Contact</div>
        <h2 className="reveal reveal-delay-1 font-display font-black mb-4"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}>
          We&apos;d love to hear<br />
          <span style={{ color: "#29abe2" }}>from you.</span>
        </h2>
        <p className="reveal reveal-delay-2 font-body text-base max-w-xl mb-12 leading-relaxed" style={{ color: "#5a4a30" }}>
          Whether you&apos;re a publisher, academic, clinician, educator or simply interested in games for social good — your message is welcome. We aim to respond to all enquiries as promptly as possible.
        </p>

        {/* Primary email */}
        <div
          className="reveal reveal-delay-2 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{ background: "rgba(41,171,226,0.10)", border: "1.5px solid rgba(41,171,226,0.3)" }}
        >
          <div>
            <div className="font-body text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#29abe2" }}>Primary contact</div>
            <a href="mailto:event@rollingwell.org.uk"
              className="font-display font-black text-2xl hover:text-[#29abe2] transition-colors"
              style={{ color: "#1a1a1a" }}>
              event@rollingwell.org.uk
            </a>
          </div>
          <a href="mailto:event@rollingwell.org.uk" className="btn-primary shrink-0 !text-sm">
            Send email
          </a>
        </div>

        {/* Topic grid */}
        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#7a6a50" }}>Get in touch about…</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {reasons.map((r, i) => (
            <a
              key={r.label}
              href={`mailto:event@rollingwell.org.uk?subject=${encodeURIComponent(r.subject)}`}
              className={`reveal reveal-delay-${(i % 3) + 1} rw-card p-4 flex flex-col gap-2`}
            >
              <span className="text-xl">{r.icon}</span>
              <span className="font-display font-black text-sm" style={{ color: "#1a1a1a" }}>{r.label}</span>
              <span className="font-body text-xs leading-relaxed" style={{ color: "#6a5a40" }}>{r.desc}</span>
            </a>
          ))}
        </div>

        {/* Taglines */}
        <div className="reveal reveal-delay-3 grid md:grid-cols-2 gap-4">
          {[
            "Join a network of passionate individuals dedicated to using tabletop games for positive change.",
            "Your questions and insights can shape the future of our community initiatives.",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <svg className="w-4 h-4 shrink-0 text-[#29abe2] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#5a4a30" }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
