import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.css'],
})
export class CounterComponent {
  @Input() counter: number = 0; // Default value is 0
  @Input() step: number = 1; // Default step value is 1
  increment() {
    this.counter += this.step;
  }
  decrement() {
    this.counter -= this.step;
  }
  reset() {
    this.counter = 0;
  }
  constructor() {
    console.log('CounterComponent initialized ');
  }
}
