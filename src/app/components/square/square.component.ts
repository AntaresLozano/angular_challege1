import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  initalState = true;
  clicked = false;
  @Input() state = ''

  toggleClicked() {
    this.initalState = false
    this.clicked = !this.clicked
    if(this.clicked){
      this.state = 'x'
    }else{
      this.state = 'o'
    }

  }

}
