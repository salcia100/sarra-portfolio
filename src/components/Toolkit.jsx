import Marquee from './Marquee';

const frontend = ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Flutter", "HTML/CSS"];
const backend = ["Laravel", "Node.js", "Spring Boot", "PHP", "Python", "Java", "C#"];
const tools = ["MySQL", "MongoDB", "Git", "Bitbucket", "Postman", "Laragon"];

const certifications = [
  { name: "Linux Essentials", org: "Linux Professional Institute — 05/2024", image: "/certs/linux-essentials.jpg" },
  { name: "Fundamentals of Deep Learning", org: "NVIDIA — 03/2026", image: "/certs/deep-learning.jpg" },
];

const education = [
  { name: "Professional Master's, Information Systems Engineering", org: "Faculty of Sciences of Monastir — 2025 to present", link: "https://fsm.rnu.tn/", logo: "/images/fsm-logo.png" },
  { name: "Bachelor's, Computer Science", org: "Faculty of Sciences of Monastir — 2022 to 2025", link: "https://fsm.rnu.tn/", logo: "/images/fsm-logo.png" },
];

function Column({ title, items }) {
  return (
    <div className="text-center">
      <h4 className="font-serif text-xl italic text-[#d99a5b]">{title}</h4>
      <ul className="mt-6 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="font-mono text-sm text-[#a89d8e]">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section className="px-6 pb-24 pt-10 md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-16 font-mono text-lg tracking-[0.2em] text-[#d99a5b] md:text-xl">TOOLKIT</p>

        <div className="grid gap-12 md:grid-cols-3">
          <Column title="Front-end" items={frontend} />
          <Column title="Back-end" items={backend} />
          <Column title="Data & Tools" items={tools} />
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[#a89d8e]">CERTIFICATIONS</p>
            <div className="flex flex-wrap gap-6">
              {certifications.map((c, i) => (
                <div key={i} className="w-40">
                  <div className="relative mb-3 h-28 w-40 overflow-hidden rounded-lg border border-white/10 shadow-[0_0_50px_-15px_rgba(0,0,0,0.9)]">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover brightness-90 contrast-105 saturate-90"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14100c]/30 via-transparent to-[#14100c]/20" />
                  </div>
                  <h5 className="font-serif text-sm text-[#e8e2d8]">{c.name}</h5>
                  <p className="font-mono text-[10px] text-[#a89d8e]">{c.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[#a89d8e]">EDUCATION</p>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i} className="flex items-start gap-4">
                  <a href={e.link} target="_blank" rel="noreferrer" className="shrink-0">
                    <img
                      src={e.logo}
                      alt="FSM logo"
                      className="h-12 w-12 rounded-full border border-white/10 object-cover opacity-90 transition-opacity hover:opacity-100"
                    />
                  </a>
                  <div>
                    <h5 className="font-serif text-lg text-[#e8e2d8]">{e.name}</h5>
                    
                      <a href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-[#a89d8e] underline underline-offset-2 hover:text-[#d99a5b]"
                    >
                      {e.org}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Marquee />
      </div>
    </section>
  );
}