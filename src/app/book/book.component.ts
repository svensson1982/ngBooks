import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: {id: number};
  bookData = [];
  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = {
      id : this.route.snapshot.params['id']
    }
    
    this.booksService.getBooksById(this.book.id)
      .subscribe(
        (data) => {
          this.bookData.push(data);
          console.log(this.bookData);
        }
      );

    this.route.params
      .subscribe(
        (params: Params) => {
          this.book.id = params['id'];
      });
  }

  deleteBook(){
    this.booksService.deleteBook(this.book.id);
  }



}
