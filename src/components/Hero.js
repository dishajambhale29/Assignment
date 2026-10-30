const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85";

export default function Hero() {
  return (
    <section id="home" className="container pb-8 pt-10 md:pb-12 md:pt-14">
      <div className="max-w-[680px]">
        <span className="eyebrow inline-flex rounded-full bg-[#eee8de] px-3 py-2">
          Thoughtfully made · Made to belong
        </span>
        <h1 className="serif mt-5 max-w-[650px] text-[42px] leading-[1.05] sm:text-[54px] md:text-[64px]">
          Bespoke Sofas, Sculpted for Modern Indian Homes.
        </h1>
        <p className="mt-4 max-w-[510px] text-[12px] leading-[1.9] text-[#777067]">
          Explore premium, low-seating sofas crafted with care. From timeless
          forms to highly personal details, discover a sofa made for the way
          you live.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#collections" className="btn">Explore collections <span aria-hidden>↗</span></a>
          <a href="#customizer" className="btn btn-outline">Design your own sofa</a>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[15px]">
        <img
          src={heroImage}
          alt="Warm modern living room with a comfortable sofa"
          className="h-[300px] w-full object-cover sm:h-[400px] md:h-[490px]"
        />
        <div className="absolute bottom-5 left-5 rounded-full bg-[#fffefa]/95 px-4 py-3 text-[9px] tracking-wide text-[#514a42] shadow-sm">
          MADE FOR SLOW MORNINGS & LONG CONVERSATIONS
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#e8e0d6] pt-5 text-[9px] text-[#777067] sm:grid-cols-3">
        <div>✳ Thoughtful materials, made to last</div>
        <div>✳ Made-to-order, tailored to your home</div>
        <div>✳ Direct from our artisan partners</div>
      </div>
    </section>
  );
}
