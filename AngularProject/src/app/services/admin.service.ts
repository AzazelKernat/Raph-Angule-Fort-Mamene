import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/projetfinal/admin';

  constructor(private http: HttpClient) { }

  getAdminsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAdminById(id:number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, admin);
  }

  editAdmin(admin: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`,admin);
  }

  deleteAdmin(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}