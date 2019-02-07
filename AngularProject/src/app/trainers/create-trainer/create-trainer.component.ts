import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-create-trainer',
  templateUrl: './create-trainer.component.html',
  styleUrls: ['./create-trainer.component.css']
})
export class CreateTrainerComponent implements OnInit {

  constructor(private trainerService: TrainerService) { }
  trainer: Trainer = new Trainer();
  submitted: boolean = false;

  ngOnInit() {
  }

  newTrainer() {
    this.submitted = false;
    this.trainer = new Trainer();
  }

  save() {
    this.trainerService.createTrainer(this.trainer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trainer = new Trainer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  } 

}
