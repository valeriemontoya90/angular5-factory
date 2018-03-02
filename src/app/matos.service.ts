import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SalleModule} from "./matos/salle.module";

@Injectable()
export class MatosService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/salles');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/salles/' + id);
    }

    add(salle: SalleModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/salles', salle,  {headers});
    }

    update(salle: SalleModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/salles/', salle,  {headers});
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:8080/factory/salles/' + id);
    }
}