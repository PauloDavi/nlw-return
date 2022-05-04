import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      title="Fechar formulário"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
