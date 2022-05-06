import { useState } from 'react';

import { FeedbackType } from './feedbackTypes';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div
      className={[
        'p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto',
        'bg-light-surface-primary dark:bg-dark-surface-primary',
      ].join(' ')}
    >
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
              onFeedbackRestartRequested={handleRestartFeedback}
            />
          )}
        </>
      )}

      <footer className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
        Feito com ♥ por{' '}
        <a
          className={[
            'underline underline-offset-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
            'transition-colors disabled:opacity-50 disabled:hover:bg-brand-hover disabled:focus:bg-brand focus:ring-brand',
            'focus:ring-offset-light-surface-primary dark:focus:ring-offset-dark-surface-primary',
          ].join(' ')}
          href="https://portfolio-paulo-davi.vercel.app/"
        >
          Paulo Davi
        </a>
      </footer>
    </div>
  );
}
