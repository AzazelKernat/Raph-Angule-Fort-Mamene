import { InternService } from './../../services/intern.service';
import { Component, OnInit } from '@angular/core';
import { Intern } from '../../models/intern';

@Component({
  selector: 'app-create-interns',
  templateUrl: './create-interns.component.html',
  styleUrls: ['./create-interns.component.css']
})
export class CreateInternsComponent implements OnInit {

  constructor(private internService: InternService) { }

  intern: Intern = new Intern();
  submitted: boolean = false;

  ngOnInit() {
  }

  newIntern() {
    this.submitted = false;
    this.intern = new Intern();
  }

  save() {
    this.internService.createIntern(this.intern)
      .subscribe(data => console.log(data), error => console.log(error));
    this.intern = new Intern();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  } 

}
