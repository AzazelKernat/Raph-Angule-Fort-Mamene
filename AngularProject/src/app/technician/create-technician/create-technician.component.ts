import { Component, OnInit } from '@angular/core';
import { TechnicianService } from './../../services/technician.service';
import { Technician } from '../../models/technician';

@Component({
  selector: 'app-create-technician',
  templateUrl: './create-technician.component.html',
  styleUrls: ['./create-technician.component.css']
})
export class CreateTechnicianComponent implements OnInit {

  constructor(private technicianService: TechnicianService) { }

  technician: Technician = new Technician();
  submitted: boolean = false;

  ngOnInit() {
  }

  newTechnician() {
    this.submitted = false;
    this.technician = new Technician();
  }

  save() {
    this.technicianService.createTechnician(this.technician)
      .subscribe(data => console.log(data), error => console.log(error));
    this.technician = new Technician();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
