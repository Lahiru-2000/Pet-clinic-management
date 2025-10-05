import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  onSubmit() {

    const loginData = {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    };

   
    this.authService.login(loginData).subscribe((response: any) => {
      console.log("response: ", response);
      if (response.success) {
        this.toastr.success('Login successful!', 'Success');

        this.router.navigate(['/dashboard']);

      } else {
        this.toastr.error('Authentication failed!', 'Error');

        this.email = '';
        this.password = '';
        this.rememberMe = false;
      }
    });
  }
}
