import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#f4f1e9] dark:bg-[#171914] text-[#1c1d19] dark:text-[#f4f1e9] font-sans transition-colors duration-300 selection:bg-blue-600 selection:text-white">
      <Header theme={theme} setTheme={setTheme} />
      
      <main className="max-w-[1260px] mx-auto p-6 md:px-10">
        
        {/* Секція "Коротко про мене" (Герой) */}
        <section className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 items-center border-b border-gray-300 dark:border-gray-700">
          <div>
            <p className="flex items-center gap-4 text-gray-500 text-[0.62rem] uppercase tracking-[0.08em] font-mono mb-6">
              <span className="text-blue-600 font-medium">01 / Коротко про мене</span> Веброзробник · Співзасновник
            </p>
            <h1 className="text-[clamp(3.4rem,10vw,10.5rem)] font-semibold leading-[0.79] tracking-[-0.105em] mb-10">
              Роблю<br />
              <span className="text-blue-600 font-normal">цифрове</span><br />
              зрозумілим<span className="text-blue-600">.</span>
            </h1>
            <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed">
              Привіт, я <strong className="text-black dark:text-white">Андрій Антощак</strong> — розробник, творчий партнер і співзасновник
              <strong className="text-black dark:text-white"> Finita Studio</strong>. Перетворюю сміливі ідеї на виразні й корисні цифрові продукти.
            </p>
          </div>
          
          <div className="relative aspect-square w-full max-w-[410px] justify-self-center md:justify-self-end flex items-center justify-center -rotate-6">
            <div className="absolute inset-[7%] border border-dashed border-blue-600/70 rounded-full animate-[spin_38s_linear_infinite]"></div>
            <div className="absolute inset-[19%] border-2 border-blue-600 rounded-full animate-[spin_24s_linear_infinite_reverse]"></div>
            <div className="w-[43%] aspect-square rounded-full bg-blue-600 text-[#f4f1e9] text-[clamp(4rem,9vw,8rem)] font-medium flex items-center justify-center shadow-[14px_16px_0_#1c1d19] dark:shadow-[14px_16px_0_#f4f1e9] z-10">
              F
            </div>
          </div>
        </section>

        {/* Додаємо щойно створені компоненти */}
        <Experience />
        <Capabilities />
        <Work />
        <Reviews />
        
      </main>

      <Footer />
      <ContactForm />
    </div>
  );
}