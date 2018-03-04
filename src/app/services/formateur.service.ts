import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormateurModule} from '../entities/formateur.module';

@Injectable()
export class FormateurService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/formateurs');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/formateurs/' + id);
    }

    add(formateur: FormateurModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/formateurs', formateur,  {headers});
    }

    update(formateur: FormateurModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/formateurs/', formateur,  {headers});
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:8080/factory/formateurs/' + id);
    }
}
