import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VideoprojModule } from '../videoproj-show/videoproj.module';

@Injectable()
export class VideoprojService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get('http://localhost:8080/factory/videoProjecteurs');
}

getOne(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/factory/videoProjecteurs/' + id);
}

add(videoProj: VideoprojModule): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8080/factory/videoProjecteurs', videoProj,  {headers});
}

update(videoProj: VideoprojModule): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put('http://localhost:8080/factory/videoProjecteurs/', videoProj,  {headers});
}

delete(id:number): Observable<any>{
    return this.http.delete('http://localhost:8080/factory/videoProjecteurs/' + id);
}

}
