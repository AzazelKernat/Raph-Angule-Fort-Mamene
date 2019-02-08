import { Component, OnInit } from '@angular/core';
import { ProjectorService } from 'src/app/services/projector.service';
import { Observable } from 'rxjs';
import { Videoprojector } from 'src/app/models/videoprojector';

@Component({
  selector: 'app-projectors-list',
  templateUrl: './projectors-list.component.html',
  styleUrls: ['./projectors-list.component.css']
})
export class ProjectorsListComponent implements OnInit {

  projectors: Observable<Videoprojector[]>;

  constructor(private projectorService: ProjectorService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.projectors = this.projectorService.getProjectorsList();

}
}
