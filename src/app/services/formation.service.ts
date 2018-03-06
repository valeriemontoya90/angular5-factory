import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormationModule} from '../entities/formation.module';

@Injectable()
export class FormationService {

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/formations');
    }

    add(formation: FormationModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/formations', formation,  {headers});
    }
}
