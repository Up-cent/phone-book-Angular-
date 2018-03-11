
import {Component, Input} from '@angular/core';
import {PhoneBookInterface} from '../../config/type';

@Component({
  selector: '[app-phone-book-contact-edit]',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PhoneBookEditComponent {

  @Input() public contact: PhoneBookInterface;

  public edit = false;

  public onEdit(): void {
    this.edit = true;

  }

  save(): void {
    this.edit = false;
  }

}
