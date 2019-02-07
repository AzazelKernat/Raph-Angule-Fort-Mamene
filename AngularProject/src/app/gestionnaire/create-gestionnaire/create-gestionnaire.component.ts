import { Component, OnInit } from '@angular/core';
import { GestionnaireService } from './../../services/gestionnaire.service';
import { Gestionnaire } from '../../models/gestionnaire';

@Component({
  selector: 'app-create-gestionnaire',
  templateUrl: './create-gestionnaire.component.html',
  styleUrls: ['./create-gestionnaire.component.css']
})
export class CreateGestionnaireComponent implements OnInit {

  constructor(private gestionnaireService: GestionnaireService) { }

 gestionnaire: Gestionnaire = new Gestionnaire();
 submitted: boolean = false;

  ngOnInit() {
  }

  newAdmin() {
    this.submitted = false;
    this.gestionnaire = new Gestionnaire();
  }

  save() {
    this.gestionnaireService.createGestionnaire(this.gestionnaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gestionnaire = new Gestionnaire();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
