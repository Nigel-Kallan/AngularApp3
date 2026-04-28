import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,              // ✅ ADD THIS
  imports: [CommonModule],       // ✅ ADD THIS
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'] // ✅ FIX (plural)
})
export class BookListComponent implements OnInit {

  books: Book[] = [];   // ✅ store data

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);   // 🔍 debug
      this.books = data;
    });
  }

}