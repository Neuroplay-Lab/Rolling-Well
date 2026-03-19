import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Registration", href: "#registration" },
    { label: "Speakers & Schedule", href: "#speakers" },
    { label: "Organisers", href: "#organisers" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ background: "#1a1208", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="Rolling Well"
              width={160}
              height={70}
              className="h-14 w-auto object-contain -left-3 relative"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="font-body text-sm leading-relaxed mb-2" style={{ color: "#8a7a60" }}>
              Gaming for Health and Wellbeing<br />
              29–30 July 2026, Tunbridge Wells
            </p>
            <p className="font-body text-xs" style={{ color: "#6a5a40" }}>
              Supported by{" "}
              <a href="https://www.game-in-lab.org/en/310-2/" target="_blank" className="text-[#29abe2] hover:text-white transition-colors">Game in Lab</a>
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6a5a40" }}>Navigate</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm hover:text-white transition-colors" style={{ color: "#8a7a60" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6a5a40" }}>Contact</p>
            <a href="mailto:event@rollingwell.org.uk" className="font-body text-sm text-[#29abe2] hover:text-white transition-colors block mb-2">
              event@rollingwell.org.uk
            </a>
            <a href="https://rollingwell.org.uk" className="font-body text-sm hover:text-white transition-colors block mb-6" style={{ color: "#8a7a60" }}>
              rollingwell.org.uk
            </a>
            <a href="#registration" className="btn-primary !text-sm">
              Register Now
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="font-body text-xs" style={{ color: "#4a3a28" }}>© 2026 Rolling Well Conference. All rights reserved.</p>
          <p className="font-body text-xs" style={{ color: "#4a3a28" }}>University of Plymouth · Manchester Metropolitan University</p>
        </div>
      </div>
    </footer>
  );
}
