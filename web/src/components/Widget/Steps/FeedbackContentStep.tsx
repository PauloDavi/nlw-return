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
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
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
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent"
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
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-300 disabled:focus:bg-brand-500 disabled:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
