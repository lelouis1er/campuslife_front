import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/app-models/etudiant.model';
import { Niveau } from '../models/app-models/niveau.model';
import { Utilisateur } from '../models/app-models/user.model';
import baseUrl from './commons/helper';

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
});

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  // generation du token
  public generateToken(email: string, mdp: string) {
    var data: any = {
      username: email,
      password: mdp,
    };
    return this.http.post(`${baseUrl}/generate-token`, data, {
      headers: headers,
    });
  }

  // recupere l'utilisateur courant
  public getCurrentUser () {
    return this.http.get<Utilisateur>(`${baseUrl}/current-user`, {headers: headers});
  }

  // Autentification
  public loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  //verifie si l'utilisateur est connecté
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else return true;
  }


  // logout:
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("etudiant");
    return true;
  }

  // recupère le token
  public getToken () {
    return localStorage.getItem("token");
  }

  // sauvegarde les données de l'utilisateur
  public setUserDetails(user: Utilisateur) {
    localStorage.setItem("user", JSON.stringify(user));
  }


  // recupère l'utilisateur connecté
  public getUser() {
    let usertemp =  localStorage.getItem("user");
    if (usertemp != null) {
      return JSON.parse(usertemp);
    } else {
      this.logout();
      return null;
    }
  }

  // roles utilisateur
  public getuserRole() {
    let userTemp = this.getUser();
    return userTemp.authorities[0].authority;
  }


  // recupere l'etudiant
  public getEtudiant() {
    return this.getUser().matricule;
  }

  //recupere la filliere
  public getFilliere() {
    let etudiant: Etudiant = this.getEtudiant();
    if (etudiant != null)
      return etudiant.idFiliere;
    else
      return null;
  }

  //recupere le niveau
  public getNiveau() {
    let etudiant = this.getEtudiant();
    if (etudiant != null) {
      return etudiant.idNiveau;
    }else
      return null;
  }


}
