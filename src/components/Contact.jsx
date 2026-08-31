export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-10 pt-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-lg tracking-[0.2em] text-[#d99a5b] md:text-xl">CONTACT</p>

        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <h2 className="font-serif text-6xl leading-tight text-[#e8e2d8] md:text-7xl">
              Let's build
            </h2>
            <h2 className="font-serif text-6xl italic leading-tight text-[#d99a5b] md:text-7xl">
              something good.
            </h2>
          </div>

          <div className="flex flex-col gap-3 ">
            
              <a href="/cv/CV_Sarra_Had_EN(1).pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#d99a5b]/40 px-6 py-3 font-mono text-xs tracking-[0.2em] text-[#e8e2d8] transition-colors hover:border-[#d99a5b] hover:text-[#d99a5b]"
            >
              CV — ENGLISH
              <span aria-hidden="true">↓</span>
            </a>
            
              <a href="/cv/CV_Sarra_Had_FR(1).pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#d99a5b]/40 px-6 py-3 font-mono text-xs tracking-[0.2em] text-[#e8e2d8] transition-colors hover:border-[#d99a5b] hover:text-[#d99a5b]"
            >
              CV — FRANÇAIS
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">EMAIL</p>
            <a href="mailto:sarra.haddad10@gmail.com" className="mt-2 block font-mono text-sm text-[#e8e2d8] hover:text-[#d99a5b]">
              sarra.haddad10@gmail.com
            </a>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">PHONE</p>
            <a href="tel:+21653420849" className="mt-2 block font-mono text-sm text-[#e8e2d8] hover:text-[#d99a5b]">
              +216 53 420 849
            </a>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">GITHUB</p>
            <a href="https://github.com/salcia100" target="_blank" rel="noreferrer" className="mt-2 block font-mono text-sm text-[#e8e2d8] hover:text-[#d99a5b]">
              github.com/salcia100
            </a>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">LINKEDIN</p>
            <a href="https://www.linkedin.com/in/sarra-haddad-ba0b6b250/" target="_blank" rel="noreferrer" className="mt-2 block font-mono text-sm text-[#e8e2d8] hover:text-[#d99a5b]">
              sarra-haddad
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
            SARRA HADDAD — MONASTIR, TUNISIA — © 2026
          </p>
        </div>
      </div>
    </section>  
  );
}