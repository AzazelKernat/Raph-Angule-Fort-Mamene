import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GestionnaireService {

    private baseUrl = 'http://localhost:8080/projetfinal/gestionnaire';

    constructor(private http: HttpClient) { }

    getGestionnairesList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    // tslint:disable-next-line:ban-types
    getGestionnaireById(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    // tslint:disable-next-line:ban-types
    createGestionnaire(gestionnaire: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/`, gestionnaire);
    }

    // tslint:disable-next-line:ban-types
    editGestionnaire(gestionnaire: Object): Observable<Object> {
        return this.http.put(`${this.baseUrl}/`, gestionnaire);
    }

    // tslint:disable-next-line:ban-types
    deleteGestionnaire(id: number): Observable<Object> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
