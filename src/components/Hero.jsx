export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden">
      {/* Nav pinned to top corners */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-mono text-xs tracking-[0.3em] text-[#a89d8e]">
          SARRA HADDAD
        </span>
        <div className="flex gap-8 font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
          <a href="#work" className="hover:text-[#d99a5b]">WORK</a>
          <a href="#about" className="hover:text-[#d99a5b]">ABOUT</a>
          <a href="#contact" className="hover:text-[#d99a5b]">CONTACT</a>
        </div>
      </nav>

      {/* Main content, fills remaining space between nav and footer */}
      <div className="mx-auto grid w-full max-w-7xl grow grid-cols-1 items-center gap-2 px-6 md:grid-cols-[1fr_1fr] md:px-12">
        {/* Left: text */}
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-[#d99a5b]">
  MONASTIR, TUNISIA — AVAILABLE FOR WORK
</p>

          <h1 className="font-serif text-6xl leading-[1.05] text-[#e8e2d8] md:text-8xl">
  Sarra
</h1>
<h1 className="font-serif text-6xl italic leading-[1.05] text-[#d99a5b] md:text-8xl">
  Haddad
</h1>

          <p className="mt-6 max-w-md font-mono text-base leading-relaxed text-[#a89d8e]">
  Software engineering master's student and full-stack developer.
  I build web and mobile products end to end — from Laravel APIs
  to React and Flutter interfaces.
</p>
        </div>

        {/* Right: oval avatar, soft edges */}
        <div className="flex justify-center md:justify-end">
<div className="relative h-72 w-56 md:h-[26rem] md:w-72 lg:h-[30rem] lg:w-80">
              <div className="absolute inset-0 rounded-full bg-[#d99a5b] opacity-15 blur-3xl" />
            <img
              src="/images/hero-character.jpg"
              alt="Sarra Haddad illustration"
              className="avatar-fade relative h-full w-full object-cover object-[50%_15%] brightness-95 contrast-105"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar pinned to bottom corners */}
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">SCROLL</span>
        <span className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">2026 — PORTFOLIO</span>
      </div>
    </section>
  );
}