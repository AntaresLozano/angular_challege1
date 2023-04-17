import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  initalState = true;
  clicked = false;


  toggleClicked() {
    this.initalState = false
    this.clicked = !this.clicked
    console.log(this.clicked)
  }

}
