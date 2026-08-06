import { Component, inject } from '@angular/core';
import { BrandHoverService } from '../../shared/brand-hover.service';
import { reveal } from '../../shared/reveal.animation';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  animations: [reveal],
})
export class Nav {
  private readonly brandHover = inject(BrandHoverService);

  protected setBrandHover(active: boolean): void {
    this.brandHover.set(active);
  }
}
