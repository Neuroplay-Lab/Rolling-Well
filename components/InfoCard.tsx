export default function InfoCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1.5px solid rgba(41,171,226,0.25)",
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{ background: "#29abe2" }}
        className="px-6 py-4 flex items-center justify-between"
      >
        <span className="font-display font-black text-white">
          Event at a Glance
        </span>
        <span className="text-white text-lg">🎲</span>
      </div>
      <div className="p-6 space-y-4">
        {[
          { icon: "📅", label: "Dates", value: "29–30 July 2026" },
          {
            icon: "📍",
            label: "Venue",
            value: "The Amelia Scott, Royal Tunbridge Wells",
          },
          {
            icon: "🎟️",
            label: "Fee",
            value: "£12 per day — lunch & refreshments included",
          },
          {
            icon: "👥",
            label: "For",
            value: "Educators, researchers, clinicians & community organisers",
          },
          {
            icon: "✉️",
            label: "Contact",
            value: "event@rollingwell.org.uk",
            isEmail: true,
          },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="text-lg w-7 shrink-0">{item.icon}</span>
            <div>
              <div
                className="font-body text-xs font-semibold uppercase tracking-wide mb-0.5"
                style={{ color: "#7a6a50" }}
              >
                {item.label}
              </div>
              <div
                className="font-body text-sm font-medium"
                style={{ color: "#1a1a1a" }}
              >
                {"isEmail" in item && item.isEmail ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="text-[#29abe2] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
