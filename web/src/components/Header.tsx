import { List, User } from 'phosphor-react';

import { ToggleThemeModeButton } from './ToggleThemeModeButton';

export function Header() {
  return (
    <header className="flex bg-surface-secondary dark:bg-dark-surface-secondary min-w-screen h-[4.5rem]">
      <div className="flex items-center justify-end sm:justify-between flex-1 max-w-6xl mx-auto px-4">
        <h1 className="hidden sm:flex items-center px-4 h-10 rounded-lg font-bold text-md bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover">
          🐛 BUG FOUND
        </h1>

        <div className="hidden md:flex justify-between items-center max-w-md gap-6">
          <button className="w-24 h-4 rounded-lg bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover" />
          <button className="w-24 h-4 rounded-lg bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover" />
          <button className="w-24 h-4 rounded-lg bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover" />
          <button className="w-24 h-4 rounded-lg bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover" />
        </div>

        <div className="flex justify-between items-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover">
            <User className="w-6 h-6 text-text-primary dark:text-dark-text-primary" />
          </button>
          <ToggleThemeModeButton />
          <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-secondary-hover dark:bg-dark-surface-secondary-hover">
            <List className="w-6 h-6 text-text-primary dark:text-dark-text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
