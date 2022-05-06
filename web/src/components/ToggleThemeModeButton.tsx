import { useEffect } from 'react';

import { Moon, Sun } from 'phosphor-react';

import { useLocalStorage } from '../hooks/useLocalStorage';

type ThemeMode = 'dark' | 'light';

export function ToggleThemeModeButton() {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode | undefined>(
    'theme',
    undefined
  );

  useEffect(() => {
    if (
      themeMode === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  function toggleTheme() {
    setThemeMode(oldTheme => (oldTheme == 'dark' ? 'light' : 'dark'));
  }

  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      className={[
        'flex justify-center items-center w-12 h-12 rounded-lg transition-colors duration-300',
        'hover:bg-surface-primary dark:hover:bg-dark-surface-primary',
        'bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover',
      ].join(' ')}
    >
      {themeMode === 'dark' ? (
        <Sun className="w-6 h-6 text-text-primary dark:text-dark-text-primary" />
      ) : (
        <Moon className="w-6 h-6 text-text-primary dark:text-dark-text-primary" />
      )}
    </button>
  );
}
