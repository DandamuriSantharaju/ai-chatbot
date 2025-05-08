import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  passwordError: boolean = false;
  passwordMismatch: boolean = false;

  onSubmit() {
    // Password validation pattern (at least 10 characters, start with capital, contain small letter, number, and '@')
    const passwordPattern = /^[A-Z](?=.*[a-z])(?=.*[0-9])(?=.*[@]).{9,}$/;

    if (!passwordPattern.test(this.password)) {
      this.passwordError = true;
      return;
    } else {
      this.passwordError = false;
    }

    // Confirm password validation
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    } else {
      this.passwordMismatch = false;
    }

    console.log("Sign Up Successful!");
    console.log("First Name:", this.firstName);
    console.log("Last Name:", this.lastName);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
