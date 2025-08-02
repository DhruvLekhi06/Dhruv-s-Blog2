import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-18 items-center justify-center rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:scale-105"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0.5 rounded-full bg-gradient-to-r from-brand to-brand-light transition-all duration-500 ${
        isDark ? 'translate-x-8' : 'translate-x-0'
      }`} style={{ width: '2rem' }} />
      
      <div className="relative z-10 flex w-full items-center justify-between px-2">
        <Sun className={`h-4 w-4 transition-all duration-300 ${
          !isDark ? 'text-white scale-110' : 'text-muted-foreground scale-90'
        }`} />
        <Moon className={`h-4 w-4 transition-all duration-300 ${
          isDark ? 'text-white scale-110' : 'text-muted-foreground scale-90'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;