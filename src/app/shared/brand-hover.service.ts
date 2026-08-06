import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrandHoverService {
  readonly active = signal(false);

  set(active: boolean): void {
    this.active.set(active);
  }
}
