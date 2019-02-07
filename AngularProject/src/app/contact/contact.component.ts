import { Contact } from './../models/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  
  constructor() { }

  ngOnInit() {
    console.log(this.contact)
  }

}
