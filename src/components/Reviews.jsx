import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Запит на отримання коментарів (варіант 2)
    fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка:', error));
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Відгуки клієнтів<span className="text-blue-600">.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map(review => (
          <div key={review.id} className="p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg capitalize mb-1">{review.name.substring(0, 30)}...</h3>
            <p className="text-sm text-blue-600 mb-4">{review.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}