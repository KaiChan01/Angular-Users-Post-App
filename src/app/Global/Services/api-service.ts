import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ApiService {

    private service = environment.serviceURL;

    

    constructor(private http: HttpClient) {
    }


    getRequest<T>(endpoint: string, params?: HttpParams) {
        const finalURL = this.service + endpoint;
        return this.http.get<T>(finalURL, {params, observe: 'body',responseType: 'json'});
    }
}