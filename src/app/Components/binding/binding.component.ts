import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  regularBinding = 'Regular Binding Value';

  // angular 16 or up
  signalBinding = signal('Signal Binding Value');
  //signalBinding = input('Signal Binding Value');
}
