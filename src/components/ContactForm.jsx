import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  // Показуємо модальне вікно через 1 хвилину (60000 мс)
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Відправка на наш майбутній Node.js бекенд
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      if (response.ok) {
        setStatus('Успішно надіслано!');
        e.target.reset();
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus(`Помилка: ${result.error}`);
      }
    } catch (error) {
      setStatus('Не вдалося з\'єднатися із сервером.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-[#f4f1e9] dark:bg-[#171914] p-8 rounded-xl w-full max-w-lg shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Зворотний зв'язок</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black dark:hover:text-white uppercase text-xs font-mono">Закрити</button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm font-bold gap-1">Ім’я
            <input name="name" type="text" required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-transparent font-normal" />
          </label>
          <label className="flex flex-col text-sm font-bold gap-1">Email
            <input name="email" type="email" required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-transparent font-normal" />
          </label>
          {/* Додаткове поле за варіантом 2 */}
          <label className="flex flex-col text-sm font-bold gap-1">Тема (Topic)
            <select name="topic" required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-transparent font-normal">
              <option value="" className="text-black">Оберіть тему...</option>
              <option value="Проєкт" className="text-black">Проєкт</option>
              <option value="Консультація" className="text-black">Консультація</option>
              <option value="Інше" className="text-black">Інше</option>
            </select>
          </label>
          <label className="flex flex-col text-sm font-bold gap-1">Заголовок (Subject)
            <input name="subject" type="text" required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-transparent font-normal" />
          </label>
          <label className="flex flex-col text-sm font-bold gap-1">Повідомлення
            <textarea name="message" rows="3" required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-transparent font-normal"></textarea>
          </label>
          
          <button type="submit" className="mt-2 bg-blue-600 text-white p-4 rounded font-bold hover:bg-blue-700 transition-colors">
            Надіслати
          </button>
          {status && <p className="text-sm mt-2 text-center text-blue-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}