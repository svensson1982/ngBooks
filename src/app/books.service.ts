import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BooksService {
  private oAuthURL = "http://localhost:8000/oauth/token";
  private apiURL = "http://localhost:8000/api/books";

  private books = [];
  private newBook = {};
  private accessToken = [];
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  private options = { headers: this.headers };

  //data to get Passport authentication
  private postData = {
    grant_type: "password",
    client_id: 2,   // the client ID generate before
    client_secret: "afWjAk5m0zalkoWJhgbtN64OuXzFzfYixTmVUFMN",   // the client secret generated before
    username: "baller@gmail.com", // an User in Laravel database
    password: "123456" // the user's password
  }
  constructor(private http: HttpClient) { }

  getToken() {
    console.log('auth');
    return this.http.post(this.oAuthURL, this.postData, this.options)
      .map(response => response);
  }

  testIt(){
    /*setInterval(()=>{
      console.log(1);
    },1000)*/
  }

  setToken(token) {
    this.headers.append('Authorization', 'Bearer ' + token);
    this.accessToken = token;
  }

  getBooks() {
    return this.http.get(this.apiURL, this.options)
      .map(response => response);
  }

  addBook(value) {
    console.log(value);
    this.http.post(this.apiURL, value, this.options)
      .subscribe(data => {
        this.getBooks()
          .subscribe(data => this.books.push(data));
      });
  }

  getBooksById(id){
    return this.http.get(this.apiURL + "/" + id, this.options)
      .map(response => {
        return response;
      });
  }

  deleteBook(id){
    
    let asd = this.http.delete(this.apiURL + "/" + id, this.options);
    console.log(asd);
      /*.map(response => {
        console.log(response);
        return response;
      });*/
  }

}
