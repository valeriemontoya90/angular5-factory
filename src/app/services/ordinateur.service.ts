import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OrdinateurModule } from '../ordinateur-show/ordinateur.module';


@Injectable()
export class OrdinateurService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/ordinateurs');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/ordinateurs/' + id);
    }

    add(ordinateur: OrdinateurModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/ordinateurs', ordinateur, { headers });
    }

    update(ordinateur: OrdinateurModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/ordinateurs/', ordinateur, { headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete('http://localhost:8080/factory/ordinateurs/' + id);
    }

    ListAllByStagiaireId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/ordinateurs/' + id);
    }
}