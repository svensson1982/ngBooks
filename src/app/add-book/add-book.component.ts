import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.addBookForm = new FormGroup({
      'name': new FormControl(null),
      'author': new FormControl(null),
      'isbn': new FormControl(null),
      'publisher': new FormControl(null),
      'year': new FormControl(null)
    });
  }


  addNewBook(){
    this.booksService.addBook(this.addBookForm.value)
  }

}
