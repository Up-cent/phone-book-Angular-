
import { Component, OnInit } from '@angular/core';
import { PhoneBookInterface } from './config/type';
import {PhoneBookService} from '../phoneBook.service';

@Component({
  selector: '[app-phone-book]',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookComponent implements OnInit {

  contacts: PhoneBookInterface[];

  constructor(private phoneService: PhoneBookService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.phoneService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

}
