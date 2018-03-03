import {CursusModule} from './cursus.module';

export class FormationModule {
    constructor(public id: number,
                public dateDebut: Date,
                public dateFin: Date,
                public matiere: Date,
                public formateur: CursusModule) {

    }
}