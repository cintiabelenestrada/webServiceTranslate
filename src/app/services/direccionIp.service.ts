import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionIpService {

  constructor(private _http:HttpClient) { }
   
    public getDireccionesIP(): Observable<any>{
      const httpOptions ={
        headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
          'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
        }),
      }
      const body = new HttpParams()
        .set('ip', '162.209.106.137');

      return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info',body, httpOptions);
    }
}