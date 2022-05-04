import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: 'Imagem de um inceto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
