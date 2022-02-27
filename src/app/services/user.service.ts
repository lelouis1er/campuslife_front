import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/app-models/user.model';
import baseUrl from './commons/helper';

const headers = new HttpHeaders(
    {
      'Access-Control-Allow-Origin' : '*'
    }
  )


@Injectable({
  providedIn: 'root'
})
export class UserService {

  params = new HttpParams();

  constructor(private http: HttpClient) {

  }


  public genCode(mat: string, email: string): Promise<boolean> {
    var data : string[] = [mat,email]
    return this.http.post<boolean>(`${baseUrl}/user/genCodeAccount`, data, {headers: headers}).toPromise();
  }

  public activeAccount(code: string, pass: string): Promise<boolean> {
    var data : string[] = [code,pass]
    console.log("les donées envoyée: " + data);
    return this.http.post<boolean>(`${baseUrl}/user/activeAccount`, data, {headers: headers}).toPromise();
  }

}
