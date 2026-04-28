import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe((res: any) => {
      if (res.success) {
        alert("Login successful");
        this.router.navigate(['/list']);
      } else {
        alert("Invalid login");
      }
    });
  }
}