import { Component } from '@angular/core';
import {Typ} from "../shared/interfaces/Kindergarden";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  protected readonly Typ = Typ;
}
