import {CursusModule} from './cursus.module';
import {RhModule} from './rh.module';

export class GestionnaireMdule extends RhModule {
    constructor(public id: number,
                public nom: string,
                public prenom: number,
                public adresse: string,
                public codePostal: string,
                public mail: number,
                public cursus: CursusModule[]) {
        super(id, nom, prenom, adresse, codePostal, mail);
    }
}