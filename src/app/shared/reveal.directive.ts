import { AfterViewInit, Directive, ElementRef, OnDestroy, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  exportAs: 'appReveal',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly state = signal<'hidden' | 'visible'>('visible');

  private observer?: IntersectionObserver;

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.setState('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.setState('visible');
          this.observer?.disconnect();
          return;
        }

        this.setState('hidden');
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  get animationState(): 'hidden' | 'visible' {
    return this.state();
  }

  private setState(state: 'hidden' | 'visible'): void {
    this.state.set(state);
  }
}
