import { Component } from '@angular/core';
import { CounterComponent } from '../../Components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, CounterComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent {}
