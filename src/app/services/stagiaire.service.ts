import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class StagiaireService {

  constructor(private http: HttpClient) {
  }
    list(): Observable<any> {
        return this.http.get('http://localhost:8080/factory/stagiaires');
    }

}
