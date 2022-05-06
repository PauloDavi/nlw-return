import successIconUrl from '../../../assets/success.svg';
import { CloseButton } from '../CloseButton';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successIconUrl} alt="Ícone de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          onClick={onFeedbackRestartRequested}
          className={[
            'py-2 px-6 mt-6 rounded-md border-transparent text-sm leading-6',
            'bg-surface-secondary dark:bg-dark-surface-secondary',
            'hover:bg-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover',
            'focus:ring-offset-surface-primary dark:focus:ring-offset-dark-surface-primary',
            'focus:ring-brand disabled:opacity-50 disabled:hover:bg-brand-hover disabled:focus:bg-brand',
            'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          ].join(' ')}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
