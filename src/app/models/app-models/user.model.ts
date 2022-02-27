import { Etudiant } from "./etudiant.model";

export class Utilisateur {
  constructor(
    public email: string,
    public profile: string,
    public enabled: boolean,
    public matricule: Etudiant
  ) {
  }

}
