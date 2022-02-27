import { Filiere } from "./Filiere.model";
import { Niveau } from "./niveau.model";

export class Etudiant {

  constructor(
    public matricule: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public idFiliere: Filiere,
    public idNiveau: Niveau
  ) {}

  public apercu() : string {
    return "Etudiant: " + this.nom + " [Niveau: " + this.idNiveau.nom + "]"
  }
}
