import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  title: string = '';
  author: string = '';
  description: string = '';

  selectedFile!: File;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  // ✅ handle file input
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // ✅ add book using FormData (IMPORTANT)
  addBook() {

    if (!this.title.trim()) return;

    const formData = new FormData();

    formData.append('title', this.title);
    formData.append('author', this.author);
    formData.append('description', this.description);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.bookService.addBook(formData).subscribe({
      next: () => {
        alert("Book added successfully!");

        // clear form
        this.title = '';
        this.author = '';
        this.description = '';

        // go back to list
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.error("Add error:", err);
      }
    });
  }
}