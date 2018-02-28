
import {Component, Input, OnInit} from '@angular/core';
import { PhoneBookInterface } from '../../config/type';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneBookService } from '../../../phoneBook.service';

@Component({
  selector: '[app-phone-book-item-detail]',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookItemDetailComponent implements OnInit {

  @Input() public contact: PhoneBookInterface[];

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneBookService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  goBack(): void {
    this.location.back();
  }
}
