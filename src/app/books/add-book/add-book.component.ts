import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addBook } from '../state/books.actions';
import { Book } from '../../models/books.models';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors() {
    const descriptionForm = this.bookForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return 'Description is required';
      }

      if (descriptionForm.errors.minlength) {
        return 'Description should be of minimum 10 characters length';
      }
    }
  }

  onAddBook() {
    if (!this.bookForm.valid) {
      return;
    }

    const id = Math.floor(Math.random() * (100 - 0)) + 0;
    const book1: Book = {
      title: this.bookForm.value.title,
      id: id.toString(),
      description: this.bookForm.value.description,
    };
    //this.store.dispatch(addPostSuccess({ post }));
    const book = { ...book1, id:book1.id };
    this.store.dispatch(addBook({ book }));
  }
}
