import { BOOKS_STATE_NAME } from './state/books.selectors';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { booksReducer } from './state/books.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    children: [
      { path: 'add', component: AddBookComponent },
    ],
  },
];


@NgModule({
  declarations: [AddBookComponent, BookListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(BOOKS_STATE_NAME, booksReducer),
  ]
})
export class BooksModule { }
