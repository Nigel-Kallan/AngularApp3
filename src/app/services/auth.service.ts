import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost/api/auth.php';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.api}?action=register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.api}?action=login`, data);
  }
}