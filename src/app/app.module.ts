import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PHONE_BOOK_DECLARATIONS} from './PhoneBook/config/declarations';
import {PhoneBookService} from './phoneBook.service';
import {AppRoutingModule} from './app-routing.module';
import {AppEnterComponent} from './enter-page/component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PHONE_BOOK_DECLARATIONS,
    AppEnterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
