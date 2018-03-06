import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CursusModule} from '../entities/cursus.module';

@Injectable()
export class CursusService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/cursus');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/cursus/' + id);
    }

    add(cursus: CursusModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/cursus', cursus,  {headers});
    }

    update(cursus: CursusModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/cursus/', cursus,  {headers});
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:8080/factory/cursus/' + id);
    }
}
