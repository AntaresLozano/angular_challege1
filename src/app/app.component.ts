import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tictac';

  squares = [
    {
      id:1,
      state: ''      
    },
    {
      id:2,
      state: ''      
    },
    {
      id:3,
      state: ''      
    },
    {
      id:4,
      state: ''      
    },
    {
      id:5,
      state: ''      
    },
    {
      id:6,
      state: ''      
    },
    {
      id:7,
      state: ''      
    },
    {
      id:8,
      state: ''      
    },
    {
      id:9,
      state: ''      
    }
  ]

}
