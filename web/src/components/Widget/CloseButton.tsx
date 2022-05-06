import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className={[
        'top-5 right-5 absolute rounded-full',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'text-light-text-secondary dark:text-dark-text-secondary',
        'hover:text-light-text-primary dark:hover:text-dark-text-primary',
        'hover:bg-light-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover',
        'focus:ring-offset-light-surface-primary dark:focus:ring-offset-dark-surface-primary',
        'focus:ring-brand transition-colors',
      ].join(' ')}
      title="Fechar formulário"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
