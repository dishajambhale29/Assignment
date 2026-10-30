"use client";

import { useState } from "react";

const links = [
  ["Featured", "#home"],
  ["Collections", "#collections"],
  ["Craftsmanship", "#craftsmanship"],
  ["Inquiry", "#consultation"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d6] bg-[#f9f6f0]/95 backdrop-blur">
      <div className="container flex min-h-[72px] items-center justify-between gap-5">
        <a href="#home" className="leading-none" aria-label="Sofaliving home">
          <span className="serif block text-[22px] tracking-[.08em]">SOFALIVING</span>
          <span className="mt-1 block text-[7px] tracking-[.24em] text-[#8e503b]">FURNITURE, MADE PERSONAL</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-[15px] text-[#514a42] transition hover:text-[#8e503b]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="mailto:hello@sofaliving.example" className="text-[10px] text-[#777067]">hello@sofaliving.example</a>
          <a className="btn btn-small" href="#consultation">Book a visit <span aria-hidden>↗</span></a>
        </div>

        <button
          type="button"
          className="rounded-full border border-[#e8e0d6] px-4 py-2 text-xs md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="container flex flex-col gap-4 border-t border-[#e8e0d6] py-5 md:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="text-sm">{label}</a>
          ))}
          <a className="btn w-fit" href="#consultation" onClick={() => setOpen(false)}>Book a visit ↗</a>
        </nav>
      )}
    </header>
  );
}
