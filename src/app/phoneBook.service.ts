
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PhoneBookInterface } from './PhoneBook/config/type';
import { CONTACTS } from './PhoneBook/config/contacts-fake';

@Injectable()
export class PhoneBookService {

  constructor() { }

  getContacts(): Observable<any> {
    // Todo: send the message _after_ fetching the heroes
    return of(CONTACTS);
  }

  getContact(id: number): Observable<any> {
    // Todo: send the message _after_ fetching the hero
    return of(CONTACTS.find(hero => hero.id === id));
  }
}



// import { Injectable } from '@angular/core';
//
// import { PhoneBookInterface } from './PhoneBook/config/type';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import {of} from 'rxjs/observable/of';
// import { CONTACTS } from './PhoneBook/config/contacts-fake';
//
// @Injectable()
// export class PhoneBookService {
//
//   public URL = './PhoneBook/config/phoneBook';
//
//   constructor(private http: HttpClient) { }
//
//   public getContacts(): Observable<any> {
//
//     return this.http.get(this.URL);
//   }
//
// }
