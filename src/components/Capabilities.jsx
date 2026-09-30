export default function Capabilities() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-[9%] py-16 md:py-24 bg-[#1c1d19] dark:bg-[#171914] text-[#f4f1e9] -mx-6 md:-mx-10 px-6 md:px-10">
      <div>
        <p className="flex items-center gap-4 text-gray-400 text-[0.62rem] uppercase tracking-[0.08em] font-mono mb-6">
          <span className="text-[#a9b5ff] font-medium">03 / Мої інструменти</span>
        </p>
        <h2 className="text-[clamp(2.9rem,5.4vw,5rem)] font-semibold leading-[0.92] tracking-[-0.085em] my-7">
          Допитливість.<br />Практичність<span className="text-blue-600">.</span>
        </h2>
        <p className="text-[#a8a89f] text-[0.84rem] leading-[1.8] max-w-[300px]">
          Мені подобається перетворювати сирі ідеї на речі, якими справді хочеться користуватися.
        </p>
      </div>

      <div className="border-t border-[rgba(244,241,233,0.22)]">
        {[
          { id: 'A', title: 'Розробляю', desc: 'React, Next.js, TypeScript, Node.js, API, безголові CMS' },
          { id: 'B', title: 'Формую', desc: 'Продуктове мислення, UX-стратегія, прототипування, дизайн-системи' },
          { id: 'C', title: 'Розвиваю', desc: 'Керування студією, партнерство з клієнтами, технічна оптимізація та SEO' },
        ].map((item) => (
          <article key={item.id} className="relative py-6 pl-11 pr-1 border-b border-[rgba(244,241,233,0.22)]">
            <span className="absolute top-[27px] left-0 text-[#a9b5ff] text-[0.61rem] font-mono">{item.id}</span>
            <h3 className="font-medium text-[1.3rem] mb-2">{item.title}</h3>
            <p className="text-[#a8a89f] text-[0.77rem] leading-[1.7] max-w-[430px]">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}