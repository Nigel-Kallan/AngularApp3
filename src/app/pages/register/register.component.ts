import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({
      username: this.username,
      password: this.password
    }).subscribe(() => {
      alert("Registered!");
    });
  }
}