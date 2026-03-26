"use client";
import { useEffect, useRef } from "react";

const formats = [
  {
    icon: "🎤",
    title: "Individual Presentations",
    detail: "Research or practice-based · 20 minutes + Q&A",
  },
  {
    icon: "🛠️",
    title: "Workshops or Creative Contributions",
    detail: "Please specify required length when submitting",
  },
  {
    icon: "🔵",
    title: "Roundtables / Panels",
    detail: "60–90 minutes · 3–5 participants recommended",
  },
];

const timeline = [
  { date: "24 April 2026", label: "Submission deadline", detail: "11:59 PM GMT", icon: "📋" },
  { date: "8 May 2026", label: "Notification of decisions", detail: "Outcomes communicated to all applicants", icon: "📬" },
  { date: "22 May 2026", label: "Speaker registration", detail: "All speakers confirm participation and register", icon: "✅" },
];

export default function Submissions() {
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
    <section id="submissions" ref={ref} className="py-24 px-6 topo-bg">
      <div className="max-w-6xl mx-auto">

        <div className="section-label reveal mb-5">Submit a Contribution</div>
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-14">
          <div>
            <h2
              className="reveal reveal-delay-1 font-display font-black mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}
            >
              You can<br />
              <span style={{ color: "#29abe2" }}>get involved.</span>
            </h2>
            <p className="reveal reveal-delay-2 font-body text-base leading-relaxed mb-6" style={{ color: "#3d3020" }}>
              Submissions can be proposed for the following formats:
            </p>
            <div className="space-y-3 mb-6">
              {formats.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal reveal-delay-${i + 2} flex items-start gap-4 rounded-xl p-4`}
                  style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="font-display font-black text-sm mb-0.5" style={{ color: "#1a1a1a" }}>{f.title}</div>
                    <div className="font-body text-xs" style={{ color: "#7a6a50" }}>{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines card */}
          <div
            className="reveal reveal-delay-2 rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(41,171,226,0.25)", background: "rgba(255,255,255,0.7)" }}
          >
            <div style={{ background: "#29abe2" }} className="px-6 py-4">
              <span className="font-display font-black text-white text-lg">Submission Guidelines</span>
            </div>
            <div className="p-6">
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#3d3020" }}>
                Please provide the following in your submission:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 mb-5">
                {[
                  "A contribution title",
                  "A 300-word summary of your proposed contribution",
                  "A list of presenter names and affiliations",
                  "A 150-word speaker bio for each person presenting",
                  "If proposing a workshop, please include any technical requirements: space needed, access needs, max/min participant numbers, etc",
                ].map((item, i) => (
                  <li key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} font-body text-sm leading-relaxed`} style={{ color: "#3d3020" }}>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-xl p-4 mb-5"
                style={{ background: "rgba(232,115,26,0.08)", border: "1px solid rgba(232,115,26,0.25)" }}
              >
                <p className="font-body text-sm leading-relaxed" style={{ color: "#3d3020" }}>
                  We have limited funds to support participation. Please indicate in your proposal if you require a bursary, what you require, and we will do our best to help.
                </p>
              </div>

              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "#3d3020" }}>
                Please send proposals (PDF or Word) to{" "}
                <a href="mailto:event@rollingwell.org.uk?subject=Proposal" className="text-[#29abe2] hover:underline font-semibold">
                  event@rollingwell.org.uk
                </a>{" "}
                with the subject line <strong style={{ color: "#1a1a1a" }}>"Proposal"</strong>.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:event@rollingwell.org.uk?subject=Proposal"
                  className="btn-primary !text-sm"
                >
                  Submit a proposal →
                </a>
                <a
                  href="/submission-form.docx"
                  download
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold px-4 py-2.5 rounded-lg transition-all inline-flex items-center hover:bg-[#29abe2] hover:text-white"
                  style={{ border: "1.5px solid rgba(41,171,226,0.4)", color: "#29abe2" }}
                >
                  Download proposal template
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal mb-5">
          <div className="section-label">Key dates</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((t, i) => (
            <div
              key={t.label}
              className={`reveal reveal-delay-${i + 1} rw-card p-5 flex items-start gap-4`}
            >
              <span className="text-2xl shrink-0">{t.icon}</span>
              <div>
                <div
                  className="font-display font-black text-base mb-0.5"
                  style={{ color: "#29abe2" }}
                >
                  {t.date}
                </div>
                <div className="font-display font-black text-sm mb-1" style={{ color: "#1a1a1a" }}>{t.label}</div>
                <div className="font-body text-xs leading-relaxed" style={{ color: "#7a6a50" }}>{t.detail}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ---

// 1. The proposal template link — replace `https://rollingwell.org.uk/proposal-template` with wherever that document is actually hosted.

// 2. Add it to `app/page.tsx` with `import Submissions from "@/components/Submissions"` and drop `<Submissions />` into the JSX.

// ---

// **Where it should sit in the page flow:**
// ```
// Hero
// Ticker
// About          ← sets up what the event is
// Submissions    ← natural next step: "want to contribute?"
// Registration   ← then: "want to attend?"
// Speakers       ← coming soon
// Organisers
// Location
// Contact
// Footer