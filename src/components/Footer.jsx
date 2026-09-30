import { useState, useEffect } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const info = {
      os: navigator.platform,
      browser: navigator.userAgent
    };
    // Зберігаємо в LocalStorage
    localStorage.setItem('systemInfo', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="max-w-[1260px] mx-auto p-6 border-t border-gray-300 dark:border-gray-700 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-6 text-[0.61rem] font-mono text-gray-500 uppercase">
        <div className="flex flex-col gap-1">
          <strong className="text-black dark:text-white font-bold text-sm tracking-tight font-sans capitalize">Андрій Антощак</strong>
          <span>Веброзробник і співзасновник Finita Studio</span>
        </div>
        <div className="flex flex-col gap-1">
          <span>Система: {sysInfo.os}</span>
          <span className="truncate max-w-[200px] md:max-w-[400px]" title={sysInfo.browser}>Браузер: {sysInfo.browser}</span>
        </div>
        <span>Львів, Україна · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}