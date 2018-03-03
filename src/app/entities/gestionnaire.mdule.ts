import {CursusModule} from './cursus.module';
import {RhModule} from './rh.module';

export class GestionnaireMdule extends RhModule {
    constructor(public id: number,
                public nom: string,
                public prenom: string,
                public adresse: string,
                public codePostal: string,
                public mail: string,
                public cursus: CursusModule[]) {
        super(id, nom, prenom, adresse, codePostal, mail);
    }
}