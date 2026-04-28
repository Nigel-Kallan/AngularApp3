import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

export const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' } // ✅ default
];