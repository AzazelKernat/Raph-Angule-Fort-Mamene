import { Component, OnInit, Input } from '@angular/core';
import { Intern } from 'src/app/models/intern';

@Component({
  selector: 'app-single-intern',
  templateUrl: './single-intern.component.html',
  styleUrls: ['./single-intern.component.css']
})
export class SingleInternComponent implements OnInit {

  @Input() intern: Intern;

  constructor() { }

  ngOnInit() {
  }

}
