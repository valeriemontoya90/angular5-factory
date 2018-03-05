import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GestionnaireMdule} from '../entities/gestionnaire.mdule';
import {MatiereModule} from '../entities/matiere.module';

@Injectable()
export class MatiereService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/matieres');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/matieres/' + id);
    }

    add(matiere: MatiereModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/matieres', matiere,  {headers});
    }

    update(matiere: MatiereModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/matieres/', matiere,  {headers});
    }

    delete(id:number): Observable<any>{
        return this.http.delete('http://localhost:8080/factory/matieres/' + id);
    }
}
