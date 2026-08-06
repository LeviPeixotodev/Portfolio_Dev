import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const reveal = trigger('reveal', [
  state('hidden', style({ opacity: 0, transform: 'translateY(18px) scale(0.985)' })),
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(
    'hidden => visible',
    animate(
      '300ms cubic-bezier(0.16, 1, 0.3, 1)',
      keyframes([
        style({ opacity: 0, transform: 'translateY(18px) scale(0.985)', offset: 0 }),
        style({ opacity: 0.72, transform: 'translateY(5px) scale(0.995)', offset: 0.65 }),
        style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 }),
      ]),
    ),
  ),
]);
