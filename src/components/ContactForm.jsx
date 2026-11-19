import { useState, useEffect } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xyezzlpr'; // <-- встав свій endpoint з Formspree

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  topic: 'job_offer',
  message: ''
};

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Автоматичне відкриття через 1 хвилину (якщо користувач ще не закривав вікно у цій сесії)
  useEffect(() => {
    if (sessionStorage.getItem('contactClosed')) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactClosed', '1');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', text: 'Дякуємо! Повідомлення успішно надіслано.' });
        setFormData(EMPTY_FORM);
      } else {
        const result = await response.json().catch(() => ({}));
        const errorText = result.errors
          ? result.errors.map((err) => err.message).join(', ')
          : 'Помилка надсилання форми';
        setStatus({ type: 'error', text: errorText });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Помилка з’єднання з сервером.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 text-sm font-medium"
      >
        ✉️ Зворотний зв'язок
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white text-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
              aria-label="Закрити"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">Зворотний зв'язок</h3>

            {status.text && (
              <div
                className={`p-3 rounded-lg mb-4 text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ім’я *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Номер телефону *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Категорія звернення (Topic) *</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className={`${inputClass} bg-white`}
                >
                  <option value="job_offer">Пропозиція роботи</option>
                  <option value="project">Замовлення проєкту</option>
                  <option value="question">Загальне питання</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Повідомлення *</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClass}
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border border-slate-300 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Закрити
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Надсилання...' : 'Надіслати'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;