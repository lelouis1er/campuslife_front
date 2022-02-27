import { Filiere } from "./Filiere.model";
import { Niveau } from "./niveau.model";
import { Matiere } from "./matiere.model";

export class Seance {

  constructor(
    public idSeance: number,
    public dateSeance: Date,
    public etat: string,
    public heureDebut: Date,
    public heureFin: Date,
    public intitule: string,
    public img: string,
    public idFiliere: Filiere,
    public idNiveau: Niveau,
    public idMatiere: Matiere
  ){}

}
