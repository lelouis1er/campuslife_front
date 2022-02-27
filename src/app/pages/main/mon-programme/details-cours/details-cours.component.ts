import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seance } from 'src/app/models/app-models/seance.model';
import { RouteStateService } from 'src/app/services/commons/route-state.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit {

  seance!: Seance;


  constructor(
    private _routeStateService : RouteStateService,
    private _activatedRoute: ActivatedRoute,
    private _seanceService : SeanceService
  ) { }

  ngOnInit(): void {

    let hasData! : boolean;

    this._activatedRoute.queryParams.subscribe(
      params => {
        let param = params['id'];

        if (param != null) {
            this._seanceService.getSeanceById(param).subscribe(
              (data) => {
                console.log("les donnees");
                console.log(data)

                this.seance = data;
                hasData = true;
              }, (error) => {
                console.log("Une erreur:")
                console.log(error)
                hasData = false;
              }
            );
        }
      }
    );

    if (this._routeStateService.getCurrent().data == null && hasData == false) {
      hasData = false;
    }

    if (hasData == false) {
      this._routeStateService.add("mon Programme", "/main/mon-programme", null, true);
    }


  }

}
