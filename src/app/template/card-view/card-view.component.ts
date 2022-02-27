import { Component, Input, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/app-models/seance.model';
import { CardSeanceModel } from 'src/app/models/card-seance.model';
import { RouteStateService } from 'src/app/services/commons/route-state.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() title_section : string = "";
  @Input() cards_infos : CardSeanceModel[] = [];
  @Input() empty_list_msg : string = "Aucune scéance trouvé";

  constructor(
    private routeStateService : RouteStateService
  ) { }

  ngOnInit(): void {
  }

  isEmpty(): boolean {
    return this.cards_infos.length < 1;
  }

  public onButtonClick(title: string, dest: string, data: any){
    this.routeStateService.add(title, dest, data, false);
  }

  public gotoSeanceDetails (seance : any) {
    console.log("affichage des details")
    if (seance != null) {
      this.routeStateService.add(seance.intitule, "/main/mon-programme/details", seance, false);
    }
  }

}
