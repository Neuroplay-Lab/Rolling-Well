"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const mainOrganisers = [
  {
    initials: "GA & LC", name: "Dr Gray Atherton & Dr Liam Cross", role: "Assistant Professors in Psychology", institution: "University of Plymouth, UK",
    bio: "Their research explores how games, play, and embodied interaction can be used to understand social cognition, especially among neurodivergent individuals. Their work in this area explores the intersection between games and neurodiversity, particularly autism, and how games can be used to bolster skills and social interaction in this population, as well as ways to gamify therapeutic and educational processes. They also do research on player dynamics and profiles in hobbyist board gamers and have published work in this area in the journals Autism, The Journal of Autism and Developmental Disorders, The American Journal of Play, and Simulation and Gaming. They have been commissioned to produce reviews of gamification for autism interventions for the French Institute for Applied Disability Research, and co-designed an accessible version of the popular game Dixit for Asmodee’s Access Plus line of disability-friendly games. They have given talks and keynotes on these topics at Essen Spiel, Canada Plays, UK Games Expo, Airecon and the NHS.",
    websiteName: "neuroplaylab.com",
    link: "https://www.neuroplaylab.com",
    span2: true,
    img: "/gray-liam-bio.webp",
  },
  {
    initials: "CG", name: "Dr Chloé Germaine", role: "Reader, Department of English", institution: "Manchester Metropolitan University",
    bio: "Dr Chloé Germaine is a game designer, RPG writer, and academic based at Manchester Metropolitan University. Her RPG credits include co-authoring The Cthulhu Hack: Mother’s Love (Just Crunch Games) and contributing to The Between: Season 3. She is currently developing Rooted in Crisis, an eco-horror tabletop anthology built on the Trophy system, created with climate scientists and activists as a space for processing environmental grief and imagining collective futures.",
    bio2: "Her academic work spans Game Studies, Gothic fiction, and the Environmental Humanities, and she co-authored Material Game Studies: A Philosophy of Analogue Play (Bloomsbury, 2022). She co-directs the Manchester Game Centre and co-leads STRATEGIES, a Horizon Europe-funded project on sustainable transition in Europe’s game industries.",
    link: null,
    span2: false,
    img: "/Chloe2.webp",
  },
  {
    initials: "PW", name: "Professor Paul Wake", role: "Professor of Game Studies", institution: "Manchester Metropolitan University",
    bio: "Paul Wake is Professor of Game Studies at Manchester Metropolitan University and a co-director of the Manchester Game Centre. His research interests include game-making as a research method, games and communication, and game theory in the reading of literary texts. He has published articles on literary representations of casino games, 80s Adventure Gamebooks, and game design for communication. Paul also designs, uses, and plays games to start conversations about important societal topics. His recent work in this area has included Carbon City Zero: World Edition, a collaborative card game about the race to decarbonise the world’s cities, created with the climate action charity Possible and a global warming scenario for Klaus Teuber’s popular Catan®. His current game design project is Death Occurs Abroad, an archive building game set during the Second World War.",
    link: null,
    span2: false,
    img: "/paul.webp",
  },
];

const venueOrganisers = [
  {
    initials: "DH", name: "Daniel Huckfield", role: "Creative Health Projects Officer", institution: "The Amelia Scott, Tunbridge Wells",
    bio: "He has developed a successful, creative, and engaging program over the last three and a half years, exploring the power of museum objects, creative writing, exhibition writing, and Dungeons & Dragons for wellbeing and mental health.",
    bio2: "With over seven years of experience in developing and facilitating wellbeing and creative health interventions, Daniel has lived experience of mental health struggles and brings this experience to his facilitation work.",
    bio3: "Daniel has developed his practice in areas including interventions for those at risk of social isolation and neurodivergent individuals. He is focused on exploring how creative health and wellbeing can be taken beyond more traditional arts and crafts based interventions.",
    img: "/DanielHuckfield.webp",
  },
  {
    initials: "JK", name: "Jeremy Kimmel", role: "Arts, Heritage & Engagement Director", institution: "The Amelia Scott, Tunbridge Wells",
    bio: "Disruptive collaborator, with a passion for improving places and strengthening communities. My work sits at the crossroads of culture, health, engagement and strategy — helping councils deliver services that are meaningful, outcome focused, efficient and genuinely valued by residents. At The Amelia Scott, I lead a complex, multi-service operation, combining strategic thinking with practical delivery: building partnerships, securing funding, using data to guide decisions, and shaping programmes that support wellbeing, learning and a stronger sense of place. What I bring is a systems view. I connect agendas that often operate in isolation — public health, youth services, community engagement, culture — and identify opportunities for them to work together for better outcomes.",
    bio2: "Currently part of the Solace Springboard programme, I’m focused on the wider role that civic institutions can play in prevention, belonging and the future of local government. I’m driven by collaboration, clarity, and helping teams and places thrive.",
    img: "/jeremy.webp",
  },
  {
    initials: "AC", name: "Ally Curson", role: "Audience Development and Programme Manager", institution: "The Amelia Scott, Tunbridge Wells",
    bio: "",
  },
];

type OrgType = { initials: string; name: string; role: string; institution: string; bio: string; bio2?: string; bio3?: string; link?: string | null; websiteName?: string | null; img?: string };
function OrgCard({ org, delay = 1, span2 = false }: { org: OrgType; delay?: number, span2?: boolean }) {
  return (
    <div className={`reveal reveal-delay-${delay} rw-card p-6 ${span2 ? "md:col-span-2" : "" }`} style={{ background: "rgba(255,255,255,0.65)" }}>
      {("img" in org && org.img) ?
      (<Image
          src={org.img}
          alt={org.name}
          width={1200}
          height={600}
          className={`object-cover ${span2? "" : "aspect-square" } object-left rounded-xl` }
        /> 
      )
      :
      (<div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-display font-black text-sm"
        style={{ background: "#29abe2", color: "white" }}
      >
        {org.initials}
      </div>)
      }
      <h3 className="font-display font-black text-base" style={{ color: "#1a1a1a" }}>{org.name}</h3>
      <p className="font-body text-sm font-semibold mt-0.5" style={{ color: "#29abe2" }}>{org.role}</p>
      <p className="font-body text-xs font-medium uppercase tracking-wide mb-3" style={{ color: "#7a6a50" }}>{org.institution}</p>
      <p className="font-body text-sm leading-relaxed" style={{ color: "#5a4a30" }}>{org.bio}</p>
      {"bio2" in org && org.bio2 &&
      <p className="font-body text-sm leading-relaxed mt-1" style={{ color: "#5a4a30" }}>{org.bio2}</p>
      }
      {"bio3" in org && org.bio3 &&
      <p className="font-body text-sm leading-relaxed mt-1" style={{ color: "#5a4a30" }}>{org.bio3}</p>
      }
      {"link" in org && org.link && (
        <p className="font-body text-xs leading-relaxed mt-3"> To learn more about their work: <br />
        <a href={org.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-[#29abe2] hover:underline">
          Visit {org.websiteName} →
        </a>
        </p>
      )}
    </div>
  );
}

export default function Organisers() {
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
    <section id="organisers" ref={ref} className="py-24 px-6 topo-bg" style={{ background: "#eee4c8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label reveal mb-5">Organisers</div>
        <h2 className="reveal reveal-delay-1 font-display font-black mb-4"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 1.1, color: "#1a1a1a" }}>
          The team behind<br />
          <span style={{ color: "#29abe2" }}>Rolling Well.</span>
        </h2>

        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#7a6a50" }}>Academic Organisers</p>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {mainOrganisers.map((o, i) => <OrgCard key={o.name} org={o} delay={(i % 2) + 1} span2={o.span2}/>)}
        </div>

        <p className="reveal font-body text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#7a6a50" }}>Venue &amp; Programme Team</p>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {venueOrganisers.map((o, i) => <OrgCard key={o.name} org={o} delay={(i % 2) + 1}/>)}
        </div>
      </div>
    </section>
  );
}
