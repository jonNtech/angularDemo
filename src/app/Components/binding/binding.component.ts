import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  newInput: string = '';
  regularBinding = 'Regular Binding Value';

  // angular 16 or up
  //signalBinding = signal('Signal Binding Value');
  signalBinding = input('Signal Binding Value');
}
