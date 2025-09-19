import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent  implements OnInit{

  repos: any[] = [];

ngOnInit() {
  fetch('https://api.github.com/users/FighterRK/repos')
    .then(res => res.json())
    .then(data => this.repos = data);
}


}
