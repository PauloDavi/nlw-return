import { FormEvent, useState } from 'react';

import { ArrowLeft } from 'phosphor-react';

import { api } from '../../../libs/api';
import { Loading } from '../../Loading';
import { CloseButton } from '../CloseButton';
import { FeedbackType, feedbackTypes } from '../feedbackTypes';
import { ScreenShotButton } from '../ScreenShotButton';

interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackTypeStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);

  async function handleSubmitFeedBack(event: FormEvent) {
    setIsSendingFeedback(true);
    event.preventDefault();

    await api.post('/feedbacks', {
      type: feedbackType,
      screenshot,
      comment,
    });

    onFeedbackSent();
    setIsSendingFeedback(false);
  }

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          title="Voltar"
          className={[
            'focus:ring-brand',
            'top-5 left-5 absolute rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
            'focus:ring-offset-light-surface-primary dark:focus:ring-offset-dark-surface-primary',
            'text-light-text-secondary dark:text-dark-text-secondary',
            'hover:text-light-text-primary dark:hover:text-dark-text-primary',
            'hover:bg-light-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover',
          ].join(' ')}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedBack} className="my-4 w-full">
        <textarea
          className={[
            'min-w-[304px] w-full min-h-[112px] text-sm bg-transparent',
            'rounded-md focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-track-transparent',
            'focus:border-brand focus:ring-brand',
            'text-light-text-primary dark:text-dark-text-primary',
            'border-light-stroke dark:border-dark-stroke',
            'placeholder-light-text-secondary dark:placeholder-dark-text-secondary',
            'scrollbar-thumb-light-surface-secondary-hover dark:scrollbar-thumb-dark-surface-secondary-hover',
          ].join(' ')}
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <button
            type="submit"
            disabled={!comment || isSendingFeedback}
            className={[
              'p-2 rounded-md border-transparent flex-1 flex justify-center',
              'items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2',
              'text-text-on-brand-color',
              'focus:ring-offset-light-surface-primary dark:focus:ring-offset-dark-surface-primary',
              'disabled:focus:bg-brand disabled:cursor-not-allowed disabled:hover:bg-brand-hover',
              'focus:ring-offset-2 focus:ring-brand transition-colors disabled:opacity-50',
              'bg-brand',
            ].join(' ')}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
