import { Component } from '@angular/core';
import { projectStagger } from '../../shared/project-stagger.animation';
import { reveal } from '../../shared/reveal.animation';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [reveal, projectStagger],
})
export class Projects {}
