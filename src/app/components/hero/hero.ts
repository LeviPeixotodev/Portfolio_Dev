import { Component, inject } from '@angular/core';
import { BrandHoverService } from '../../shared/brand-hover.service';
import { reveal } from '../../shared/reveal.animation';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [reveal],
})
export class Hero {
  protected readonly brandHover = inject(BrandHoverService);
}
