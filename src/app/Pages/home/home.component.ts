import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../Components/counter/counter.component';
import { BindingComponent } from '../../Components/binding/binding.component';
import { FormComponent } from '../../Components/form/form.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent, BindingComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'This is the Home Component';
  ifTrue = true;
  //this is for databinding to the bind-component
  signalBindingFromHome = signal('Signal Binding Value from Home Component');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`Pressed Key: ${event.key}`);
  }
}
