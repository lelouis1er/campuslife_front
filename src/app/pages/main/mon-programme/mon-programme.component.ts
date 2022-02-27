import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/app-models/seance.model';
import { CardSeanceModel } from 'src/app/models/card-seance.model';
import { ToastService } from 'src/app/services/commons/toast.service';
import { LoginService } from 'src/app/services/login.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-mon-programme',
  templateUrl: './mon-programme.component.html',
  styleUrls: ['./mon-programme.component.css'],
})
export class MonProgrammeComponent implements OnInit {
  seanceList: Seance[] = [];

  constructor(
    private _loginService: LoginService,
    private _seanceService: SeanceService,
    private _toast: ToastService
  ) {}

  ngOnInit(): void {

    this.getListseance();
  }

  getListseance() {

    console.log('recherche de seance');
    let fil = this._loginService.getFilliere();
    let niv = this._loginService.getNiveau()

    if (fil != null && niv != null) {

      this._seanceService
      .getSeance(fil.idFiliere, niv.idNiveau)
        .subscribe(
          (data) => {
            if (data != null) {
              console.log(data);
              this.seanceList = data;
            } else {
              this._toast.addSingle('warning', 'Attention: Aucune donnée reçu');
            }
          },
          (error) => {
            console.log(error);
            this._toast.addSingle('danger', 'Erreur: ' + error);
          }
        );

    }

  }

  // liste des cours en cours de difusion
  public getListCours_enCours() : Seance[] {
    let return_list: Seance[] = [];
    this.seanceList.forEach(item => {
      if (item.etat === "en cours") {
        return_list.push(item);
      }
    });
    return return_list;
  }

  public getListCours_programme() : Seance[] {
    let return_list: Seance[] = [];
    this.seanceList.forEach(item => {
      if (item.etat === "programme") {
        return_list.push(item);
      }
    });
    return return_list;
  }

  public getListCours_passe() : Seance[] {
    let return_list: Seance[] = [];
    this.seanceList.forEach(item => {
      if (item.etat === "passe") {
        return_list.push(item);
      }
    });
    return return_list;
  }

  public getListCard_programme():CardSeanceModel[] {
    let result : any[] = [];
    (this.getListCours_programme()).forEach(element =>{
      result.push(new CardSeanceModel(element, "Afficher", ""));
    });
    return result;
  }

  gotoProgramDetails(idSeance : number) {



  }


}
