import {CursusModule} from './cursus.module';
import {MatiereModule} from './matiere.module';
import {FormateurModule} from './formateur.module';

export class FormationModule {
    constructor(public id: number,
                public dateDebut: Date,
                public dateFin: Date,
                public matiere: MatiereModule,
                public formateur: FormateurModule,
                public cursus: CursusModule) {
    }

    toJSON(): any {
        return {
            dateDebut: this.dateDebut,
            dateFin: this.dateFin,
            matiere: {id : this.matiere},
            formateur: {id: this.formateur},
            cursus: this.cursus
        }
    }
}