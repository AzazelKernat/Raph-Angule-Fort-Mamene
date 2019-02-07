import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InternService } from './../../services/intern.service';
import { Intern } from './../../models/intern';

@Component({
  selector: 'app-interns-list',
  templateUrl: './interns-list.component.html',
  styleUrls: ['./interns-list.component.css']
})
export class InternsListComponent implements OnInit {

  interns: Observable<Intern[]>;
  newIntern: Intern;

  constructor(private internService: InternService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.interns = this.internService.getInternsList();
  }

}
