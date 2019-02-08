import { Component, OnInit } from '@angular/core';
import { Technician } from 'src/app/models/technician';
import { TechnicianService } from './../../services/technician.service';
import { Adress } from 'src/app/models/adress';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-edit-technician',
  templateUrl: './edit-technician.component.html',
  styleUrls: ['./edit-technician.component.css']
})
export class EditTechnicianComponent implements OnInit {

  constructor(private technicianService: TechnicianService) { }

  technician: Technician = new Technician();
  submitted: boolean = false;

  ngOnInit() {
    this.technician = new Technician();
    this.technician.adress=new Adress();
    this.technician.contact=new Contact();
  }

  newTechnician() {
    this.submitted=false;
    this.technician = new Technician();
  }

  update() {
    this.technicianService.editTechnician(this.technician)
      .subscribe(data => {
        console.log(data[0]);
      });
    this.technician = new Technician();
    this.technician.adress=new Adress();
    this.technician.contact=new Contact();
  }

  onSubmit() {
    this.submitted = true;
    this.update();
  }

}
