import { Component, OnInit } from '@angular/core';
import { ProjectorService } from 'src/app/services/projector.service';
import { Videoprojector } from 'src/app/models/videoprojector';

@Component({
  selector: 'app-edit-projector',
  templateUrl: './edit-projector.component.html',
  styleUrls: ['./edit-projector.component.css']
})
export class EditProjectorComponent implements OnInit {

  constructor(private projectorService: ProjectorService) { }
  projector: Videoprojector = new Videoprojector();
  submitted: boolean = false;
  ngOnInit() {
  }
  newProjector() {
    this.submitted=false;
    this.projector = new Videoprojector();
  }

  updateProjector() {
    this.projectorService.editProjector(this.projector)
      .subscribe(data => console.log(data), error => console.log(error));
    this.projector=new Videoprojector();
  }

  onSubmit() {
    this.submitted=true;
    this.updateProjector();
  }
}
