import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,                      // ✅ REQUIRED
  imports: [CommonModule, FormsModule],  // ✅ REQUIRED for ngModel
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'] // ✅ FIX
})
export class AddBookComponent {

  title = '';
  author = '';
  description = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  addBook() {

    if (!this.title.trim()) return; // prevent empty

    const newBook = {
      title: this.title,
      author: this.author,
      description: this.description
    };

    this.bookService.addBook(newBook).subscribe(() => {
      alert("Book added!");

      // clear form
      this.title = '';
      this.author = '';
      this.description = '';

      // go back to list
      this.router.navigate(['/list']);
    });
  }
}