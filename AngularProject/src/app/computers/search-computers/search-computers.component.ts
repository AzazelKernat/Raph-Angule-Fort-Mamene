import { Observable } from 'rxjs';
import { ComputerService } from './../../services/computer.service';
import { Component, OnInit } from '@angular/core';
import { Computer } from './../../models/computer';
import { Intern } from 'src/app/models/intern';
import { Adress } from 'src/app/models/adress';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-search-computers',
  templateUrl: './search-computers.component.html',
  styleUrls: ['./search-computers.component.css']
})
export class SearchComputersComponent implements OnInit {

  computer: Computer = new Computer();
  computer2: Computer = new Computer();
  computers: Observable<Computer[]>;


  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.computer2.intern=new Intern();
    this.computer2.intern.adress= new Adress();
    this.computer2.intern.contact=new Contact();
  }

  searchComputerByCode() {
    this.computerService.getComputerById(this.computer.code)
      .subscribe(data => {
        if (data!=null)
          this.computer = JSON.parse(JSON.stringify(data))
        else
          alert('Objet non trouvé !')
      }
      );
  }

  searchComputersWithInterns() {
    this.computerService.SearchComputerByIntern().subscribe(data => {
     this.computer2=data[0];
     this.computer2.intern=data[0]['intern'];
     this.computer2.intern.adress=data[0]['intern']['adress'];
     this.computer2.intern.contact=data[0]['intern']['contact'];
     console.log(this.computer2.intern);
     console.log(this.computer2.intern.adress);
     console.log(this.computer2.intern.contact);
    
    });

    
    }
      

  onSubmit() {
    this.searchComputersWithInterns();
  }

  onSubmit2() {
    this.computer=new Computer();
  }

}
