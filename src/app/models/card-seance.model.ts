import { Seance } from "./app-models/seance.model";
import { CardModel } from "./card.model";

export class CardSeanceModel extends CardModel {

  constructor(
    public seance:Seance,
    public btn_txt: any,
    public btn_url : any
  ) {
    super(seance.intitule, seance.img, null, btn_txt ,btn_url);
  }
}
