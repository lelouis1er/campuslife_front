import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteStateService } from 'src/app/services/commons/route-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modeList : string [] = ["login", "register", "active"];
  mode: string = "login";
  card_title: string = "Connexion";

  constructor(
    private _routeStateService: RouteStateService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.queryParams.subscribe(
      params => {
        let param = params['mode'];

        if (param != null) {
            let exist = ( this.modeList.find( m => m === param) )? true: false;
            if  (exist) {
              this.defineMode(param);
            }
        }
      }
    );

    this.defineTitle();


  }

  defineMode(value: string) {
    this.mode = value;
    this.defineTitle();
  }

  defineTitle() {
    if (this.mode==this.modeList[0]) {
      this.card_title = "Connexion"
    } else if (this.mode==this.modeList[1]) {
      this.card_title = "Nouveau"
    } else if (this.mode==this.modeList[2]) {
      this.card_title = "Activer"
    }
  }

  showRegisterForm() : boolean{
    return this.mode === "register";
  }

  showLoginForm() : boolean{
    return this.mode === "login";
  }


}
