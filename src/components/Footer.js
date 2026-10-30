const footerLinks = {
  Explore: [["Featured", "#home"], ["Collections", "#collections"], ["Customize", "#customizer"], ["Craftsmanship", "#craftsmanship"]],
  "Get in touch": [["Book a consultation", "#consultation"], ["Email us", "mailto:hello@sofaliving.example"], ["Instagram", "#"]],
};

export default function Footer() {
  return (
    <footer className="bg-[#eee9e1] py-12">
      <div className="container">
        <div className="grid gap-9 border-b border-[#dcd4c9] pb-9 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="serif text-[23px] tracking-[.08em]">SOFALIVING</a>
            <p className="mt-4 max-w-[330px] text-[13px] leading-6 text-[#777067]">
              Considered furniture for thoughtful homes. We bring together
              skilled Indian craftsmanship, enduring materials and personal
              details to make furniture that belongs.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[15px] font-bold uppercase tracking-[.16em]">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-[14px] text-[#777067] transition hover:text-[#8e503b]">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-[#777067] sm:flex-row">
          <p>© {new Date().getFullYear()} Sofaliving. All rights reserved.</p>
          <p>Thoughtfully made. Made to belong.</p>
        </div>
      </div>
    </footer>
  );
}
