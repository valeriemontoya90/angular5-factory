import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<any> {
        return this.http.get('showcase/resources/data/scheduleevents.json');
    }
}