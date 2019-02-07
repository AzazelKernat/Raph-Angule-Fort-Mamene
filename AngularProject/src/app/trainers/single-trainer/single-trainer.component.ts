import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-single-trainer',
  templateUrl: './single-trainer.component.html',
  styleUrls: ['./single-trainer.component.css']
})
export class SingleTrainerComponent implements OnInit {

  @Input() trainer: Trainer;
  constructor() { }

  ngOnInit() {
  }

}
