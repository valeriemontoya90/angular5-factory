import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GestionnaireMdule} from '../entities/gestionnaire.mdule';

@Injectable()
export class GestionnaireService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/gestionnaires');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/gestionnaires/' + id);
    }

    add(gestionnaire: GestionnaireMdule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/gestionnaires', gestionnaire,  {headers});
    }

    update(gestionnaire: GestionnaireMdule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/gestionnaires/', gestionnaire,  {headers});
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:8080/factory/gestionnaires/' + id);
    }
}
