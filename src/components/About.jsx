import Marquee from './Marquee';

export default function About() {
  return (
    <section id="about" className="pb-24 pt-16">
      <Marquee />

      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-16">
        <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-lg tracking-[0.2em] text-[#d99a5b] md:text-xl">ABOUT</p>

          <div>
            <p className="text-[clamp(1.6rem,3.4vw,2.75rem)] font-serif leading-[1.25] text-[#e8e2d8]">
              I'm drawn to the part of software where a clean interface meets a
              system that actually holds up — and increasingly, to{" "}
              <span className="font-serif italic text-[#d99a5b]">AI-powered products</span>.
            </p>

            <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-[#a89d8e]">
              Currently finishing a Professional Master's in Information Systems
              Engineering at the Faculty of Sciences of Monastir, after a Bachelor's
              in Computer Science at the same faculty. Three internships in, I've
              shipped e-commerce, learning and management platforms across Laravel,
              React and Flutter. I speak Arabic, English and French.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  );
}