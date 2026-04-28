import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost/api/books.php';

  constructor(private http: HttpClient) {}

  // ✅ GET all books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // ✅ ADD book (with FormData for file upload)
  addBook(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  // ✅ DELETE book
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  getBookById(id: number) {
    return this.http.get<any>(`${this.apiUrl}?id=${id}`);
  }

  // ✅ UPDATE book (FormData for file upload)
  updateBook(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

}