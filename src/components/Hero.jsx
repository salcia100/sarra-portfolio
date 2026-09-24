export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">

      {/* NAV */}
      <header className="relative z-30">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[#a89d8e]">
            SARRA HADDAD
          </span>
          <div className="flex gap-8 font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
            <a href="#work"    className="transition-colors hover:text-[#d99a5b]">WORK</a>
            <a href="#about"   className="transition-colors hover:text-[#d99a5b]">ABOUT</a>
            <a href="#contact" className="transition-colors hover:text-[#d99a5b]">CONTACT</a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl grow items-center px-6 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-12">

          {/* LEFT — TEXT */}
          <div className="md:col-span-6 lg:col-span-6">
            <p className="rise-in rise-in-1 mb-5 font-mono text-xs tracking-[0.2em] text-[#d99a5b]">
              MONASTIR, TUNISIA — AVAILABLE FOR WORK
            </p>

            <h1 className="rise-in rise-in-2 font-serif text-6xl leading-[1.02] text-[#e8e2d8] md:text-7xl lg:text-[6.5rem]">
              Sarra
              <br />
              <span className="italic text-[#d99a5b]">Haddad</span>
            </h1>

            <p className="rise-in rise-in-3 mt-7 max-w-md font-mono text-sm leading-relaxed text-[#a89d8e] md:text-base">
              Software engineering master's student and full-stack developer.
              I build web and mobile products end to end — from Laravel APIs
              to React and Flutter interfaces.
            </p>
          </div>


          {/* RIGHT — PORTRAIT + ORBITS */}
          <div className="relative md:col-span-6 lg:col-span-6">
            <div className="rise-in rise-in-4 relative mx-auto h-[26rem] w-[26rem] md:h-[30rem] md:w-[30rem] lg:h-[34rem] lg:w-[34rem]">

              {/* Pulsing warm halo behind head */}
              <div
                aria-hidden
                className="
                  animate-pulse-halo
                  absolute left-1/2 top-[38%]
                  h-[62%] w-[62%]
                  rounded-full
                  bg-[#d99a5b]/25
                  blur-[90px]
                "
              />

              {/* Outer orbit ring (reverse, subtle) */}
              <div
                aria-hidden
                className="
                  animate-orbit-slow
                  orbit-ring
                  absolute inset-0
                  opacity-40
                "
              />

              {/* Inner orbit ring (forward, brighter) */}
              <div
                aria-hidden
                className="
                  animate-orbit
                  orbit-ring
                  absolute inset-[8%]
                  opacity-80
                "
              />

              {/* Orbiting dots */}
              <div aria-hidden className="absolute inset-0">
                <span
                  className="orbit-dot absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[#d99a5b] shadow-[0_0_12px_2px_rgba(217,154,91,0.75)]"
                  style={{ ["--r"]: "13rem", ["--dur"]: "14s" }}
                />
              </div>
              <div aria-hidden className="absolute inset-[8%]">
                <span
                  className="orbit-dot absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[#e8e2d8] shadow-[0_0_10px_2px_rgba(232,226,216,0.6)]"
                  style={{ ["--r"]: "11rem", ["--dur"]: "20s", animationDirection: "reverse" }}
                />
              </div>

              {/* Portrait */}
              <img
                src="/images/hero-character5.png"
                alt="Portrait of Sarra Haddad"
                className="
                  portrait-fade
                  animate-breathe
                  relative z-10
                  mx-auto
                  h-full w-full
                  object-contain object-bottom
                  brightness-[0.96]
                  contrast-[0.98]
                "
              />
            </div>
          </div>

        </div>
      </div>


      {/* FOOTER */}
      <footer className="relative z-30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <span className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
            SCROLL
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
            2026 — PORTFOLIO
          </span>
        </div>
      </footer>

    </section>
  );
}