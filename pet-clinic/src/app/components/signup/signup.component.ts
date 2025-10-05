import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
    } else {
     
      const userData = {
        name: this.firstName + ' ' + this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword, 
        isAdmin: 'false'
      };

 
      const headers = {
        'Content-Type': 'application/json',
      };

  
      this.http.post('http://localhost:8000/api/signup', userData, { headers })
        .subscribe({
          next: (response) => {
            console.log('Signup successful', response);
            alert("SignUp Successful please Login");
            this.router.navigate(['']);
          },
          error: (error) => {
            console.error('Error during signup', error);
          },
          complete: () => {
            console.log('Signup request complete');
          }
        });
    }
  }

}
