import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})


export class ServicesSectionComponent implements OnInit, AfterViewInit {

  slides = [
    { title: 'Web Application Development', text: 'Building scalable and responsive web apps using Angular.', icon: 'fa fa-code' },
    { title: 'Frontend UI/UX Development', text: 'Crafting user-friendly and visually appealing interfaces.', icon: 'fa fa-paint-brush' },
    { title: 'Data Visualization', text: 'Creating interactive charts and dashboards with D3.js.', icon: 'fa fa-bar-chart' },
    { title: 'Reusable Component Development', text: 'Designing modular and maintainable Angular components.', icon: 'fa fa-cubes' },
    { title: 'Performance Optimization', text: 'Optimizing Angular apps for speed and smooth experience.', icon: 'fa fa-tachometer' },
    { title: 'API Integration & State Management', text: 'Connecting apps with APIs and managing state effectively.', icon: 'fa fa-share-alt' }
  ];

  active = 3; // start from 4th slide (index 3)

  ngAfterViewInit(): void {
    this.loadShow();
  }

  loadShow() {
    const items = document.querySelectorAll<HTMLElement>('.slider .item');
    let stt = 0;

    // Reset active
    items[this.active].style.transform = `none`;
    items[this.active].style.zIndex = '1';
    items[this.active].style.filter = 'none';
    items[this.active].style.opacity = '1';

    // Right side
    for (let i = this.active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = '0';
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? '0' : '0.6';
    }

    // Left side
    stt = 0;
    for (let i = this.active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = '0';
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? '0' : '0.6';
    }
  }

  nextClick() {
    this.active = this.active + 1 < this.slides.length ? this.active + 1 : this.active;
    this.loadShow();
  }

  prevClick() {
    this.active = this.active - 1 >= 0 ? this.active - 1 : this.active;
    this.loadShow();
  }



  ngOnInit(): void {
    setTimeout(() => this.loadShow(), 0);

  }
}









