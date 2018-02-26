import { Component, OnInit } from '@angular/core';
import { PHONES } from '../fake-phones';

@Component({
  selector: 'app-phone-book',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookComponent implements OnInit {

  phones: PHONES;

  constructor() { }

  ngOnInit() {
  }

}
