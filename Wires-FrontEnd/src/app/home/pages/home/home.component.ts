import { Component } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

  ngOnInit() {
    const image = document.getElementsByClassName('parallax');
    new SimpleParallax(image, {
      scale: 1.2, // default is 1.5
      delay: 0.8, // default is 0.6
    });
  }
}
