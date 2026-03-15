"use client";
import { useEffect, useRef } from "react";

export default function Registration() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const days = [
    {
      day: "Day 1", date: "Wednesday 29 July 2026", price: "£10",
      features: ["Day one activities to be confirmed"],
    },
    {
      day: "Day 2", date: "Thursday 30 July 2026", price: "£10",
      features: ["Day two activities to be confirmed"],
    },
  ];

  return (
    <section id="registration" ref={ref} className="py-24 px-6 section-dark topo-bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="section-label reveal mb-5">Register</div>
        <h2
          className="reveal reveal-delay-1 font-display font-black mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1, color: "#f0e8d0" }}
        >
          Secure your place
        </h2>

        {/* <p className="reveal reveal-delay-2 font-body text-base max-w-xl mb-12 leading-relaxed" style={{ color: "#c8b890" }}>
          Registration opens in early April 2026. There is a <strong style={{ color: "#f0e8d0" }}>£10 per day</strong> fee to help support the event — lunch and refreshments are provided throughout both days.
        </p> */}

        {/* Status notice */}
        <div
          className="reveal reveal-delay-4 rounded-2xl p-6 my-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
          style={{ border: "1px solid rgba(232,115,26,0.4)", background: "rgba(232,115,26,0.1)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e8731a] animate-pulse" />
              <span className="font-body text-xs font-bold uppercase tracking-widest" style={{ color: "#e8731a" }}>
                Registration opens April 2026
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "#c8b890" }}>
              Email us to be notified when registration opens, or get in touch if you're interested in presenting or running a workshop.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:event@rollingwell.org.uk?subject=Please notify me when registration opens"
              className="btn-primary !text-sm whitespace-nowrap text-center"
            >
              Notify me
            </a>
            <a
              href="mailto:event@rollingwell.org.uk?subject=Interest in presenting at Rolling Well 2026"
              className="font-body text-sm font-semibold px-5 py-3 rounded-lg text-center whitespace-nowrap transition-colors"
              style={{ border: "1.5px solid rgba(240,224,192,0.3)", color: "#f0e0c0" }}
            >
              Submit a talk
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {days.map((d, i) => (
            <div
              key={d.day}
              className={`reveal reveal-delay-${i + 2} rounded-2xl overflow-hidden`}
              style={{ border: "1px solid rgba(41,171,226,0.3)", background: "rgba(255,255,255,0.06)" }}
            >
              <div style={{ background: "#29abe2" }} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-white text-xl">{d.day}</div>
                  <div className="font-body text-xs text-white/80 font-medium mt-0.5">{d.date}</div>
                </div>
                <div className="font-display font-black text-white text-3xl">{d.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 shrink-0 text-[#29abe2]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-body text-sm" style={{ color: "#d0c4a0" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
