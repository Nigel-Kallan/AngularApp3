import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

export const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'update/:id', component: UpdateBookComponent }, // ✅ comma here
  { path: '', redirectTo: 'list', pathMatch: 'full' }     // ✅ last one NO comma needed
];