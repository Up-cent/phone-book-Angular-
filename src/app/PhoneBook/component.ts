import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from '../fake-phones';

@Component({
  selector: 'app-phone-book',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookComponent implements OnInit {
  phone: Phone = {
    name: 'Suzanna',
    surname: 'Vaimen',
    phone: 12312312
  };

  phones: PHONES;

  constructor() { }

  ngOnInit() {
  }

}
