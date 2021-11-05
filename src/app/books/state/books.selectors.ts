import { BooksState,booksAdapter } from './books.state';
import { RouterStateUrl } from './../../store/router/custom-serializer';
import { getCurrentRoute } from './../../store/router/router.selector';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const BOOKS_STATE_NAME = 'books';
const getBooksState = createFeatureSelector<BooksState>(BOOKS_STATE_NAME);
export const booksSelectors = booksAdapter.getSelectors();

export const getBooks = createSelector(getBooksState, booksSelectors.selectAll);
export const getBooksEntities = createSelector(
    getBooksState,
  booksSelectors.selectEntities
);

export const getPostById = createSelector(
  getBooksEntities,
  getCurrentRoute,
  (books, route: RouterStateUrl) => {
    return books ? books[route.params['id']] : null;
  }
);
