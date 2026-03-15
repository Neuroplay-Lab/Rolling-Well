"use client";
import { useEffect, useRef } from "react";

const transport = [
  { icon: "🚶", mode: "On foot", detail: "Once you’ve arrived at the centre of Royal Tunbridge Wells, The Amelia Scott is fully accessible from all entrances, and the Welcome Hall is most easily accessed from the main entrance on Civic Way." },
  { icon: "🚲", mode: "By cycle", detail: "There are cycle racks located near the building."},
  { icon: "🚂", mode: "By rail", detail: "It is a 7-minute, lightly uphill walk from Tunbridge Wells station to The Amelia Scott. Alternatively, it is 1 stop on a variety of buses. You can ", link: "https://ticket.southeasternrailway.co.uk/search?utm_source=partner_site&utm_medium=outboundURL&utm_campaign=theameliascott", linkText: "book directly with Southeastern to pay no booking fees."},
  { icon: "🚌", mode: "By bus", detail: "Most of the bus services for Royal Tunbridge Wells town centre stop right outside The Amelia Scott at the Tunbridge Wells War Memorial or by Royal Victoria Place shopping centre." },
  { icon: "🚗", mode: "By car", detail: "Parking is available at Crescent Road, Royal Victoria Place and Meadow Road multi-storey car parks." },
];

const VENUE_LAT = 51.13295;
const VENUE_LNG = 0.26385;

function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    // Inject Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Inject Leaflet JS then initialise
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [VENUE_LAT, VENUE_LNG],
        zoom: 16,
        scrollWheelZoom: false,
        zoomControl: true,
      });
      mapRef.current = map;

      // CartoDB Voyager — clean, modern, no API key
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      // Custom branded marker
      const icon = L.divIcon({
        className: "",
        iconSize: [36, 44],
        iconAnchor: [18, 44],
        popupAnchor: [0, -48],
        html: `<svg viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:44px;filter:drop-shadow(0 3px 8px rgba(0,0,0,0.35))">
          <path d="M18 0C8.06 0 0 8.06 0 18c0 12.77 18 26 18 26S36 30.77 36 18C36 8.06 27.94 0 18 0z" fill="#29abe2"/>
          <circle cx="18" cy="18" r="9" fill="white"/>
          <circle cx="18" cy="18" r="5" fill="#29abe2"/>
        </svg>`,
      });

      L.marker([VENUE_LAT, VENUE_LNG], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'Instrument Sans',sans-serif;min-width:190px;padding:6px 4px;">
            <strong style="font-size:14px;color:#1a1a1a;display:block;margin-bottom:5px;">The Amelia Scott</strong>
            <span style="font-size:12px;color:#555;line-height:1.6;">
              Mount Pleasant Road<br/>Royal Tunbridge Wells<br/>Kent, TN1 1AW
            </span>
            <div style="margin-top:10px;display:flex;gap:8px;">
              <a href="https://maps.google.com/?q=The+Amelia+Scott,+Mount+Pleasant+Road,+Royal+Tunbridge+Wells+TN1+1AW"
                 target="_blank"
                 style="font-size:12px;font-weight:600;color:#29abe2;text-decoration:none;">
                Google Maps →
              </a>
            </div>
          </div>`,
          { maxWidth: 280 }
        )
        .openPopup();

      // Re-enable scroll zoom after a map click
      map.on("click", () => map.scrollWheelZoom.enable());
    };
    document.head.appendChild(script);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "420px", background: "#e8e4dc" }}
    />
  );
}

export default function Location() {
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
    <section id="location" ref={ref} className="py-24 px-6 section-dark topo-bg-dark">
      <div className="max-w-6xl mx-auto">

        <div className="section-label reveal mb-5">Location</div>
        <h2
          className="reveal reveal-delay-1 font-display font-black mb-10"
          style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1, color: "#f0e8d0" }}
        >
          The Amelia Scott<br />
          <span style={{ color: "#29abe2" }}>Royal Tunbridge Wells</span>
        </h2>

        {/* ── MAP ── */}
        <div
          className="reveal mb-10 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(41,171,226,0.3)" }}
        >
          {/* Map header */}
          <div
            className="flex items-center justify-between px-5 py-3 gap-4"
            style={{ background: "rgba(41,171,226,0.15)", borderBottom: "1px solid rgba(41,171,226,0.2)" }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="#29abe2" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round"/>
                <circle cx="12" cy="9" r="2.5" fill="#29abe2" stroke="none"/>
              </svg>
              <span className="font-body text-sm font-semibold truncate" style={{ color: "#f0e8d0" }}>
                The Amelia Scott — Mount Pleasant Road, Royal Tunbridge Wells, TN1 1AW
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=The+Amelia+Scott,+Mount+Pleasant+Road,+Royal+Tunbridge+Wells+TN1+1AW"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-semibold shrink-0 hover:text-white transition-colors"
              style={{ color: "#29abe2" }}
            >
              Open in Google Maps →
            </a>
          </div>

          <LeafletMap />
        </div>

        {/* ── VENUE INFO + TRANSPORT ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Venue card */}
          <div className="space-y-5">
            <div
              className="reveal rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(41,171,226,0.25)" }}
            >
              <div style={{ background: "#29abe2" }} className="px-6 py-4">
                <span className="font-display font-black text-white text-lg">Venue Address</span>
              </div>
              <div className="p-6">
                <address className="not-italic font-body leading-relaxed" style={{ color: "#d0c4a0" }}>
                  <strong className="font-display font-black text-lg block mb-1" style={{ color: "#f0e8d0" }}>The Amelia Scott</strong>
                  Mount Pleasant Road<br />
                  Royal Tunbridge Wells<br />
                  Kent, TN1 1AW
                </address>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="font-body text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#8a7a60" }}>Event email</div>
                  <a href="mailto:event@rollingwell.org.uk" className="font-body text-[#29abe2] hover:text-white transition-colors">
                    event@rollingwell.org.uk
                  </a>
                </div>
                <div className="mt-3">
                  <div className="font-body text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#8a7a60" }}>Office hours</div>
                  <span className="font-body text-sm" style={{ color: "#d0c4a0" }}>Monday–Friday, 9am–5pm</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href="https://maps.google.com/?q=The+Amelia+Scott,+Mount+Pleasant+Road,+Royal+Tunbridge+Wells+TN1+1AW"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-primary !text-sm inline-flex"
                  >
                    Google Maps →
                  </a>
                  <a
                    href="https://maps.apple.com/?q=The+Amelia+Scott&address=Mount+Pleasant+Road,+Royal+Tunbridge+Wells,+TN1+1AW"
                    target="_blank" rel="noopener noreferrer"
                    className="font-body text-sm font-semibold px-4 py-2.5 rounded-lg transition-all inline-flex items-center hover:bg-[#29abe2] hover:text-white"
                    style={{ border: "1.5px solid rgba(41,171,226,0.4)", color: "#29abe2" }}
                  >
                    Apple Maps →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="reveal reveal-delay-2 rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="font-display font-black mb-2" style={{ color: "#f0e8d0" }}>About The Amelia Scott</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#a89878" }}>
                The Amelia Scott is in the heart of Royal Tunbridge Wells town centre, and is easy to visit on foot, by cycle, by rail, by bus, and by road.
              </p>
            </div>
          </div>

          {/* Transport */}
          <div>
            <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#8a7a60" }}>
              Getting there
            </p>
            <div className="space-y-3">
              {transport.map((t, i) => (
                <div
                  key={t.mode}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 rounded-xl p-4`}
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-2xl w-9 shrink-0 mt-0.5">{t.icon}</span>
                  <div>
                    <div className="font-display font-black text-sm mb-1" style={{ color: "#f0e8d0" }}>{t.mode}</div>
                    <p className="font-body text-xs leading-relaxed" style={{ color: "#a89878" }}>{t.detail}
                    { t.link && (
                      <a className="underline font-semibold" href={t.link}>{t.linkText}</a>
                    )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
