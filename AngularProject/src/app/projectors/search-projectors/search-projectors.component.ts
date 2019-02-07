import { Component, OnInit } from '@angular/core';
import { Videoprojector } from 'src/app/models/videoprojector';
import { Observable } from 'rxjs';
import { ProjectorService } from 'src/app/services/projector.service';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-search-projectors',
  templateUrl: './search-projectors.component.html',
  styleUrls: ['./search-projectors.component.css']
})
export class SearchProjectorsComponent implements OnInit {

  projector: Videoprojector = new Videoprojector();
  projectors: Observable<Videoprojector[]>;

  constructor(private projectorService: ProjectorService) { }

  ngOnInit() {
    // this.projector.room = new Room();
  }
  searchProjectorByCode() {
    this.projectorService.getProjectorById(this.projector.code)
      .subscribe(data => {
        if (data!=null)
          this.projector = JSON.parse(JSON.stringify(data))
        else
          alert('Objet non trouvé !')
      }
      );
  }   

  onSubmit() {
    this.searchProjectorByCode();
  }
}
