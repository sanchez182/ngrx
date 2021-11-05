import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/books.models';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getBooks } from '../state/books.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description'];
  books: Observable<Book[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books = this.store.select(getBooks);
  }

}
