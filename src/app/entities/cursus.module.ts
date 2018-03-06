import {FormationModule} from './formation.module';
import {StagiaireModule} from './stagiaire.module';

export class CursusModule {
    constructor(public id: number,
                public titre: string,
                public dateDebut: Date,
                public dateFin: Date,
                public stagiaires: StagiaireModule[],
                public formations: FormationModule[]) {
    }
}