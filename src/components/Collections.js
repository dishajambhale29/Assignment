import { products } from "@/data/products";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function Collections() {
  return (
    <section id="collections" className="section border-y border-[#e8e0d6] bg-[#f3efe8]">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Find your kind of comfort</span>
            <h2 className="serif section-title">Signature Collections.</h2>
          </div>
          <p className="section-copy max-w-[350px]">
            Explore considered silhouettes, rich materials and enduring forms,
            thoughtfully made for Indian homes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="card group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#fffefa]/90 px-3 py-1.5 text-[9px]">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="serif text-[20px]">{product.name}</h3>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-[#8e503b]">{money(product.price)}</span>
                </div>
                <p className="mt-1 text-[9px] uppercase tracking-[.12em] text-[#8a8177]">{product.category}</p>
                <p className="mt-3 min-h-[40px] text-[11px] leading-6 text-[#777067]">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#e8e0d6] px-3 py-1.5 text-[9px]">Made to order</span>
                  <span className="rounded-full border border-[#e8e0d6] px-3 py-1.5 text-[9px]">Custom fabrics</span>
                </div>
                <a href="#customizer" className="mt-5 flex min-h-10 items-center justify-center rounded-full border border-[#8e503b] text-[10px] font-semibold text-[#8e503b] transition hover:bg-[#8e503b] hover:text-white">
                  Customize this sofa ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
