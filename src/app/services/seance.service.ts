import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seance } from '../models/app-models/seance.model';
import baseUrl from './commons/helper';


const headers: HttpHeaders = new HttpHeaders(
  {
    'Access-Control-Allow-Origin' : '*'
  }
);

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  params!:HttpParams;

  constructor(
    private http: HttpClient
  ) { }


  getSeance(idFiliere: number, idNiveau: number) {
    this.params = new HttpParams()
                            .append('idF', idFiliere)
                            .append('idN', idNiveau);
    return this.http.get<Seance[]>(`${baseUrl}/seance/getSeance`, {headers: headers, params: this.params});
  }


  getSeanceById(idSeance: number) {
    this.params = new HttpParams()
                          .append("idSeance", idSeance);
    return this.http.get<Seance>(`${baseUrl}/seance/getById`, {headers: headers, params: this.params});
  }

}
