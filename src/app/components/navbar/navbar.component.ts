import { Component} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public isExpand : boolean = false;

  constructor(private router: Router) {}

  async navigateAndScroll(id: string) {
    this.isExpand = true;

    // Navigate to route
    await this.router.navigate(['/' + id]);

    // Wait for navigation, then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }


  

}
