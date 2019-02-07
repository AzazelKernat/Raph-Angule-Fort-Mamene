import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectorService {
  private baseUrl = 'http://10.0.0.243:8080/projetfinal/videoprojecteur';

  constructor(private http: HttpClient) { }
  
  getProjectorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProjectorById(id:string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProjector(videoprojecteur: Object): Observable<Object> {
    console.log(videoprojecteur);
    return this.http.post(`${this.baseUrl}/`, videoprojecteur);
  }

  editProjector(videoprojecteur: Object): Observable<Object> {
    console.log(videoprojecteur);
    return this.http.put(`${this.baseUrl}/`, videoprojecteur);
  }

  deleteProjector(code: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${code}`);
  }

}
