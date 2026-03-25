export default function Ticker() {
  const items = [
    "Tabletop RPGs for Wellbeing",
    "Social Connection Through Play",
    "Neurodiversity & Games",
    "Clinical Applications",
    "Delphi Study",
    "Community Practice",
    "Academic Collaboration",
    "Gaming for Health",
    "29–30 July 2026",
    "The Amelia Scott · Tunbridge Wells",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-3.5" style={{ background: "#29abe2" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 flex items-center gap-6 font-display font-black text-sm text-white uppercase tracking-wide"
          >
            {item}
            <span className="text-white/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
