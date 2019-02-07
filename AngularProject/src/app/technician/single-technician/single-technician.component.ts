import { Component, OnInit, Input } from '@angular/core';
import { Technician } from 'src/app/models/technician';

@Component({
  selector: 'app-single-technician',
  templateUrl: './single-technician.component.html',
  styleUrls: ['./single-technician.component.css']
})
export class SingleTechnicianComponent implements OnInit {
 @Input() technician: Technician;

  constructor() { }

  ngOnInit() {
  }

}
