import { ComputerService } from './../../services/computer.service';
import { Component, OnInit } from '@angular/core';
import { Computer } from '../../models/computer';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {

  constructor(private computerService: ComputerService) { }

  computer: Computer = new Computer();
  submitted: boolean = false;

  ngOnInit() {
  }

  newComputer() {
    this.submitted=false;
    this.computer = new Computer();
  }

  save() {
    this.computerService.createComputer(this.computer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.computer=new Computer();
  }

  onSubmit() {
    this.submitted=true;
    this.save();
  }

}
