const skills = ["PHP", "JAVA", "C#", "GIT", "REACT", "TYPESCRIPT", "LARAVEL", "FLUTTER", "PYTHON", "MYSQL", "BLENDER", "CANVA", "POWER BI"];

function MarqueeRow() {
  return (
    <>
      {skills.map((s, i) => (
        <span key={i} className="flex items-center gap-6 whitespace-nowrap px-4">
          {s}
          <span className="text-[#d99a5b]">✦</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 py-5">
      <div className="animate-marquee flex w-max gap-6 font-mono text-xs tracking-[0.2em] text-[#a89d8e]">
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}