import { Book } from './../../models/books.models';
import { createAction, props } from '@ngrx/store';

export const ADD_BOOK_ACTION = '[books page] add book';

export const addBook = createAction(
    ADD_BOOK_ACTION, props<{ book: Book }>());
