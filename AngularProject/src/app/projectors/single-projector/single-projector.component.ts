import { Component, OnInit, Input } from '@angular/core';
import { Videoprojector } from 'src/app/models/videoprojector';
import { ProjectorService } from 'src/app/services/projector.service';
@Component({
  selector: 'app-single-projector',
  templateUrl: './single-projector.component.html',
  styleUrls: ['./single-projector.component.css']
})
export class SingleProjectorComponent implements OnInit {

  @Input() videoprojector: Videoprojector;

  constructor(private projectorService: ProjectorService) { }

  ngOnInit() {
  }
  
deleteProjector(){
  this.projectorService.deleteProjector(this.videoprojector.code).subscribe(data => console.log(data),  error => console.log(error));
}
}
