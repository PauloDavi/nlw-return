import { CloseButton } from '../CloseButton';
import { FeedbackType, feedbackTypes } from '../feedbackTypes';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, { image, title }]) => (
          <button
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className={[
              'rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2',
              'border-transparent transition-transform hover:scale-105 focus:scale-105',
              'hover:border-brand focus:border-brand focus:outline-none',
              'bg-surface-secondary dark:bg-dark-surface-secondary',
            ].join(' ')}
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
