const features = [
  ["✳", "Kiln-Dried Hardwood", "Responsibly selected hardwood frames, carefully seasoned for lasting strength and everyday stability."],
  ["◈", "38-Density Cold Foam", "Supportive, resilient cushioning designed to keep its shape and comfort over time."],
  ["✧", "50k Martindale Rubs", "Durable upholstery choices selected to stand up to the rhythm of everyday living."],
  ["⌂", "Direct from Factory", "Thoughtful made-to-order production with clear communication from our team."],
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="section section-soft">
      <div className="container">
        <span className="eyebrow">Made with intention</span>
        <h2 className="serif section-title max-w-[560px]">Built by Indian Artisans, Engineered to Last Generations.</h2>
        <p className="section-copy">
          We believe beautiful furniture should feel as good as it looks.
          Our pieces bring together considered materials, skilled hands and
          thoughtful construction for homes that are lived in.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([icon, title, description]) => (
            <article key={title} className="card min-h-[205px] p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0ece5] text-sm text-[#8e503b]">{icon}</span>
              <h3 className="serif mt-5 text-[18px]">{title}</h3>
              <p className="mt-2 text-[10px] leading-6 text-[#777067]">{description}</p>
              <span className="mt-4 block text-[8px] uppercase tracking-[.14em] text-[#8e503b]">Thoughtfully considered ↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
