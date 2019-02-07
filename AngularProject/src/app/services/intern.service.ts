import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private baseUrl = 'http://localhost:8080/projetfinal/stagiaire';

  constructor(private http: HttpClient) { }

  getInternsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getInternById(id:number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createIntern(intern: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, intern);
  }

  editIntern(intern: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, intern);
  }

  deleteIntern(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}