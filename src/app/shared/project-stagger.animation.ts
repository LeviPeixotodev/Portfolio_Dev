import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const projectStagger = trigger('projectStagger', [
  state('hidden', style({ opacity: 0 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden => visible', [
    style({ opacity: 1 }),
    query(
      '.project',
      [
        style({ opacity: 0, transform: 'translateY(18px) scale(0.985)' }),
        stagger(
          '90ms',
          animate('300ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
        ),
      ],
      { optional: true },
    ),
  ]),
]);
