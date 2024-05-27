import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionIpService {

  constructor(private _http:HttpClient) { }
   
    public getDireccionesIP(direccionIP: string): Observable<any>{
      const httpOptions ={
        headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'b53b4ab976msh8c7cbb3fae1a17dp173399jsn8f8f1f6ecb8c',
          'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
        }),
      }
      const body = new HttpParams()
        .set('ip', direccionIP);

      return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info',body, httpOptions);
    }
}