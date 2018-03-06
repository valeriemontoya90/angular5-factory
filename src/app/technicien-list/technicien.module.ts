import {MaterielComponent} from '../materiel/materiel.component';

export class TechnicienModule {
    constructor(public id: number,
                public nom: string,
                public prenom: string,
                public adresse: string,
                public codePostal: string,
                public mail: string,
                public materiel: Array<MaterielComponent>) {
    }
}