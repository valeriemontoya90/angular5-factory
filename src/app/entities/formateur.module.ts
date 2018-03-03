import {DisponibiliteModule} from './disponibilite.module';
import {CompetenceModule} from './competence.module';
import {FormationModule} from './formation.module';
import {RhModule} from './rh.module';
import {CursusModule} from './cursus.module';

export class FormateurModule extends RhModule {
    constructor(public id: number,
                public nom: string,
                public prenom: number,
                public adresse: string,
                public codePostal: string,
                public mail: number,
                public cursus: CursusModule[],
                public disponibilites: DisponibiliteModule[],
                public competences: CompetenceModule[],
                public formations: FormationModule[]) {
        super(id, nom, prenom, adresse, codePostal, mail);
    }
}

