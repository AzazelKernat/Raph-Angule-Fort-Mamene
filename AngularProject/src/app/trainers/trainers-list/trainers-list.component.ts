import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css']
})
export class TrainersListComponent implements OnInit {

  trainers: Observable<Trainer[]>;
  newTrainer: Trainer;

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.trainers = this.trainerService.getTrainersList();
  }


}
