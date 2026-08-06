import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.scss',
})
export class ScrollProgress implements OnInit {
  protected readonly progress = signal(0);

  ngOnInit(): void {
    this.updateProgress();
  }

  @HostListener('window:scroll')
  protected updateProgress(): void {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const nextProgress = documentHeight > 0 ? window.scrollY / documentHeight : 0;

    this.progress.set(Math.min(1, Math.max(0, nextProgress)));
  }
}
