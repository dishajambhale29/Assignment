const stats = [
  ["26", "Years of experience"],
  ["42k+", "Happy customers"],
  ["10-Yr", "Frame warranty*"],
  ["4.9 ★", "Average rating*"],
];

export default function Statistics() {
  return (
    <section className="bg-[#f2eee7] pb-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#e8e0d6] bg-[#fffefa] p-6 text-center md:grid-cols-4 md:p-8">
          {stats.map(([number, label]) => (
            <div key={label}>
              <p className="serif text-[32px] text-[#8e503b] md:text-[39px]">{number}</p>
              <p className="mt-1 text-[8px] uppercase tracking-[.14em] text-[#777067]">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-right text-[9px] text-[#8b8379]">*Illustrative figures — replace with verified business information.</p>
      </div>
    </section>
  );
}
