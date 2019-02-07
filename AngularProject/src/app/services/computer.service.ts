import { SearchComputersComponent } from './../computers/search-computers/search-computers.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private baseUrl = 'http://10.0.0.243:8080/projetfinal/ordinateur';

  constructor(private http: HttpClient) { }

  getComputersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getComputerById(id:string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createComputer(computer: Object): Observable<Object> {
    console.log(computer);
    return this.http.post(`${this.baseUrl}/`, computer);
  }

  editComputer(computer: Object): Observable<Object> {
    console.log(computer);
    return this.http.put(`${this.baseUrl}/`,computer);
  }

  deleteComputer(code: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${code}`);
  }

  SearchComputerByIntern(): Observable<any> {
    return this.http.get(`${this.baseUrl}/intern`);
  }
}
