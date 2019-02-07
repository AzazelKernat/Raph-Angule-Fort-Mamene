import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  admin: Admin = new Admin();
  submitted: boolean = false;

  ngOnInit() {
  }

  newAdmin() {
    this.submitted = false;
    this.admin = new Admin();
  }

  save() {
    this.adminService.createAdmin(this.admin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.admin = new Admin();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
