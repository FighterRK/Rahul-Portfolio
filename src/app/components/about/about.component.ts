import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  public count:number = 0;

  ngOnInit(): void {
    this.projectCount();
    setInterval(() => {
      
    }, 100);

      
  }

  projectCount(){
    this.count=0
    let interval = setInterval(() => {
      if (this.count <46){
        this.count++;
      }else{
        clearInterval(interval)
      }
      
    }, 100);

  }

  





}
