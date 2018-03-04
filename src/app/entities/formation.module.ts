import {CursusModule} from './cursus.module';
import {MatiereModule} from './matiere.module';

export class FormationModule {
    constructor(public id: number,
                public dateDebut: Date,
                public dateFin: Date,
                public matiere: MatiereModule,
                public formateur: CursusModule) {

    }
}