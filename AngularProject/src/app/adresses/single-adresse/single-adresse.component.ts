import { Adress } from './../../models/adress';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-adresse',
  templateUrl: './single-adresse.component.html',
  styleUrls: ['./single-adresse.component.css']
})
export class SingleAdresseComponent implements OnInit {

  @Input() adress: Adress;
  constructor() { }

  ngOnInit() {

    console.log(this.adress)
  }

}
