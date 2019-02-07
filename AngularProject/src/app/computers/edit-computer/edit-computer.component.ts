import { ComputerService } from './../../services/computer.service';
import { Component, OnInit } from '@angular/core';
import { Computer } from '../../models/computer';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {

  constructor(private computerService: ComputerService) { }

  computer: Computer = new Computer();
  submitted: boolean = false;

  ngOnInit() {
  }

  newComputer() {
    this.submitted=false;
    this.computer = new Computer();
  }

  update() {
    this.computerService.editComputer(this.computer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.computer=new Computer();
  }

  onSubmit() {
    this.submitted=true;
    this.update();
  }

}
