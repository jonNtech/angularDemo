import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { User } from '../../Models/User';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() formSubmit = new EventEmitter<User>();
  @Output() formCancel = new EventEmitter<void>();

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // If we receive a user, populate the form
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        // Typically we don't fill password fields when editing
      });
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      const confirmErrors = confirmPassword?.errors || {};
      if (confirmErrors['passwordMismatch']) {
        delete confirmErrors['passwordMismatch'];
      }

      confirmPassword?.setErrors(
        Object.keys(confirmErrors).length ? confirmErrors : null
      );
      return null;
    }
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    // Extract form values
    const formValues = this.userForm.value;

    // Create a User object to emit
    const userToEmit = new User(
      this.user?.id || 0, // Use existing ID or 0 for new users
      formValues.name,
      formValues.email,
      formValues.password
    );

    // Emit the user to the parent component
    this.formSubmit.emit(userToEmit);
  }

  onReset() {
    this.userForm.reset();
    this.formCancel.emit();
  }
}
