import { Component, OnInit, Input } from '@angular/core';
import { Admin } from './../../models/admin';

@Component({
  selector: 'app-single-admin',
  templateUrl: './single-admin.component.html',
  styleUrls: ['./single-admin.component.css']
})
export class SingleAdminComponent implements OnInit {
  @Input() admin: Admin;

  constructor() { }

  ngOnInit() {
  }

}
