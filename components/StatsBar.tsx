import { useState, useEffect } from "react";

// Event date: 29 July 2026 09:00 BST (UTC+1)
const EVENT_DATE = new Date("2026-07-29T09:00:00+01:00");

function useCountdown() {
  const calc = () => {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, started: true };
    return {
      days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
      started: false,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function StatsBar() {
  const { days, started } = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="mt-10 rounded-2xl p-6"
      style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(0,0,0,0.07)" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        
        {[
          { value: "2", label: "Conference days" },
          { value: "£12", label: "Per day (incl. lunch)" },
          { value: "5", label: "Partner organisations" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display font-black text-3xl text-[#29abe2]">{s.value}</div>
            <div className="font-body text-xs text-[#7a6a50] mt-1 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}

        <div
          className="text-center"
          key={"Event countdown"}
        >
          {started ? (
            <>
              <div className="font-display font-black text-2xl text-[#29abe2]">It&apos;s on!</div>
              <div className="font-body text-xs text-[#7a6a50] mt-1 uppercase tracking-wide">Conference started</div>
            </>
          ) : (
            <>
              <div className="font-display font-black text-[#29abe2] tabular-nums leading-none"
                   style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)" }}>
                {days}<span className="text-[#7a6a50] font-body font-normal text-xs">{days === 1 ? ' day' : ' days'}</span>
              </div>
              <div className="font-body text-xs text-[#7a6a50] mt-1.5 uppercase tracking-wide">Until the conference</div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}