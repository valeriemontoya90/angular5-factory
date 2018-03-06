export class CompetenceModule {
    constructor(
                public id: number,
                public level: string,
                public matiere: number,
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