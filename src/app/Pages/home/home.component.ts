import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../Components/counter/counter.component';
import { BindingComponent } from '../../Components/binding/binding.component';
import { FormComponent } from '../../Components/form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, BindingComponent, FormComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = ' Home Component';
  ifTrue = true;
  //this is for databinding to the bind-component
  signalBindingFromHome = signal('Signal Binding Value from Home Component');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`Pressed Key: ${event.key}`);
  }
}
