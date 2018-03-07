import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MaterielService {

  constructor(private http: HttpClient) { }
    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/materiels');
    }

    listAllByTechnicienId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/materiels/technicien/' + id);
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/materiels/' + id);
    }
}
