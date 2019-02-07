import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../../models/formation';

@Component({
    selector: 'app-manage-formations',
    templateUrl: './manage-formations.component.html',
    styleUrls: ['./manage-formations.component.css']
})
export class ManageFormationsComponent implements OnInit {

    constructor(private formationService: FormationService) { }

    ngOnInit() {
    }

    formations: Observable<Formation[]>;

    loadFormations() {
        this.formations = this.formationService.getAllFormations();
    }
}
