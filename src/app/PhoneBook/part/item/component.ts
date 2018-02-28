
import {Component, Input, OnInit} from '@angular/core';
import { PhoneBookInterface } from '../../config/type';

@Component({
  selector: '[app-phone-book-item]',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookItemComponent implements OnInit {

  @Input() public contacts: PhoneBookInterface[];

  constructor() { }

  ngOnInit() {
  }

}
