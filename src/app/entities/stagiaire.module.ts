import {OrdinateurModule} from "./ordinateur.module";
import {RhModule} from "./rh.module";

export class StagiaireModule extends RhModule {
    constructor(public id: number,
                public nom: string,
                public prenom: string,
                public adresse: string,
                public codePostal: string,
                public mail: string,
                public ordinateur: number) {
        super(id, nom, prenom, adresse, codePostal, mail);
    }

    toJSON(): any {
        return {
            nom: this.nom,
            prenom: this.prenom,
            adresse: this.adresse,
            codePostal: this.codePostal,
            mail: this.mail,
            ordinateur: {id : this.ordinateur}
        }
    }
}