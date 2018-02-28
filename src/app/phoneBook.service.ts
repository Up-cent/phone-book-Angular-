
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {PhoneBookInterface} from './PhoneBook/config/type';
import {ReplaySubject} from 'rxjs/ReplaySubject';




@Injectable()
export class PhoneBookService {


  constructor(private http: HttpClient) { }

  public getContacts(): Observable<PhoneBookInterface[]> {
    const url = './assets/phones.json';
    const rezult = new ReplaySubject<PhoneBookInterface[]>(1);

    this.http.get(url)
      .subscribe(
        (data: PhoneBookInterface[]) => rezult.next(data),
        (err) => rezult.error(err),
      );

    return rezult.asObservable();
  }

}
