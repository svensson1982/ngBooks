import { Component, OnInit } from '@angular/core';
//injectable? why?
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})

export class PassportComponent implements OnInit, OnDestroy {
  id: number;
  private books = [];
  private newBook = {};
  private accessToken = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(){
    /*this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
        }
      )*/


    this.booksService.getToken()
      .subscribe(data => {
        this.booksService.setToken(data);
        this.booksService.getBooks()
            .subscribe(
              (data) => {
                this.books.push(data['books']);
                console.log(this.books);
                console.log(data);
              });
      });
    }
    
  ngOnDestroy(){
    //this.cities$.unsubscribe();
  }

}
