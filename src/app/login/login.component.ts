import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  handleloginForm(loginForm: any) {
    if (loginForm.invalid) {
      Object.keys(loginForm.controls).forEach((controlName) => {
        loginForm.controls[controlName].markAsTouched();
      });
      return;
    }
    console.log(loginForm);
  }
}
