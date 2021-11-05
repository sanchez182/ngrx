import {
    addBook
  } from './books.actions';
  import { createReducer, on } from '@ngrx/store';
  import { initialState, booksAdapter } from './books.state';
  
  const _booksReducer = createReducer(
    initialState,
    on(addBook, (state, action) => {
      return booksAdapter.addOne(action.book, state);
    }),
  );
  
  export function booksReducer(state, action) {
    return _booksReducer(state, action);
  }
  