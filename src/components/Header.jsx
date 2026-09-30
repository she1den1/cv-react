export default function Header({ theme, setTheme }) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-700 max-w-[1260px] mx-auto">
      <a href="#top" className="font-bold text-xl no-underline tracking-tighter">AA<span className="text-blue-600">.</span></a>
      <span className="hidden md:block text-gray-500 text-xs tracking-wider uppercase">Самостійність у підході. Партнерство в роботі.</span>
      <div className="flex items-center gap-5">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-2 px-3 py-2 text-[0.62rem] uppercase font-mono border border-gray-300 dark:border-gray-700 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          <span>{theme === 'dark' ? '☀' : '☾'}</span>
          <span className="hidden sm:inline">{theme === 'dark' ? 'Світла' : 'Темна'}</span>
        </button>
      </div>
    </header>
  );
}