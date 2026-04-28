import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id!: number;

  title: string = '';
  author: string = '';
  description: string = '';

  selectedFile!: File;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  
    // 🔥 get ONE book
    this.bookService.getBookById(this.id).subscribe((book: any) => {
      if (book) {
        this.title = book.title;
        this.author = book.author;
        this.description = book.description;
      }
    });
  }

  // ✅ Handle file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // ✅ Update book
  updateBook() {

    if (!this.title.trim()) return;

    const formData = new FormData();

    formData.append('id', this.id.toString());
    formData.append('title', this.title);
    formData.append('author', this.author);
    formData.append('description', this.description);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.bookService.updateBook(formData).subscribe({
      next: () => {
        alert("Book updated successfully!");
        this.router.navigate(['/list']); // go back to list
      },
      error: (err) => {
        console.error("Update error:", err);
      }
    });
  }
}
