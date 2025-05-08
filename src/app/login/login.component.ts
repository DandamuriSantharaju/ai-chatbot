import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';
  // onSubmit() {
  //   console.log('Email:', this.email);
  //   console.log('Password:', this.password);
  // }

  username: string = '';
  password: string = '';
  passwordError: boolean = false;

  onSubmit() {
    // Password validation pattern
    const passwordPattern = /^[A-Z][a-z0-9]*@.*$/;

    if (!passwordPattern.test(this.password)) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      console.log("Form Submitted Successfully!");
      console.log("Username:", this.username);
      console.log("Password:", this.password);
    }
  }
}
