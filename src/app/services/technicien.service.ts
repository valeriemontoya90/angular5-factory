import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TechnicienModule} from '../technicien-list/technicien.module';

@Injectable()
export class TechnicienService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/techniciens');
    }
    ListAllByMaterielId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/formateurs/materiels' + id);
    }

    getOne(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/factory/techniciens/' + id);
    }

    add(technicien: TechnicienModule): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8080/factory/techniciens', technicien, {headers});
    }

    update(technicien: TechnicienModule): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8080/factory/techniciens/', technicien, {headers});
    }

    delete(id: number): Observable<any> {
        return this.http.delete('http://localhost:8080/factory/techniciens/' + id);
    }

}
