import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerationform: FormGroup;
  constructor() {
    this.registerationform = new FormGroup(
      {
        Name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ]),
        Email: new FormControl('', [
          Validators.required,
          Validators.email,
          // Validators.pattern('^[w._%+-]+@[a-zA-Z]+.[a-zA-Z]{2,}$'),
        ]),
        UserName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        Password: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$'),
        ]),
        ConfirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatchValidator }
    );
  }
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('Password')?.value;
    const confirmPassword = formGroup.get('ConfirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }
  handleFormSubmit() {
    if (this.registerationform.invalid) {
      this.registerationform.markAllAsTouched();
    } else {
      console.log('Form Submitted', this.registerationform.value);
    }
  }
}
