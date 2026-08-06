import { Component } from '@angular/core';
import { reveal } from '../../shared/reveal.animation';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  animations: [reveal],
})
export class Skills {}
