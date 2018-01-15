import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { PassportComponent } from './passport/passport.component';
import { AddBookComponent } from './add-book/add-book.component';

const appRoutes: Routes = [
  {path: '', component: PassportComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
