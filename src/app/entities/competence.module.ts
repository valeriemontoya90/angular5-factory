import {MatiereModule} from './matiere.module';

export class CompetenceModule {
    constructor(
                public id: number,
                public level: string,
                public matiere: MatiereModule,
                public formateur: number) {
    }

    toJSON(): any {
        return {
            level: this.level,
            matiere: {id: this.matiere},
            formateur: {id: this.formateur}
        }
    }
}