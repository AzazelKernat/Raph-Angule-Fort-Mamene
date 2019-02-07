import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = 'http://localhost:8080/projetfinal/formateur';

  constructor(private http: HttpClient) { }

  getTrainersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTrainerById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrainer(trainer: Trainer): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, trainer);
  }

  editTrainer(trainer: Trainer): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, trainer);
  }

  deleteTrainer(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}