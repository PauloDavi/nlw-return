import { useState } from 'react';

import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';

import { Loading } from '../Loading';

interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({
  onScreenshotTook,
  screenshot,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        className={[
          'p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end transition-colors',
          'text-light-text-secondary dark:text-dark-text-secondary',
          'hover:text-light-text-primary dark:hover:text-dark-text-primary',
        ].join(' ')}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className={[
        'p-2 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2',
        'bg-light-surface-secondary dark:bg-dark-surface-secondary',
        'focus:ring-brand transition-colors',
        'hover:bg-light-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover',
        'focus:ring-offset-light-surface-primary dark:focus:ring-offset-dark-surface-primary',
      ].join(' ')}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary" />
      )}
    </button>
  );
}
