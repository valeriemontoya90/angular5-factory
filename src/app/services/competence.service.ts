import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormateurModule} from "../entities/formateur.module";
import {CompetenceModule} from "../entities/competence.module";

@Injectable()
export class CompetenceService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/competences');
    }

    listAllByFormateurId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/competences/formateur/' + id);
    }

    add(competence: CompetenceModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/factory/competences/formateur', competence,  {headers});
    }

    update(competence: CompetenceModule): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8080/factory/competences/formateur/', competence,  {headers});
    }
}
