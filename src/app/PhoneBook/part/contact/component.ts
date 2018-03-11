
import {Component, Input} from '@angular/core';
import { PhoneBookInterface } from '../../config/type';

@Component({
  selector: '[app-phone-book-contact]',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookItemComponent {

  @Input() public contacts: PhoneBookInterface[];

  addContact(name: string, surname: string, phone: number): void {
    if (!name || ! surname || !phone) { return; }

    const contact  = {
      name: name,
      surname: surname,
      phone: phone
    };

    this.contacts.push(contact);
  }
}
