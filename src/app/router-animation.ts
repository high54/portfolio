import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const slideInAnimations =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0), translateY(100%)'
        })
      ], { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0, transform: 'scale(1), translateY(0)' }),
          animate('600ms ease', style({ opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]);
