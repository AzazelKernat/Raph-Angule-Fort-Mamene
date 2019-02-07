import { Component, OnInit, Input } from '@angular/core';
import { Gestionnaire } from 'src/app/models/gestionnaire';

@Component({
  selector: 'app-single-gestionnaire',
  templateUrl: './single-gestionnaire.component.html',
  styleUrls: ['./single-gestionnaire.component.css']
})
export class SingleGestionnaireComponent implements OnInit {

  @Input() gestionnaire: Gestionnaire;

  constructor() { }

  ngOnInit() {
  }

}
