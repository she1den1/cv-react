export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 border-b border-gray-300 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] items-end gap-10 mb-14">
        <div>
          <p className="flex items-center gap-4 text-gray-500 text-[0.62rem] uppercase tracking-[0.08em] font-mono mb-6">
            <span className="text-blue-600 font-medium">02 / Детальніше</span>
          </p>
          <h2 className="text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.085em] m-0">
            Мій шлях<span className="text-blue-600">.</span>
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-[280px] md:justify-self-end m-0">
          Найкращі результати народжуються у співпраці. Ось мій професійний досвід.
        </p>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700">
        {/* Елемент 1 */}
        <article className="grid grid-cols-1 md:grid-cols-[0.32fr_1fr] gap-4 md:gap-[7%] py-9 border-b border-gray-300 dark:border-gray-700">
          <div className="text-blue-600 text-[0.62rem] tracking-[0.06em] font-mono uppercase pt-2">ДОТЕПЕР</div>
          <div>
            <div className="flex justify-between items-start gap-5">
              <div>
                <h3 className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.055em] m-0 mb-1">Співзасновник і провідний розробник</h3>
                <p className="text-[0.77rem] text-gray-500 m-0">Finita Studio <span className="text-blue-600 mx-1">·</span> Львів / Віддалено</p>
              </div>
              <span className="text-[0.7rem] text-gray-400 font-mono">01</span>
            </div>
            <p className="text-[0.88rem] font-bold leading-[1.7] my-5 max-w-[650px]">Розвиваю незалежну цифрову студію для бізнесів, готових до наступного кроку.</p>
            <ul className="list-disc text-[0.78rem] text-gray-500 leading-[1.85] pl-4 marker:text-blue-600 max-w-[700px]">
              <li>Веду проєкти від перших ескізів до запуску, поєднуючи продуктове мислення, дизайн і розробку.</li>
              <li>Створюю швидкі сайти й інтерфейси на React, Next.js, TypeScript та сучасних CMS.</li>
              <li>Визначаю напрям студії, розвиваю партнерства й робочі процеси команди.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-sm text-gray-500 text-[0.56rem] font-mono uppercase">Розвиток студії</span>
              <span className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-sm text-gray-500 text-[0.56rem] font-mono uppercase">Продуктова стратегія</span>
              <span className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-sm text-gray-500 text-[0.56rem] font-mono uppercase">Фронтенд</span>
            </div>
          </div>
        </article>

        {/* Елемент 2 */}
        <article className="grid grid-cols-1 md:grid-cols-[0.32fr_1fr] gap-4 md:gap-[7%] py-9 border-b border-gray-300 dark:border-gray-700">
          <div className="text-blue-600 text-[0.62rem] tracking-[0.06em] font-mono uppercase pt-2">2021 — 2024</div>
          <div>
            <div className="flex justify-between items-start gap-5">
              <div>
                <h3 className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.055em] m-0 mb-1">Веброзробник</h3>
                <p className="text-[0.77rem] text-gray-500 m-0">Незалежна практика <span className="text-blue-600 mx-1">·</span> Віддалено</p>
              </div>
              <span className="text-[0.7rem] text-gray-400 font-mono">02</span>
            </div>
            <p className="text-[0.88rem] font-bold leading-[1.7] my-5 max-w-[650px]">Створював сайти та цифрові рішення для стартапів, агенцій і приватних клієнтів.</p>
            <ul className="list-disc text-[0.78rem] text-gray-500 leading-[1.85] pl-4 marker:text-blue-600 max-w-[700px]">
              <li>Співпрацював із замовниками над створенням доступних і зручних користувацьких інтерфейсів.</li>
              <li>Оптимізовував архітектуру проєктів для швидкодії та SEO.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-sm text-gray-500 text-[0.56rem] font-mono uppercase">Вебдизайн</span>
              <span className="px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 rounded-sm text-gray-500 text-[0.56rem] font-mono uppercase">Адаптивна розробка</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}