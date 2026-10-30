"use client";

import { useMemo, useState } from "react";

const models = [
  { name: "Luna", base: 42999, detail: "Warm curves · relaxed comfort" },
  { name: "Urban", base: 48999, detail: "Clean lines · modern classic" },
  { name: "Cloud", base: 62999, detail: "Deep seats · generous comfort" },
];
const fabrics = [
  { name: "Natural Linen", color: "#cbbba5", extra: 0 },
  { name: "Warm Sand", color: "#a98c72", extra: 1200 },
  { name: "Olive", color: "#68715d", extra: 1800 },
  { name: "Midnight", color: "#333b43", extra: 2200 },
];
const seating = [
  { name: "2 Seater", extra: 0 },
  { name: "3 Seater", extra: 8000 },
  { name: "L Shape", extra: 18000 },
];
const legs = [
  { name: "Natural wood", extra: 0 },
  { name: "Dark walnut", extra: 1200 },
  { name: "Matte black metal", extra: 1800 },
];
const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function Customizer() {
  const [model, setModel] = useState("Luna");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [seat, setSeat] = useState(seating[1]);
  const [leg, setLeg] = useState(legs[0]);

  const selectedModel = models.find((item) => item.name === model);
  const total = useMemo(
    () => selectedModel.base + fabric.extra + seat.extra + leg.extra,
    [selectedModel, fabric, seat, leg]
  );

  return (
    <section id="customizer" className="section">
      <div className="container">
        <div className="mx-auto mb-9 max-w-[650px] text-center">
          <span className="eyebrow">A little more personal</span>
          <h2 className="serif section-title">Tailor Your Living Centerpiece</h2>
          <p className="section-copy mx-auto">
            Choose the silhouette, fabric and finishing touches. Make a piece
            that feels unmistakably yours.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="card relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                  alt={`${model} sofa preview`}
                  className="h-[300px] w-full object-cover sm:h-[410px]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#fffefa]/90 px-3 py-2 text-[9px]">Made for you</span>
                <span className="absolute bottom-4 left-4 rounded-full bg-[#29251f]/85 px-3 py-2 text-[9px] text-white">✳ Your selected configuration</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div>
                  <p className="serif text-[22px]">{model} · {seat.name}</p>
                  <p className="mt-1 text-[10px] text-[#777067]">{fabric.name} · {leg.name}</p>
                </div>
                <p className="text-[19px] font-semibold text-[#8e503b]">{money(total)}</p>
              </div>
            </div>
            <p className="mt-4 rounded-xl border border-[#e8e0d6] bg-[#f3efe8] p-4 text-[10px] leading-6 text-[#777067]">
              Your configuration is an estimate. Final pricing, dimensions and
              delivery timelines will be confirmed by our design team.
            </p>
          </div>

          <div className="card p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="serif text-[23px]">Create Your Sofa</h3>
              <span className="eyebrow">01 / Configure</span>
            </div>

            <div className="border-b border-[#e8e0d6] pb-5">
              <div className="mb-3 flex justify-between">
                <span className="field-label">Choose sofa model</span>
                <span className="text-[9px] text-[#8e503b]">Select one</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {models.map((item) => (
                  <button key={item.name} type="button" onClick={() => setModel(item.name)}
                    className={`rounded-xl border p-3 text-left transition ${model === item.name ? "border-[#8e503b] bg-[#f7f0e9]" : "border-[#e8e0d6] hover:border-[#b99a87]"}`}>
                    <span className="block text-[11px] font-semibold">{item.name}</span>
                    <span className="mt-1 block text-[9px] text-[#8e503b]">{money(item.base)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#e8e0d6] py-5">
              <span className="field-label">Choose fabric colour</span>
              <div className="mt-3 flex flex-wrap gap-4">
                {fabrics.map((item) => (
                  <button key={item.name} type="button" onClick={() => setFabric(item)}
                    className="flex flex-col items-center gap-2 text-[9px]" aria-label={`Select ${item.name}`}>
                    <span className={`h-9 w-9 rounded-full border-[3px] ${fabric.name === item.name ? "border-[#8e503b] ring-2 ring-[#8e503b]/20" : "border-white shadow"}`} style={{ backgroundColor: item.color }} />
                    <span className={fabric.name === item.name ? "font-bold text-[#8e503b]" : "text-[#777067]"}>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#e8e0d6] py-5">
              <span className="field-label">Choose seating configuration</span>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {seating.map((item) => (
                  <button key={item.name} type="button" onClick={() => setSeat(item)}
                    className={`rounded-xl border p-3 text-left ${seat.name === item.name ? "border-[#8e503b] bg-[#f7f0e9]" : "border-[#e8e0d6]"}`}>
                    <span className="block text-[10px] font-semibold">{item.name}</span>
                    <span className="mt-1 block text-[9px] text-[#8e503b]">{item.extra ? `+${money(item.extra)}` : "Included"}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="py-5">
              <span className="field-label">Choose leg finish</span>
              <div className="mt-2 space-y-2">
                {legs.map((item) => (
                  <label key={item.name} className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 text-[10px] ${leg.name === item.name ? "border-[#8e503b] bg-[#f7f0e9]" : "border-[#e8e0d6]"}`}>
                    <span className="flex items-center gap-2">
                      <input type="radio" name="leg" checked={leg.name === item.name} onChange={() => setLeg(item)} />
                      {item.name}
                    </span>
                    <span className="text-[#8e503b]">{item.extra ? `+${money(item.extra)}` : "Included"}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#f0ece5] p-4">
              <div className="flex justify-between text-[10px]"><span>Selected model</span><span>{model}</span></div>
              <div className="mt-2 flex justify-between text-[10px]"><span>Fabric / seating / legs</span><span>Included in total</span></div>
              <div className="mt-3 flex justify-between border-t border-[#ddd2c5] pt-3">
                <span className="text-[11px] font-bold">Estimated total</span>
                <span className="text-[18px] font-semibold text-[#8e503b]">{money(total)}</span>
              </div>
              <a href={`#consultation`} className="btn mt-4 w-full">Request this configuration ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
