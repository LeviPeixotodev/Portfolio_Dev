import { Component } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Nav } from './components/nav/nav';
import { Projects } from './components/projects/projects';
import { ScrollProgress } from './components/scroll-progress/scroll-progress';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Hero, Skills, Projects, Contact, ScrollProgress],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
