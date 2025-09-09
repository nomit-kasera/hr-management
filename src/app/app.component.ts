import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  ngOnInit(){
    this.onResize();
  }
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
}
