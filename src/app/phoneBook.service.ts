
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {PhoneBookInterface} from './PhoneBook/config/type';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class PhoneBookService {

  constructor(private http: HttpClient) { }

  private contactsUrl = './assets/phones.json';

  public getContacts(): Observable<PhoneBookInterface[]> {
    const result = new ReplaySubject<PhoneBookInterface[]>(1);

    this.http.get(this.contactsUrl)
      .subscribe(
        (data: PhoneBookInterface[]) => result.next(data),
        (err) => result.error(err),
      );

    return result.asObservable();
  }



}
