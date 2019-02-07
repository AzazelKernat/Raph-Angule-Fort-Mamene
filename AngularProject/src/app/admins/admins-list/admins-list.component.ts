import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Observable } from 'rxjs';
import { AdminService } from './../../services/admin.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins: Observable<Admin[]>;
  newAdmin: Admin;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.admins = this.adminService.getAdminsList();
  }

}
