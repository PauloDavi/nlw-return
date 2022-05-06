import { MailAdapter } from '../adapters/mail-adapter';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute({ comment, type, screenshot }: SubmitFeedbackUseCaseRequest) {
    if (!comment) {
      throw new Error('Comment is required');
    }

    if (!type) {
      throw new Error('Type is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64,')) {
      throw new Error('Screenshot must be a base64 encoded PNG image');
    }

    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo de feedback: ${type}</p><br/>`,
        `<p>Comentário: ${comment}</p><br/>`,
        screenshot ? `<img src="${screenshot}" />` : '',
        '</div>',
      ].join(''),
    });
  }
}
