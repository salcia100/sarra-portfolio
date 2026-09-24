import Marquee from './Marquee';

const projects = [
  {
    num: "01",
    product: "Student Learning Platform",
    company: "3LM Solutions",
    role: "Full-Stack Developer Intern",
    date: "07/2026 — PRESENT",
    desc: "Building the student learning platform for an online HR training product: course navigation, module progression, quizzes and certificate eligibility.",
    tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Laravel", "MySQL"],
    video: "/videos/project1.mp4",
  },
  {
    num: "02",
    product: "Multi-Vendor E-Commerce App",
    company: "Incentive Solutions",
    role: "Full-Stack Developer Intern — Final Year Project",
    date: "02/2025 — 06/2025",
    desc: "Built a multi-vendor e-commerce app covering browsing, purchasing, selling and personalised customer requests, plus REST APIs and an admin dashboard for users, products, orders and analytics. Two-person team on Git and Bitbucket.",
    tags: ["Flutter", "Laravel", "REST APIs", "Bitbucket"],
    video: "/videos/project2.mp4",
  },
  {
    num: "03",
    product: "Gym Management System",
    company: "Elyos Digital",
    role: "Web Developer Intern",
    date: "08/2024 — 09/2024",
    desc: "Developed a web-based gym management system with full CRUD over core application data, working across Laravel's MVC architecture, routing, controllers and database layer.",
    tags: ["Laravel", "MVC", "MySQL"],
  },
  {
    num: "04",
    product: "Online Recruitment Platform",
    company: "Academic Project",
    role: "Full-Stack Developer",
    date: "05/2024",
    desc: "A recruitment web application with user authentication and job listing management, built from scratch on a JavaScript and MongoDB stack.",
    tags: ["Node.js", "JavaScript", "HTML/CSS", "MongoDB"],
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 pb-24 pt-10 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center justify-between">
          <p className="font-mono text-lg tracking-[0.2em] text-[#d99a5b] md:text-xl">SELECTED WORK</p>
        </div>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <div key={i} className="border-t border-white/10 py-12 last:border-b">
              <div className="grid gap-8 md:grid-cols-[80px_1fr_1.3fr]">
                <span className="font-serif text-2xl italic text-[#d99a5b]">{p.num}</span>

                <div>
                  <h3 className="font-serif text-3xl text-[#e8e2d8] md:text-4xl">
                    {p.product}
                  </h3>

                  <p className="mt-3 font-mono text-sm text-[#a89d8e]">
                    {p.company} <span className="text-[#6b6156]">·</span> {p.role}
                  </p>

                  <p className="mt-2 font-mono text-xs tracking-[0.15em] text-[#6b6156]">
                    {p.date}
                  </p>
                </div>
                
                <div>
                  <p className="font-mono text-sm leading-relaxed text-[#a89d8e]">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-[#e8e2d8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.video && (
                    <div className="relative mt-6 max-w-lg overflow-hidden rounded-lg border border-white/10 shadow-[0_0_50px_-15px_rgba(0,0,0,0.9)]">
                      <video
                        src={p.video}
                        controls
                        className="w-full brightness-90 contrast-105 saturate-90"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14100c]/30 via-transparent to-[#14100c]/20" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Marquee />
      </div>
    </section>
  );
}