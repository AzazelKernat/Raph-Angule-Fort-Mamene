import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technicians-list',
  templateUrl: './technicians-list.component.html',
  styleUrls: ['./technicians-list.component.css']
})
export class TechniciansListComponent implements OnInit {
  technicians: Observable<Technician[]>;
  newTechnician: Technician;

  constructor(private technicianService: TechnicianService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.technicians = this.technicianService.getTechniciansList();
  }
}
