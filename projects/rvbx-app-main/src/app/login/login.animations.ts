import { trigger, transition, style, group, query as q, animateChild, animate } from '@angular/animations';

export function query(s, a) {
  return q(s, a, { optional: true });
}

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LoginFormPage => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ErrorTemplatePage => LoginFormPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
    transition('RegisterPage => LoginFormPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
    transition('RegisterPage => RegisterSuccessPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('RegisterSuccessPage => LoginFormPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ResetPasswordPage => LoginFormPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ResetPasswordPage => SendPasswordPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ResetPasswordPage => ErrorTemplatePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SendPasswordPage => LoginFormPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
