import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';

export function WidgetButton() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group self-end hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-300 disabled:focus:bg-brand-500">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
