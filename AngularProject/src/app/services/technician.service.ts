import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  private baseUrl = 'http://localhost:8080/projetfinal/technicien';

  constructor(private http: HttpClient) { }

  getTechniciansList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTechnicianById(id:number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTechnician(technician: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, technician);
  }

  editTechnician(technician: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, technician);
  }

  deleteTechnician(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}