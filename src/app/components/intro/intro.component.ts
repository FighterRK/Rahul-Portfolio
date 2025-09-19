import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  dynamicWord = ['Focused','Evolving', 'Consistent','Inspired','Creative'];
  public currentWord = '';
  public currentIndex = 0;
  public rotationInterval : number |any;


  onHoveringdiv(){
    this.rotationInterval = setInterval(()=>{
      this.currentWord = this.dynamicWord[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.dynamicWord.length

    },800)

  }

  onLeavingDiv(){
    clearInterval(this.rotationInterval)
  }

}
