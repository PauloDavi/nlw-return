import { FormEvent, useState } from 'react';

import { ArrowLeft } from 'phosphor-react';

import { api } from '../../../libs/api';
import { BrandButton } from '../../BrandButton';
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
            'focus:ring-offset-surface-primary dark:focus:ring-offset-dark-surface-primary',
            'text-text-secondary dark:text-dark-text-secondary',
            'hover:text-text-primary dark:hover:text-dark-text-primary',
            'hover:bg-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover',
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
            'text-text-primary dark:text-dark-text-primary',
            'border-stroke dark:border-dark-stroke',
            'placeholder-text-secondary dark:placeholder-dark-text-secondary',
            'scrollbar-thumb-surface-secondary-hover dark:scrollbar-thumb-dark-surface-secondary-hover',
          ].join(' ')}
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <BrandButton type="submit" disabled={!comment || isSendingFeedback}>
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </BrandButton>
        </footer>
      </form>
    </>
  );
}
