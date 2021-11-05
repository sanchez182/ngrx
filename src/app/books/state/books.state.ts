import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Book } from './../../models/books.models';

export interface BooksState extends EntityState<Book> {}

export const booksAdapter = createEntityAdapter<Book>();

export const initialState: BooksState = booksAdapter.getInitialState();
