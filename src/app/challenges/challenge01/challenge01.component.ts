import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge01',
  standalone: true,
  imports: [],
  templateUrl: './challenge01.component.html',
  styleUrl: './challenge01.component.css'
})
export class Challenge01Component {
  message = '';

  handleClick() {
    this.message = 'Button Clicked!';
  }
}
