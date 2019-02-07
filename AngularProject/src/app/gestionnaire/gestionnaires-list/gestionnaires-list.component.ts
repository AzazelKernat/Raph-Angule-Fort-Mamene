import { Component, OnInit } from '@angular/core';
import { Gestionnaire } from 'src/app/models/gestionnaire';
import { Observable } from 'rxjs';
import { GestionnaireService } from './../../services/gestionnaire.service';

@Component({
  selector: 'app-create-gestionnaire',
  templateUrl: './create-gestionnaire.component.html',
  styleUrls: ['./create-gestionnaire.component.css']
})
export class GestionnairesListComponent implements OnInit {

gestionnaires: Observable<Gestionnaire[]>;
  newGestionnaire: Gestionnaire;

  constructor(private gestionnaireService: GestionnaireService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.gestionnaires = this.gestionnaireService.getGestionnairesList();
  }

}
