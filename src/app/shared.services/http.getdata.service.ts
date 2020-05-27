import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('X-Auth-Token', 'de3d69bc02c846c8b684d41afece2374');
    }
    
    public getData(url: string): Observable <any> {
        return this.http.get(url, {
            headers: this.headers
        })
    }
}