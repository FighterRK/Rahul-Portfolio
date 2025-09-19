import { AfterViewInit, Component,  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IntroComponent } from "./components/intro/intro.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesSectionComponent } from "./components/services-section/services-section.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { WorksComponent } from "./components/works/works.component";
import { ContactComponent } from "./components/contact/contact.component";
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ IntroComponent, NavbarComponent, AboutComponent, ServicesSectionComponent, ExperiencesComponent, WorksComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit ,OnInit {

  constructor(private router: Router) {}


    ngOnInit() {
    //  Only run once on app load
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        first() // take only the very first navigation event
      )
      .subscribe(() => {
        if (this.router.url !== '/intro') {
          this.router.navigate(['/intro'], { replaceUrl: true }).then(() => {
            const el = document.getElementById('intro');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      });
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('div[id]');

    // Track scrolling and update route
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              this.router.navigate([id], { replaceUrl: true });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}

