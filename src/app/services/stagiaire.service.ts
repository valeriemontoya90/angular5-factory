import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StagiaireModule} from '../entities/stagiaire.module';


@Injectable()
export class StagiaireService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/stagiaires');
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/stagiaires/' + id);
    }

    add(stagiaire: StagiaireModule): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8080/factory/stagiaires', stagiaire, {headers});
    }

    update(stagiaire: StagiaireModule): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8080/factory/stagiaires/', stagiaire, {headers});
    }

    delete(id: number): Observable<any> {
        return this.http.delete('http://localhost:8080/factory/stagiaires/' + id);
    }

}
