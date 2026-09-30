export default function Work() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-[9%] py-20 md:py-28">
      <div>
        <p className="flex items-center gap-4 text-gray-500 text-[0.62rem] uppercase tracking-[0.08em] font-mono mb-6">
          <span className="text-blue-600 font-medium">04 / Вибрані проєкти</span>
        </p>
        <h2 className="text-[clamp(3rem,5.8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.085em] mt-6">
          Створено<br />разом<span className="text-blue-600">.</span>
        </h2>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700">
        {[
          { type: '01 — Продукт', title: 'Портал Finita', desc: 'Дизайн продукту й архітектура фронтенду для внутрішньої аналітики.' },
          { type: '02 — Запуск', title: 'Сайти для бізнесу', desc: 'Маркетингові та корпоративні сайти, створені для залучення клієнтів.' },
          { type: '03 — Електронна торгівля', title: 'Інтернет-магазини', desc: 'Продумане переосмислення досвіду покупок та інтеграція платіжних систем.' },
        ].map((project, i) => (
          <article key={i} className="grid grid-cols-1 md:grid-cols-[0.62fr_1.45fr_auto] items-center gap-4 md:gap-4 py-5 border-b border-gray-300 dark:border-gray-700 group cursor-pointer">
            <span className="text-blue-600 text-[0.56rem] font-mono uppercase tracking-[0.04em]">{project.type}</span>
            <div>
              <h3 className="font-semibold text-[1.05rem] tracking-[-0.04em] mb-1">{project.title}</h3>
              <p className="text-gray-500 text-[0.7rem] leading-[1.65] max-w-[350px]">{project.desc}</p>
            </div>
            <span className="hidden md:block text-blue-600 text-[1.05rem] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}