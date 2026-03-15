"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { abbr: "UoP", name: "University of Plymouth", img: "/university-of-plymouth-vector-logo.webp" },
  { abbr: "MGC", name: "Manchester Game Centre", img: "/manc-game-centre.webp" },
  { abbr: "GiL", name: "Game in Lab", img: "/GameInLab.webp" },
  { abbr: "TAS", name: "The Amelia Scott", img: "/the-amelia.webp" },
  { abbr: "MMU", name: "Manchester Metropolitan University", img: "/Manchester-Metropolitan-University-logo-1.webp" },
];

export default function Partners() {
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
    <div ref={ref}>
        <div className="reveal rw-card p-8" style={{ background: "rgba(255,255,255,0.55)" }}>
          <p className="font-body text-xs font-bold uppercase tracking-widest text-center mb-7" style={{ color: "#7a6a50" }}>Partner Organisations</p>
          <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
            {partners.map((p) => (
                <div className="shrink" key={p.name}>
                    <Image
                        src={p.img}
                        alt={p.name}
                        width={1200}
                        height={400}
                        className="w-auto h-24 object-contain rounded-xl transition-all hover:scale-105"
                    />
                </div>
            ))}
          </div>
          <p className="font-body text-xs text-center mt-7" style={{ color: "#7a6a50" }}>
            This workshop has been made possible by the generous support of{" "}
            <strong style={{ color: "#1a1a1a" }}>Game in Lab</strong>, an international research initiative dedicated to advancing rigorous, multidisciplinary study of games and play.
          </p>
        </div>
    </div>
  );
}
