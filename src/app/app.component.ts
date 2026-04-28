import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],  // ✅ REQUIRED
  template: `
    <h1>Book App</h1>

    <nav>
      <a routerLink="/list">Book List</a> |
      <a routerLink="/add">Add Book</a> |
      <a routerLink="/register">Register</a> |
      <a routerLink="/login">Login</a>
    </nav>

    <router-outlet></router-outlet>   <!-- 🔥 THIS IS CRITICAL -->
  `
})
export class AppComponent {}